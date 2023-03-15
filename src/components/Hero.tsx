import PromptCard from '@/components/PromptCard';
import Image from 'next/image';
import { heroPrompts } from '@/helpers/mock';

export default function Hero() {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <div className="flex flex-col gap-y-32">
        <PromptCard
          key={heroPrompts[0].title}
          title={heroPrompts[0].title}
          tag={heroPrompts[0].tag}
          image={heroPrompts[0].image}
        />
        <PromptCard
          key={heroPrompts[1].title}
          title={heroPrompts[1].title}
          tag={heroPrompts[1].tag}
          image={heroPrompts[1].image}
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="py-10 gradient-text">Expert prompts marketplace</h2>
        <div className="flex flex-col bg-white rounded-lg px-3 py-4 max-w-[270px] h-fit justify-center items-center mt-4">
          <Image src="/hero/hero5.png" width="220" height="215" alt="freePrompt" />
          <p className="text-black text-2xl font-bold text-center pt-4">Kaleidoscope Artistic Tiles</p>
          <h2 className="text-black font-bold my-4">$2.99</h2>
          <button
            className="bg-[#F3848A] my-6 py-3 px-12 rouned-full text-black
            font-semibold border-2 border-black hover:bg-slate-700 transition duration-200 ease-in-out"
          >
            Buy Now
          </button>
          <div className="flex flex-row pt-4 gap-4">
            <div className="border-[1px] text-black border-gray-400 w-fit h-fit rounded-lg flex flex-col px-4 py-2 justify-center items-center">
              <h3 className="">22</h3>
              <p className=" text-sm">Hours</p>
            </div>
            <div className="border-[1px] text-black border-gray-400 w-fit h-fit rounded-lg flex flex-col px-4 py-2 justify-center items-center">
              <h3 className="">58</h3>
              <p className=" text-sm">Min</p>
            </div>
            <div className="border-[1px] text-black border-gray-400 w-fit h-fit rounded-lg flex flex-col px-4 py-2 justify-center items-center">
              <h3 className="">16</h3>
              <p className=" text-sm">Sec</p>
            </div>
          </div>
        </div>
        <h2 className="text-center pt-10">
          <span className="gradient-text">Professionally hand-picked prompts for</span> ChatGPT, Midjourney, Dall-e,
          Stable diffusion
        </h2>
      </div>
      <div className="flex flex-col gap-y-32">
        <PromptCard
          key={heroPrompts[2].title}
          title={heroPrompts[2].title}
          tag={heroPrompts[2].tag}
          image={heroPrompts[2].image}
        />
        <div className="ml-10">
          <PromptCard
            key={heroPrompts[3].title}
            title={heroPrompts[3].title}
            tag={heroPrompts[3].tag}
            image={heroPrompts[3].image}
          />
        </div>
      </div>
    </div>
  );
}
