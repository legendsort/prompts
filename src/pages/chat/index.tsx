import type { NextPage } from 'next';
import Icon from '@/components/Icon';
import User from '@/components/User';
import { users, messages } from '@/helpers/mock';
import ChatFrame from '@/components/ChatFrame';
const Chat: NextPage = () => {
  return (
    <>
      <div className="bg-[#222236] w-[1140px] h-[776px] rounded-lg mx-auto my-12 overflow-auto">
        <div className="grid grid-cols-10 gap-2 h-full">
          <div className="col-span-3 border-r-2 border-[#FFFFFF] border-opacity-10 h-full scroll-auto">
            <div className="flex flex-col px-4 py-4 space-y-2">
              <p>InMail</p>
              <div className="grow flex bg-[#515151] items-center px-4 py-3 mr-9 border-[0.5px] border-[#FFFFFF99] rounded-full">
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

          <div className="col-span-7 px-4">
            <div className="flex flex-col gap-8">
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
            <div className="grow flex bg-[#515151] items-center px-4 py-1 items-center border-[0.5px] border-[#FFFFFF99] rounded-full">
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
        </div>
      </div>
    </>
  );
};

export default Chat;
