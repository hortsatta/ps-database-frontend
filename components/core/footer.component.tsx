import { FC } from 'react';
import Link from 'next/link';
import { Box, Image as CImage, Link as CLink, Text } from '@chakra-ui/react';

import { Layout } from 'components/core';

export const Footer: FC = () => (
  <Box
    pos='absolute'
    bottom='0'
    w='full'
    h='55px'
    d='flex'
    justifyContent='center'
    alignItems='center'
    bgColor='#0a0a0a'
    bgImg='url(/assets/svgs/header-bg.svg)'
    bgRepeat='repeat-x'
  >
    <Box pos='absolute' w='full' h='full' top={0} left={0} bgColor='rgba(0,0,0,0.4)' />
    <Layout pos='relative' zIndex={1}>
      <Box d='flex' justifyContent='center'>
        <Box
          mt='1px'
          maxW='1200px'
          w='full'
          bgColor='#151515'
          borderX='8px solid #151515'
        >
          <Box
            d='flex'
            justifyContent='space-between'
            alignItems='center'
            px='32px'
            py='8px'
            bgColor='#060606'
            border='1px solid #292929'
            borderRadius='4px'
          >
            <Box d='flex' alignItems='center'>
              <Text
                as='span'
                mr='21px'
                color='rgba(255,255,255,0.7)'
                fontFamily='Clonoid'
                fontSize='10px'
                textTransform='uppercase'
                lineHeight={1}
              >
                By Erwin Errol Calanuga 
              </Text>
              <Link href='https://github.com/hortsatta/ps-database-frontend' passHref>
                <CLink
                  as='span'
                  d='flex'
                  alignItems='center'
                  padding='3px 14px'
                  bgColor='#151515'
                  color='brand.200'
                  fontFamily='Clonoid'
                  fontSize='9px'
                  textTransform='uppercase'
                  lineHeight={1}
                  border='1px solid #c98b0e'
                  borderRadius='999px'
                  opacity={0.9}
                >
                  <CImage
                    src='/assets/svgs/github.svg'
                    alt='github'
                    mr='6px'
                    w='11px'
                    h='11px'
                  />
                  Github
                </CLink>
              </Link>
            </Box>
            <Text
              as='span'
              color='rgba(255,255,255,0.7)'
              fontFamily='Clonoid'
              fontSize='10px'
              textTransform='uppercase'
              lineHeight={1}
            >
              Copyright © 2021. All Rights Reserved.
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  </Box>
);
