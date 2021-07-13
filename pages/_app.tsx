import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import type { AppProps } from 'next/app'
import { extendTheme, ChakraProvider  } from '@chakra-ui/react';

import { theme } from 'config';
import { persistor, store } from 'store';
import { Box } from '@chakra-ui/react';

import { Footer, Header } from 'components/core';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ChakraProvider theme={extendTheme(theme)}>
        <Header />
        <Box pb='55px' minH='100vh'>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ChakraProvider>
    </PersistGate>
  </Provider>

);

export default MyApp
