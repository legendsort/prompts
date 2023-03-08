import Image from 'next/image';
import { TagPosition } from '@/helpers/interface';
import { TAG_IMAGE_MAP } from '@/helpers/constants';

export default function TagCard({ type, value }: { type: string; value?: string }) {
  const { position, image } = TAG_IMAGE_MAP[type];

  const getDirection = (position: TagPosition) => (position === TagPosition.left ? 'row' : 'row-reverse');

  return (
    <div
      className="flex items-center bg-white rounded-md px-2.5 py-1.5 gap-x-1.5"
      style={{ flexDirection: getDirection(position) }}
    >
      <Image src={image} alt={type} width="15" height="15" />
      <span className="text-black text-sm leading-4 font-medium">{value || type}</span>
    </div>
  );
}
