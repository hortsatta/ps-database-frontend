import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Heading, Link as CLink, Text } from '@chakra-ui/react';

import { Layout, Newsletter } from 'components/core';
import { UpcomingReleases } from 'components/game';
import { LatestRumors, NewsCarousel } from 'components/news';
import { ReviewsCarousel } from 'components/review';

const OurStore: FC = () => (
  <Link href='/' passHref>
    <CLink
      _hover={{ textDecor: 'none' }}
      _focus={{ outline: 0 }}
      textAlign='center'
    >
      <Image src='/assets/pngs/store.png' alt='store' width='341' height='325' />
      <Heading
        as='h4'
        mt='-10px'
        d='flex'
        justifyContent='flex-end'
        alignItems='flex-end'
        fontSize='24px'
        textTransform='uppercase'
      >
        <Text as='span' mb='3px' mr='10px' fontSize='14px' fontWeight={400}>
          Our
        </Text>
        Store
      </Heading>
    </CLink>
  </Link>
);

const HomePage: FC = () => (
  <>
    <Layout first pb='125px'>
      <Box w='full'>
        <Box d='inline-block' w='825px' h='467px'>
          <NewsCarousel />
        </Box>
        <Box d='inline-block' w='825px' h='467px'>
          <ReviewsCarousel />
        </Box>
      </Box>
    </Layout>
    <UpcomingReleases />
    <Box pos='relative'>
      <Box bgColor='brand.100' h='420px'>
        <Layout pb='40px' pt='40px' h='full'>
          <Box maxW='1212px'>
            <LatestRumors />
          </Box>
          <Box pos='absolute' bottom={0} w='full'>
            <Box
              pos='relative'
              pr='16px'
              py='36px'
              maxW='1100px'
              w='full'
              bgColor='#d39025'
              boxSizing='content-box'
            >
              <Box
                pos='absolute'
                top={0}
                right='100%'
                w='full'
                h='full'
                bgColor='#d39025'
              />
              <Newsletter />
              <Box pos='absolute' top={0} left='100%'>
                <svg xmlns='http://www.w3.org/2000/svg' width='111.5' height='111.5' viewBox='0 0 111.5 111.5'>
                  <g><polygon fill='#d39025' points='0 0 0 111.5 111.5 111.5 0 0'/></g>
                </svg>
              </Box>
            </Box>
          </Box>
          <Box pos='absolute' top='40px' right={0}>
            <OurStore />
          </Box>
        </Layout>
      </Box>
    </Box>
  </>
);

export default HomePage;
