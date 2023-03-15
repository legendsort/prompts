import { useSwiper } from 'swiper/react';
import Icon from '@/components/Icon';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <Icon>right</Icon>
    </button>
  );
}
