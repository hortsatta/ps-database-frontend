import { FC, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image as CImage,
} from '@chakra-ui/react';
import TweenOne from 'rc-tween-one';

import { Layout } from 'components/core';
import { LoginForm, RegisterForm } from 'components/auth';

type FormProps = {
  onToggle: (show: boolean) => void;
}

const Register: FC<FormProps> = ({ onToggle }) => (
  <Flex w='full' flexDir='column' justifyContent='center' alignItems='center'>
    <Box
      pos='relative'
      w='100%'
      maxW='600px'
      borderTop='2px solid'
      borderRight='2px solid'
      borderColor='brand.150'
    >
      <CImage
        src='/assets/pngs/register.png'
        alt='register'
        pos='absolute'
        bottom={0}
        left='-305px'
        w='305px'
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
        Registration
      </Heading>
      <RegisterForm />
    </Box>
    <Button
      variant='link'
      mt='22px'
      fontSize='11px'
      onClick={() => onToggle(false)}
    >
      I already have an account, sign me in.
    </Button>
  </Flex>
);

const Login: FC<FormProps> = ({ onToggle }) => (
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
      onClick={() => onToggle(true)}
    >
      I don&apos;t have an account, sign me up.
    </Button>
  </Flex>
);

const RegisterPage: FC = () => {
  const [play, setPlay] = useState(false);
  const [reverse, setReverse] = useState(false);

  const animation1 = [
    { scale: 0.85, duration: 200 },
    { right: '100%', duration: 800 }
  ];

  const animation2 = [
    { left: '0%', duration: 800 },
    { scale: 1, duration: 200 }
  ];

  return (
    <Layout first>
      <Box pos='relative' minH='540px' overflowX='hidden'>
        <TweenOne
          className='auth-form register-form'
          animation={animation1}
          paused={!play}
          reverse={reverse}
        >
          <Register
            onToggle={() => {
              setPlay(true);
              setReverse(false);
            }}
          />
        </TweenOne>
        <TweenOne
          className='auth-form login-form'
          animation={animation2}
          paused={!play}
          reverse={reverse}
        >
          <Login onToggle={setReverse} />
        </TweenOne>
      </Box>
    </Layout>
  );
};

export default RegisterPage;
