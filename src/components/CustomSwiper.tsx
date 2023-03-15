import { Swiper, SwiperSlide } from 'swiper/react';
import { IPromptEngineer, Prompt } from '@/helpers/interface';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';
import PromptCard from './PromptCard';
import PromptEngineer from './PromptEngineer';

interface CustomSwiperProps {
  title: string;
  type?: 'prompt' | 'engineer';
  data: IPromptEngineer[] | Prompt[];
}

export default function CustomSwiper({ title, type = 'prompt', data }: CustomSwiperProps) {
  return (
    <Swiper className="relative py-20 w-full" slidesPerView={4} spaceBetween={24} loop={true}>
      <div className="prompts-swiper-action">
        <div>
          <h3>{title}</h3>
          <div>
            <SlidePrevButton />
            <SlideNextButton />
          </div>
        </div>
      </div>

      {type === 'prompt' &&
        (data as Prompt[]).map(({ title, price, tag, image, rating }, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <PromptCard title={title} price={price} tag={tag} image={image} rating={rating} />
          </SwiperSlide>
        ))}

      {type === 'engineer' &&
        (data as IPromptEngineer[]).map(({ engineerId, avatar, tag, image, viewer }) => (
          <SwiperSlide key={engineerId}>
            <PromptEngineer engineerId={engineerId} avatar={avatar} tag={tag} image={image} viewer={viewer} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
