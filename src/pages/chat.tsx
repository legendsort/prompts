import type { NextPage } from 'next';
import Image from 'next/image';
import Icon from '@/components/Icon';
import User from '@/components/User';
import { users, messages } from '@/helpers/mock';
import ChatFrame from '@/components/ChatFrame';
const Chat: NextPage = () => {
  return (
    <div className="bg-[#222236] w-full rounded-lg overflow-auto">
      <div className="grid grid-cols-12 h-full">
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
            <div className="space-y-6">
              {users.map(({ avatar, name, nickName }, index) => (
                <User key={index} avatar={avatar} name={name} nickName={nickName} />
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-8 border-r-2 border-[#FFFFFF] border-opacity-10">
          <div className="flex items-center bg-[#4CDE55] h-[60px] w-full px-4 mb-6">
            <div className="flex flex-row gap-4 items-center">
              <Image src="/avatars/avatar1.png" alt="avatar" width="41" height="41" className="rounded-full" />
              <div className="flex flex-col text-sm text-black">
                <p className="font-bold">John Dae</p>
                <p className="text-xs">Typing...</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-4">
            {messages.map(({ avatar, message, timeStamp, type }, index) =>
              type === 'other' ? (
                <div key={index} className="mr-auto">
                  <ChatFrame avatar={avatar} message={message} timeStamp={timeStamp} type={type} />
                </div>
              ) : (
                <div key={index} className="ml-auto">
                  <ChatFrame avatar={avatar} message={message} timeStamp={timeStamp} type={type} />
                </div>
              ),
            )}
          </div>
          <div className="grow flex bg-[#515151] items-center px-4 py-1 items-center border-[0.5px] border-[#FFFFFF99] rounded-full mx-4">
            <input
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
              <div className="flex bg-yellow rounded-full px-3 py-2 justify-center items-center gap-2">
                <Icon>send</Icon>
                <p className="text-black font-bold">Send</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
};

export default Chat;
