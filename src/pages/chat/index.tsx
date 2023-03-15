import type { NextPage } from 'next';
import Icon from '@/components/Icon';
import User from '@/components/User';
import ChatFrame from '@/components/ChatFrame';
import React, { useState, useRef, useEffect, RefObject } from 'react';
import UserService from '../../supabase/User';
import MessageService from '../../supabase/Message';
import RoomService from '../../supabase/Room';
import supabase from '@/utils/supabase';
import { useRouter } from 'next/router';

interface userProps {
  avatar: string;
  name: string;
  nickName: string;
  avartar_url?: string;
}

interface messageProps {
  avatar_url: string;
  content: string;
  created_at: string;
  sender_id: string;
  receiver_id: string;
}

const Chat: NextPage = () => {
  const router = useRouter();
  const roomId = router.query.id;

  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState<any>('');
  const [messages, setMessages] = useState<any>([]);
  const [client, setClient] = useState<any>('');

  useEffect(() => {
    const getMessages = async (roomId: string) => {
      const room = await RoomService.find_room({ room_id: roomId });
      if (room.error) return;
      if (room.data === null || room.data.length === 0) return [];
      const clientId = room.data[0]?.user2 === current.id ? room.data[0]?.user1 : room.data[0]?.user2;
      setClient(clientId);
      const client = await UserService.find({ id: clientId });
      if (client.error) return;
      if (client.data === null) return;
      setClient(client.data[0]);
      const { data } = await MessageService.retrieve({ room_id: roomId });
      setMessages(data);
      return [];
    };
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
          getMessages(roomId as string);
        },
      )
      .subscribe();

    UserService.find_all().then((response) => {
      const { data, error } = response;
      if (error !== null) return;
      setUsers(data as any);
    });

    UserService.get_session().then(async (response) => {
      const { data, error } = response;
      if (error !== null) return;
      const id = data.session?.user.id;
      const res = (await UserService.find({ id })) as any;
      setCurrent(res.data[0]);
      getMessages(roomId as any);
    });
  }, [roomId, current.id]);

  const onKeyUp = (event: any) => {
    if (event.keyCode === 13) {
      handleUserSearch(event);
    }
  };

  const handleUserSearch = (e: any) => {
    const user: string = e.target.value;
    UserService.find_by_name({ username: user }).then((data) => {
      setUsers(data.data as any);
    });
  };

  return (
    <div className="bg-[#222236] w-full rounded-lg h-[840px]">
      <div className="grid grid-cols-12 h-screen max-h-[840px]">
        <div className="col-span-2 border-r-2 border-[#FFFFFF] border-opacity-10 overflow-auto">
          <div className="flex flex-col px-4 py-4 space-y-2">
            <p className="text-gray-400 text-left">InMail</p>
            <div className="grow flex bg-[#515151] items-center px-4 py-2 mr-9 border-[0.5px] border-[#FFFFFF99] rounded-full">
              <Icon>search</Icon>
              <input
                onKeyUp={onKeyUp}
                className="grow bg-[#515151] outline-none placeholder:text-white placeholder:text-sm placeholder:leading-4"
                style={{ width: '-webkit-fill-available' }}
                type="text"
                placeholder="Search Users..."
                name="userSearch"
                onChange={(e: any) => {
                  handleUserSearch(e);
                }}
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

        <div className="col-span-10 border-r-2 border-[#FFFFFF] border-opacity-10 relative  ">
          <div className="flex flex-col gap-6 px-4">
            {messages &&
              messages.map(({ avatar_url, content, created_at, sender_id, receiver_id }: messageProps) =>
                current.id === sender_id ? (
                  <div key={sender_id} className="ml-auto">
                    <ChatFrame
                      avatar={current.avatar_url}
                      message={content}
                      timeStamp={created_at}
                      type={current.id === sender_id ? 'me' : 'other'}
                    />
                  </div>
                ) : (
                  <div key={sender_id} className="mr-auto">
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
        </div>
      </div>
    </div>
  );
};

export default Chat;
