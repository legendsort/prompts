import { IPromptEngineer } from '@/helpers/interface';
import Image from 'next/image';
import Icon from '@/components/Icon';

export interface PromptEngineerProps extends IPromptEngineer {}

export default function PromptEngineer({ engineerId, viewer, tag, image, avatar }: PromptEngineerProps) {
  return (
    <div
      className="flex flex-col w-[270px] h-[240px] bg-no-repeat bg-cover bg-center border-2 border-[#FFFFFF4D] rounded-lg"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="flex w-full mt-5 items-center justify-center ">
        <Image src={avatar} alt="avatar" width="63" height="63" className="rounded-full border-2 border-gray-400 " />
      </div>
      <div className="flex items-end w-full h-1/2 p-3.5 mt-auto bg-gradient-to-b from-[#00000000] to-black gap-2 justify-center">
        <span className="grow mr-5">@{engineerId}</span>
        <div className="inline-flex gap-1 items-center">
          <Icon>eye</Icon>
          <span className="font-medium text-lg leading-6">{viewer}</span>
        </div>
        <div className="inline-flex gap-1 items-center">
          <Icon>tag</Icon>
          <span className="font-medium text-lg leading-6">{tag}</span>
        </div>
      </div>
    </div>
  );
}
