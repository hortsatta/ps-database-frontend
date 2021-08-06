import { Provider } from 'react-redux';
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react';
import { extendTheme, Box, ChakraProvider  } from '@chakra-ui/react';

import { theme } from 'config';
import { persistor, store } from 'store';
import { Footer, Header, NotificationToast } from 'components/core';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'styles/globals.scss'

const App = ({ Component, pageProps }: AppProps & any) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ChakraProvider theme={extendTheme(theme)}>
        <Header />
        <Box pb='55px' minH='100vh'>
          <Component {...pageProps} />
        </Box>
        <Footer />
        <NotificationToast />
      </ChakraProvider>
    </PersistGate>
  </Provider>
);

export default App;
