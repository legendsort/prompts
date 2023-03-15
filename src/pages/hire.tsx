import type { NextPage } from 'next';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick';
import clsx from 'classnames';
import PromptEngineer from '@/components/PromptEngineer';
import Icon from '@/components/Icon';
import {
  midjourneyPromptsEngineers,
  gpt3PromptsEngineers,
  dallePromptsEngineers,
  diffusionPromptsEngineers,
} from '@/helpers/mock';
import React, { useState, useRef, useEffect, RefObject } from 'react';
import CustomSwiper from '@/components/CustomSwiper';

const Hire: NextPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideAfterIndex, setSlideAfterIndex] = useState(0);
  const sliderRef: RefObject<Slider> = useRef(null);

  return (
    <div className="px-10">
      <div className="flex flex-row justify-center py-20">
        <div className="flex flex-col w-1/2 pt-20 px-24 gap-y-4">
          <h2>
            <span className="gradient-text">Hire An Expert</span> For Your Next Project{' '}
          </h2>
          <p className="leading-8 text-xl text-gray-400">
            Commision custom prompts from top prompt engineers, save on time & API costs, become a prompt engineer.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <button className="rounded-full w-fit px-4 py-2 bg-yellow border-2 text-black">Hire an expert</button>
            <button className="rounded-full w-fit px-4 py-2 border-2 text-gray-400">Become an expert</button>
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2 px-32">
          <Image src="/hire/hire2.png" alt="hire" width="289" height="215" className="mr-auto z-12" />
          <Image src="/hire/hire1.png" alt="hire" width="289" height="245" className="-mt-8 ml-auto z-11 mr-48" />
        </div>
      </div>
      <div className="container flex flex-col items-center mx-auto mb-36">
        <CustomSwiper title="Top DALL E Prompts Engineers" type="engineer" data={dallePromptsEngineers} />

        <CustomSwiper title="Top Midjourney Prompt Engineers" type="engineer" data={midjourneyPromptsEngineers} />

        <CustomSwiper title="Top Stable Diffusion Prompt Engineers" type="engineer" data={diffusionPromptsEngineers} />

        <CustomSwiper title="TopGPT-3 Prompt Engineers" type="engineer" data={gpt3PromptsEngineers} />
      </div>
    </div>
  );
};

export default Hire;
