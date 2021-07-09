import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import { Layout } from 'components/core';
import { NewsCarousel } from 'components/news';
import { ReviewsCarousel } from 'components/review';
import { UpcomingReleases } from 'components/game';

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
  </>
);

export default HomePage;
