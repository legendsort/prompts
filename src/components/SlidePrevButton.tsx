import { useSwiper } from 'swiper/react';
import Icon from '@/components/Icon';

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <Icon>left</Icon>
    </button>
  );
}
