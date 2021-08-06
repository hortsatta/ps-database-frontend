import { FC } from 'react';
import { Center, Text } from '@chakra-ui/react';
import { fonts } from 'config';

const Error404Page: FC = () => (
  <Center
    pb='100px'
    pos='absolute'
    top='50%'
    w='full'
    transform='translateY(-50%)'
  >
    <Text
      mt='60px'
      d='flex'
      flexDir='column'
      color='rgba(255,255,255,0.7)'
      fontFamily={fonts.heading}
      textAlign='center'
      textTransform='uppercase'
      lineHeight={1.2}
    >
      <Text as='span' fontSize='24px'>
        404
      </Text>
      <Text as='span' fontSize='28px' fontWeight={600}>
        Page Not Found
      </Text>
    </Text>
  </Center>
);

export default Error404Page;
