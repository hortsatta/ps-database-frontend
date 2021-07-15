import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Box } from '@chakra-ui/react';
import TweenOne from 'rc-tween-one';

import { selectIsUserLoggedIn } from 'store/auth';
import { Layout } from 'components/core';
import { Login, Register } from 'components/auth';

const LoginPage: FC = () => {
  const router = useRouter();
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const [play, setPlay] = useState(false);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    isUserLoggedIn && router.push('/');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn]);

  const animation1 = [
    { scale: 0.85, duration: 200 },
    { left: '100%', duration: 800 }
  ];

  const animation2 = [
    { right: '0%', duration: 800 },
    { scale: 1, duration: 200 }
  ];

  return (
    <Layout first>
      <Box pos='relative' minH='540px' overflowX='hidden'>
        <TweenOne
          className='auth-form login-form-2'
          animation={animation1}
          paused={!play}
          reverse={reverse}
        >
          <Login
            onToggle={() => {
              setPlay(true);
              setReverse(false);
            }}
          />
        </TweenOne>
        <TweenOne
          className='auth-form register-form-2'
          animation={animation2}
          paused={!play}
          reverse={reverse}
        >
          <Register onToggle={() => setReverse(true)} />
        </TweenOne>
      </Box>
    </Layout>
  );
};

export default LoginPage;
