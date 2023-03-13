import type { NextPage } from 'next';
import Image from 'next/image';
import Icon from '@/components/Icon';
import User from '@/components/User';
import ChatFrame from '@/components/ChatFrame';
import React, { useState, useRef, useEffect, RefObject } from 'react';
import UserService from '../../supabase/User';
import MessageService from '../../supabase/Message';
import RoomService from '../../supabase/Room';
import supabase from '@/utils/supabase';
import { useRouter } from 'next/router';

const Chat: NextPage = () => {
  const router = useRouter();
  const roomId = router.query.id;

  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState({});
  const [messages, setMessages] = useState([]);
  const [client, setClient] = useState('');

  const inputRef = useRef();

  const getMessages = async (roomId) => {
    const room = await RoomService.find_room({ room_id: roomId });
    if (room.error) return;
    if (room.data?.length === 0) return [];
    const clientId = room.data[0].user2 === current.id ? room.data[0].user1 : room.data[0].user2;
    setClient(clientId);
    const client = await UserService.find({ id: clientId });
    if (client.error) return;
    setClient(client.data[0]);
    const { data, error } = await MessageService.retrieve({ room_id: roomId });
    setMessages(data);
    return [];
  };

  useEffect(() => {
    const channel = supabase
      .channel('message')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'message',
          filter: 'room_id=eq.' + roomId,
        },
        (payload) => {
          getMessages(roomId);
        },
      )
      .subscribe();

    UserService.find_all().then((response) => {
      const { data, error } = response;
      if (error !== null) return;
      setUsers(data);
    });

    UserService.get_session().then(async (response) => {
      const { data, error } = response;
      if (error !== null) return;
      if (!data.session) {
        window.location.pathname = '/login';
        return;
      }
      const id = data.session.user.id;

      if (error !== null) {
        window.location.pathname = '/login';
        return;
      }
      const res = await UserService.find({ id });
      setCurrent(res.data[0]);
      getMessages(roomId);
    });
  }, [roomId]);

  const handleSend = () => {
    const message = inputRef.current.value;
    if (message === '') return;
    MessageService.create({
      room_id: roomId,
      sender_id: current.id,
      receiver_id: client.id,
      content: message,
    }).then(({ data, error }) => {
      if (error === null) {
        inputRef.current.value = '';
      }
    });
  };

  const onKeyUp = (event) => {
    console.log(event.code, event.keyCode);
    if (event.keyCode === 13) {
      handleSend();
    }
  };

  return (
    <div className="bg-[#222236] w-full rounded-lg overflow-auto">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-2 border-r-2 border-[#FFFFFF] border-opacity-10 h-full">
          <div className="flex flex-col px-4 py-4 space-y-2">
            <p className="text-gray-400">InMail</p>
            <div className="grow flex bg-[#515151] items-center px-4 py-2 mr-9 border-[0.5px] border-[#FFFFFF99] rounded-full">
              <Icon>search</Icon>
              <input
                className="grow bg-[#515151] outline-none placeholder:text-white placeholder:text-sm placeholder:leading-4"
                type="text"
                placeholder="Search Users..."
              />
            </div>
            <div className="space-y-6 cursor-pointer">
              {users.map(({ avatar_url, username, nickname, id }, index) => (
                <User
                  currentId={current.id}
                  clientId={id}
                  key={index}
                  avatar={avatar_url}
                  name={username}
                  nickName={nickname}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-10 border-r-2 border-[#FFFFFF] border-opacity-10">
          <div className="flex items-center bg-[#4CDE55] h-[60px] w-full px-4 mb-6">
            <div className="flex flex-row gap-4 items-center">
              <Image src={client.avatar_url} alt="avatar" width="41" height="41" className="rounded-full" />
              <div className="flex flex-col text-sm text-black">
                <p className="font-bold">{client.username}</p>
                <p className="text-xs">{client.status ? 'Typing...' : ''} </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-4">
            {messages &&
              messages.map(({ avatar_url, content, created_at, sender_id, receiver_id }, index) =>
                current.id === sender_id ? (
                  <div key={index} className="ml-auto">
                    <ChatFrame
                      avatar={current.avatar_url}
                      message={content}
                      timeStamp={created_at}
                      type={current.id === sender_id ? 'me' : 'other'}
                    />
                  </div>
                ) : (
                  <div key={index} className="mr-auto">
                    <ChatFrame
                      avatar={client.avatar_url}
                      message={content}
                      timeStamp={created_at}
                      type={current.id === sender_id ? 'me' : 'other'}
                    />
                  </div>
                ),
              )}
          </div>
          <div className="sticky bottom-0 grow flex bg-[#515151] items-center px-4 py-1 items-center border-[0.5px] border-[#FFFFFF99] rounded-full mx-4">
            <input
              onKeyUp={onKeyUp}
              ref={inputRef}
              className="grow bg-[#515151] outline-none placeholder:text-gray-300 placeholder:text-sm placeholder:leading-4"
              type="text"
              placeholder="Type your message here..."
            />
            <div className="flex flex-row gap-2 items-center">
              <div className="flex bg-white rounded-full w-[25px] h-[25px] justify-center items-center">
                <Icon>emoti</Icon>
              </div>
              <div className="flex bg-white rounded-full w-[25px] h-[25px] justify-center items-center">
                <Icon>paperClip</Icon>
              </div>
              <div
                onClick={handleSend}
                className="cursor-pointer flex bg-yellow rounded-full px-3 py-2 justify-center items-center gap-2"
              >
                <Icon>send</Icon>
                <p className="text-black font-bold">Send</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
