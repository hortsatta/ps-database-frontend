import { FC, useState } from 'react';
import Link from 'next/link';
import { Box, Heading, Image, Link as CLink, Text, useTheme } from '@chakra-ui/react';
import { SwiperSlide } from 'swiper/react';

import { Review } from 'models';
import { Carousel } from 'components/core';

// Temporary
const reviews: Review[] = [
  {
    id: 1,
    title: 'Game One Review',
    coverImage: 'https://i.pinimg.com/originals/c4/7c/fd/c47cfd9d51450ac432e08270a475b2d3.jpg',
    excerpt: 'This is truly an achievement',
    totalScore: 9.2
  }, {
    id: 2,
    title: 'Game Two Review',
    coverImage: 'https://wallpaperstock.net/wallpapers/thumbs1/18508.jpg',
    excerpt: 'An adrenaline rush in a box',
    totalScore: 7
  }, {
    id: 3,
    title: 'Game Three Review',
    coverImage: 'https://images.pushsquare.com/5c2c6fbacfb4c/forbidden-siren-game-hd-wallpaper-1920x1080-13823.original.jpg',
    excerpt: 'Fans have waited for this one for a long time, and they won\'t be disappointed',
    totalScore: 8.6
  }
];

type ReviewSlideProps = {
  item: Review;
}

const ReviewSlide: FC<ReviewSlideProps> = ({ item }) => {
  const { title, excerpt, coverImage, totalScore } = item;

  return (
    <Box pos='relative' w='full' h='full'>
      <Image
        pos='absolute'
        top={0}
        left={0}
        w='full'
        h='full'
        src={coverImage}
        alt={title}
      />
      <Box
        pos='relative'
        w='full'
        h='full'
        d='flex'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
      >
        <Text
          as='span'
          pb='100px'
          fontFamily='Gotham'
          fontSize='130px'
          background='-webkit-linear-gradient(#ffb816, #ffa500, #ea4100)'
          css={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1px #bd1200'
          }}
        >
          {totalScore}
        </Text>
        {excerpt && (
          <Text
            pos='absolute'
            top='60%'
            px='150px'
            w='full'
            fontFamily='Clonoid'
            fontSize='16px'
            textTransform='uppercase'
            textAlign='center'
            textShadow='0 1px 3px black'
            lineHeight='1.8'
            _before={{
              content: '"“"',
              fonstStyle: 'normal',
              fontSize: '34px',
              fontFamily: 'Gotham',
              marginLeft: '-26px',
              position: 'absolute',
              top: '-18px',
            }}
            _after={{
              content: '"”"',
              fonstStyle: 'normal',
              fontSize: '34px',
              fontFamily: 'Gotham',
              marginLeft: '12px',
              position: 'absolute',
              bottom: '-15px',
            }}
          >
            {excerpt}
          </Text>
        )}
      </Box>
    </Box>
  );
};

const SlideTitle: FC = ({ children }) => {
  const { colors } = useTheme();
  
  return (
    <Box
      pos='absolute'
      right={0}
      bottom='-14px'
      d='flex' 
      alignItems='center'
      h='28px'
      zIndex='1'
    >
      <Box mr='-30px' d='flex' alignItems='center' h='full'>
        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='28' viewBox='0 0 14 28'>
          <g><polygon fill='#0c0c0c' points='14 28 0 14 14 0 14 28'/></g>
        </svg>
        <Heading
          as='h4'
          d='flex'
          alignItems='center'
          justifyContent='center'
          pr='30px'
          w='138px'
          h='full'
          bgColor='#0c0c0c'
          fontSize='14px'
          fontWeight={400}
          textTransform='uppercase'
          line-height={1}
        >
          Reviews
        </Heading>
      </Box>
      <Box
        d='flex'
        alignItems='center'
        h='full'
      >
        <Box position='relative' mr='-1px' zIndex='1'>
          <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'>
            <g>
              <polygon fill={colors.brand[400]} points='0 0 28 0 28 28 0 0'/>
              <path fill='#0c0c0c' d='M28,26.6,2.4,1H28V0H0L28,28Z'/>
            </g>
          </svg>
        </Box>
        <Heading
          as='h4'
          d='flex'
          justifyContent='flex-end'
          alignItems='center'
          pr='10px'
          w='535px'
          h='full'
          bgColor='brand.400'
          fontSize='14px'
          fontWeight={400}
          textTransform='uppercase'
          line-height={1}
          border='1px solid #0c0c0c'
        >
          <Link href='/' passHref>
            <CLink textAlign='right'>{children}</CLink>
          </Link>
        </Heading>
      </Box>
    </Box>
  );
};

export const ReviewsCarousel: FC = () => {
  const [slideTitle, setSlideTitle] = useState('');

  const handleSlideChange = (swiper: any) => {
    const { title } = reviews[swiper.realIndex];
    setSlideTitle(title);
  };

  return (
    <Box pos='relative' w='full' h='full'>
      <Carousel onSlideChange={handleSlideChange}>
        {reviews.map(review => (
          <SwiperSlide key={review.id}>
            <ReviewSlide item={review} />
          </SwiperSlide>
        ))}
      </Carousel>
      <Box pos='absolute' right={0} top={0} w='56.6px' h='56.6px' zIndex='2'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.6 56.6'>
          <g><polygon points='0 0 56.6 0 56.6 56.6 0 0'/></g>
        </svg>
      </Box>
      <SlideTitle>
        {slideTitle}
      </SlideTitle>
    </Box>
  );
};
