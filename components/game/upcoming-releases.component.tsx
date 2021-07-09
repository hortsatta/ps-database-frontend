import { FC } from 'react';
import Image from 'next/image';
import { Box, Heading, Text } from '@chakra-ui/react';

import { Layout } from 'components/core';

export const UpcomingReleases:FC = () => (
  <Box
    pos='relative'
    bgColor='#1048a0'
    bgImg='url(/assets/svgs/pattern-buttons.svg)'
    bgRepeat='repeat-x'
  >
    <Box pos='absolute' top={0} bgColor='#006fe8' h='2px' w='full' />
    <Layout zIndex={1}>
      <Box
        px='100px'
        d='flex'
        alignItems='center'
        justifyContent='space-between'
        w='full'
        h='155px'
      >
        <Box d='flex' h='full'>
          <Box pos='relative' bottom='72px' w='479px'>
            <Image
              src='/assets/pngs/trio-characters.png'
              alt='trio-characters'
              width='479'
              height='292'
            />
          </Box>
          <Heading
            as='h4'
            d='flex'
            flexDir='column'
            justify-content='center'
            marginTop='18px'
            marginLeft='32px'
            textTransform='uppercase'
            fontSize='24px'
            line-height={1}
          >
            <Text as='span' fontSize='14px' fontWeight={400} lineHeight='1'>Upcoming</Text>
            Releases
          </Heading>
        </Box>
        <Box w='110px' h='110px' bgColor='gray' />
      </Box>
    </Layout>
    <Box pos='absolute' bottom={0} bgColor='#006fe8' h='2px' w='full' />
  </Box>
)