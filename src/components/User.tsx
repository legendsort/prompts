import Image from 'next/image';

interface userProps {
  avatar: string;
  name: string;
  nickName: string;
}
const User = ({ avatar, name, nickName }: userProps) => {
  return (
    <>
      <div className="flex flex-row space-x-4">
        <Image src={avatar} alt="avatar" width="41" height="41" className="rounded-full" />
        <div className="flex flex-col text-sm">
          <p>{name}</p>
          <p>@{nickName}</p>
        </div>
      </div>
    </>
  );
};

export default User;
