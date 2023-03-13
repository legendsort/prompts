import Image from "next/image";
import clsx from "classnames";

interface chartFrameProps {
  avatar: string;
  message: string;
  timeStamp: any;
  type: string;
}

const formatTimestamp = (timestamp: any) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
};

const ChatFrame = ({ avatar, message, timeStamp, type }: chartFrameProps) => {
  return (
    <div
      className={clsx("flex items-start gap-4", {
        "flex-row": type === "other",
        "flex-row-reverse": type !== "other",
      })}
    >
      <Image src={avatar} alt={type} width="41" height="41" />
      <div
        className={clsx("flex flex-col space-y-2 leading-6", {
          "items-start": type === "other",
          "items-end": type !== "other",
        })}
      >
        <div
          className={clsx(
            "rounded-[4px] w-fit text-white max-w-[300px] py-2 px-4 border-black-2 ",
            {
              "bg-[#515151] shadow-[0px_22px_60px_rgba(0, 0, 0, 0.04)]":
                type === "me",
              "bg-[#37B649] bg-opacity-30 shadow-[0px_22px_60px_-14px rgba(0, 0, 0, 0.04)]":
                type !== "me",
            }
          )}
        >
          <p>{message}</p>
        </div>
        <p className="text-xs text-gray-400">{formatTimestamp(timeStamp)}</p>
      </div>
    </div>
  );
};

export default ChatFrame;
