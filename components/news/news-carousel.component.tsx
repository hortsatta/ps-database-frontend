import { FC, useState } from 'react';
import Link from 'next/link';
import { Box, Heading, Image, Link as CLink, Text, useTheme } from '@chakra-ui/react';
import { SwiperSlide } from 'swiper/react';

import { News } from 'models';
import { Carousel } from 'components/core';

// Temporary
const newsList: News[] = [
  {
    id: 1,
    slug: 'sample-1',
    title: 'Sample 1',
    coverImage: 'https://miro.medium.com/max/14080/1*AWTM3f3eZYUFZ1mrZeEH7w.jpeg',
    excerpt: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
  }, {
    id: 2,
    slug: 'sample-2',
    title: 'Sample 2',
    coverImage: 'https://assets-prd.ignimgs.com/2020/03/02/reveal-canopy-valorant-1583129902400.jpg',
    excerpt: 'Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
  }, {
    id: 3,
    slug: 'sample-3',
    title: 'Sample 3',
    coverImage: 'https://images2.alphacoders.com/879/thumb-1920-879308.jpg',
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.'
  }
];

type NewsSlideProps = {
  item: News;
}

const NewsSlide: FC<NewsSlideProps> = ({ item }) => {
  const { slug, coverImage, excerpt } = item;

  return (
    <Box pos='relative' w='full' h='full'>
      <Image
        pos='absolute'
        top={0}
        left={0}
        w='full'
        h='full'
        src={coverImage}
        alt={slug}
      />
      {excerpt && (
        <Link href='/' passHref>
          <Text pos='absolute' bottom={0} w='full'>
            <CLink
              d='inline-block'
              w='full'
              px='24px'
              pt='32px'
              pb='26px'
              bgImg='linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0))'
              fontWeight={300}
            >
              {excerpt}
            </CLink>
          </Text>
        </Link>
      )}
    </Box>
  );
};

const SlideTitle: FC = ({ children }) => {
  const { colors } = useTheme();

  return (
    <Box
      pos='absolute'
      bottom='-14px'
      d='flex' 
      alignItems='center'
      h='28px'
      zIndex='1'
    >
      <Box
        pos='relative'
        d='flex'
        alignItems='center'
        h='full'
        zIndex={1}
      >
        <Heading
          as='h4'
          d='flex'
          alignItems='center'
          pl='10px'
          w='535px'
          h='full'
          bgColor='brand.300'
          fontSize='14px'
          fontWeight={400}
          textTransform='uppercase'
          line-height={1}
          border='1px solid #0c0c0c'
        >
          <Link href='/' passHref>
            <CLink>{children}</CLink>
          </Link>
        </Heading>
        <Box ml='-1px'>
          <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'>
            <g>
              <polygon fill={colors.brand[300]} points='28 0 0 0 0 28 28 0'/>
              <polygon fill='#0c0c0c' points='0 1 25.6 1 2.9 23.6 0 26.6 0 28 28 0 0 0 0 1'/>
            </g>
          </svg>
        </Box>
      </Box>
      <Box ml='-30px' d='flex' alignItems='center' h='full'>
        <Heading
          as='h4'
          d='flex'
          alignItems='center'
          justifyContent='center'
          pl='30px'
          w='138px'
          h='full'
          bgColor='#0c0c0c'
          fontSize='14px'
          fontWeight={400}
          textTransform='uppercase'
          line-height={1}
        >
          News
        </Heading>
        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='28' viewBox='0 0 14 28'>
          <g><polygon fill='#0c0c0c' points='0 28 14 14 0 0 0 28'/></g>
        </svg>
      </Box>
    </Box>
  );
};

export const NewsCarousel: FC = () => {
  const [slideTitle, setSlideTitle] = useState('');

  const handleSlideChange = (swiper: any) => {
    const { title } = newsList[swiper.realIndex];
    setSlideTitle(title);
  };

  return (
    <Box pos='relative' w='full' h='full'>
      <Box pos='absolute' left={0} top={0} w='56.6px' h='56.6px' zIndex='2'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.6 56.6'>
          <g><polygon points='56.6 0 0 0 0 56.6 56.6 0'/></g>
        </svg>
      </Box>
      <Carousel onSlideChange={handleSlideChange}>
        {newsList.map(news => (
          <SwiperSlide key={news.id}>
            <NewsSlide item={news} />
          </SwiperSlide>
        ))}
      </Carousel>
      <SlideTitle>
        {slideTitle}
      </SlideTitle>
    </Box>
  );
};
