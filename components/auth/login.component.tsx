import { FC } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image as CImage,
} from '@chakra-ui/react';
import { LoginForm } from './login-form.component';

type FormProps = {
  onToggle: () => void;
}

export const Login: FC<FormProps> = ({ onToggle }) => (
  <Flex w='full' flexDir='column' justifyContent='center' alignItems='center'>
    <Box
      pos='relative'
      w='100%'
      maxW='600px'
      borderTop='2px solid'
      borderLeft='2px solid'
      borderColor='brand.150'
    >
      <CImage
        src='/assets/pngs/login.png'
        alt='register'
        pos='absolute'
        bottom={0}
        right='-274px'
        w='315px'
        h='488px'
      />
      <Heading
        as='h2'
        pt='24px'
        px='32px'
        bgColor='brand.100'
        fontSize='18px'
        fontWeight={400}
        textTransform='uppercase'
        textAlign='center'
      >
        Sign In
      </Heading>
      <LoginForm />
    </Box>
    <Button
      variant='link'
      mt='22px'
      fontSize='11px'
      onClick={onToggle}
    >
      I don&apos;t have an account, sign me up.
    </Button>
  </Flex>
);
