import { Prompt } from '@/helpers/interface';
import TagCard from '@/components/TagCard';
export interface PromptCardProps extends Prompt {}

export default function PromptCard({ title, price, tag, image, rating }: PromptCardProps) {
  const getDirection = (rating: number | undefined) => (rating ? 'row' : 'row-reverse');

  return (
    <div
      className="flex flex-col w-[270px] h-[240px] p-3.5 bg-no-repeat bg-cover border-2 border-[#FFFFFF4D] rounded-lg"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="flex justify-between" style={{ flexDirection: getDirection(rating) }}>
        <TagCard type={tag} />
        {rating && <TagCard type="rating" value={rating.toString()} />}
      </div>

      <div className="flex w-full h-1/2 mt-auto items-end">
        <span className="grow mr-5">{title}</span>
        <span className="font-medium text-xl leading-6">${price}</span>
      </div>
    </div>
  );
}
