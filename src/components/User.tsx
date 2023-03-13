import Image from 'next/image';
import RoomService from '../supabase/Room';

interface userProps {
  avatar: string;
  name: string;
  nickName: string;
}
const User = ({ avatar, name, nickName, currentId, clientId }: userProps) => {
  const handleClick = async () => {
    const roomId = await RoomService.create({ user1: clientId, user2: currentId });
    if (roomId === null) return;
    if (roomId === undefined) return;
    const room_id = roomId;
    window.location.pathname = '/chat/' + room_id;
  };

  return (
    <>
      <div className="flex flex-row space-x-4" onClick={handleClick}>
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
