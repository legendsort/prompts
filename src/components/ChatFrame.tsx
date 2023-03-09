import Image from 'next/image';
import clsx from 'classnames';

interface chartFrameProps {
  avatar: string;
  message: string;
  timeStamp: string;
  type: string;
}

const ChatFrame = ({ avatar, message, timeStamp, type }: chartFrameProps) => {
  return (
    <div
      className={clsx('flex items-start gap-4', { 'flex-row': type === 'other', 'flex-row-reverse': type !== 'other' })}
    >
      <Image src={avatar} alt={type} width="41" height="41" />
      <div
        className={clsx('flex flex-col space-y-2 leading-6', {
          'items-start': type === 'other',
          'items-end': type !== 'other',
        })}
      >
        <div
          className={clsx('rounded-[4px] w-fit text-white max-w-[300px] py-2 px-4 border-black-2 ', {
            'bg-[#515151] shadow-[0px_22px_60px_rgba(0, 0, 0, 0.04)]': type === 'other',
            'bg-[#37B649] bg-opacity-30 shadow-[0px_22px_60px_-14px rgba(0, 0, 0, 0.04)]': type !== 'other',
          })}
        >
          <p>{message}</p>
        </div>
        <p className="text-xs text-gray-400">{timeStamp}</p>
      </div>
    </div>
  );
};

export default ChatFrame;
