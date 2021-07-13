import { FC } from 'react';
import Link from 'next/link';
import { Box, Grid, Heading, Link as CLink, Text, useTheme } from '@chakra-ui/react';

import { News } from 'models';

// Temporary
const rumorList: News[] = [
  {
    id: 1,
    slug: 'sample-1',
    title: 'Sample 1',
  }, {
    id: 2,
    slug: 'sample-2',
    title: 'Sample 2',
  }, {
    id: 3,
    slug: 'sample-3',
    title: 'Sample 3',
  }
];

export const LatestRumors:FC = () => {
  const { colors } = useTheme();

  return (
    <Box>
      <Heading
        as='h4'
        d='flex'
        flexDir='column'
        justifyContent='center'
        pb='22px'
        textTransform='uppercase'
        fontSize='24px'
      >
        <Text as='span' fontSize='14px' fontWeight={400}>Spicy</Text>
        Rumors
      </Heading>
      <Grid templateColumns='repeat(2, 1fr)'>
        {rumorList.map((rumor: News, i: number) => (
          <Box
            key={rumor.slug}
            d='flex'
            alignItems='center'
            my='11px'
            h='28px'
          >
            {(i % 2 !== 0) && (
              <Box pos='relative'>
                <svg xmlns='http://www.w3.org/2000/svg' width='14' height='28' viewBox='0 0 14 28'>
                  <g>
                    <polygon fill={colors.brand[500]} points='14 0 14 28 0 14 14 0'/>
                    <path fill='#0c0c0c' d='M14,26.6,1.4,14,14,1.4V0L0,14,14,28Z'/>
                  </g>
                </svg>
              </Box>
            )}
            <Heading
              as='h6'
              {...(i % 2 === 0) ? { mr: '-1px' } : { ml: '-1px' }}
              pl='14px'
              d='flex'
              alignItems='center'
              w='full'
              h='full'
              bgColor='brand.500'
              fontSize='14px'
              fontWeight={400}
              textTransform='uppercase'
              line-height={1}
              border='1px solid #0c0c0c'
            >
              <Link href={`/${rumor.slug}`} passHref>
                <CLink>{rumor.title}</CLink>
              </Link>
            </Heading>
            {(i % 2 === 0) && (
              <svg xmlns='http://www.w3.org/2000/svg' width='14' height='28' viewBox='0 0 14 28'>
                <g>
                  <polygon fill={colors.brand[500]} points='0 0 0 28 14 14 0 0'/>
                  <path fill='#0c0c0c' d='M0,28,14,14,0,0V1.4L12.6,14,0,26.6Z'/>
                </g>
              </svg>
            )}
          </Box>
        ))}
      </Grid>
    </Box>
  );
};