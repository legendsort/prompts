import Image from 'next/image';
import RoomService from '../supabase/Room';
import { useRouter } from 'next/router';

interface userProps {
  avatar: string;
  name: string;
  nickName: string;
  clientId: string;
  currentId: string;
}
const User = ({ avatar, name, nickName, currentId, clientId }: userProps) => {
  const router = useRouter();

  const handleClick = async () => {
    const roomId = await RoomService.create({
      user1: clientId,
      user2: currentId,
    });
    if (roomId === null) return;
    if (roomId === undefined) return;
    const room_id = roomId;
    router.push('/chat/' + room_id);
  };

  return (
    <>
      <div className="flex flex-row space-x-4  " onClick={handleClick}>
        <div className="rounded-full w-[41px] h-[41px]">
          <Image src={avatar} alt="avatar" width="41" height="41" className="rounded-full" />
        </div>
        <div className="flex flex-col text-sm">
          <p>{name}</p>
          <p>@{nickName}</p>
        </div>
      </div>
    </>
  );
};

export default User;
