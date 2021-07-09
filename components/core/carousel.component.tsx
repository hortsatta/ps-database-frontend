import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

export const Carousel: FC<Swiper> = ({
  autoplay,
  loop,
  navigation,
  children,
  onSlideChange
}) => (
  <Box w='100%' h='100%' bgColor='#333333' border='1px solid #0c0c0c'>
    <Swiper
      className='swiper'
      pagination={{ type: 'progressbar' }}
      navigation={navigation}
      autoplay={autoplay}
      fadeEffect={{ crossFade: true }}
      effect='fade'
      loop={loop}
      slidesPerView={1}
      speed={1000}
      onInit={onSlideChange}
      onSlideChange={onSlideChange}
    >
      {children}
    </Swiper>
  </Box>
);

Carousel.defaultProps = {
  autoplay: {
    delay: 6000
  },
  loop: true,
  navigation: false,
  onSlideChange: () => {}
};
