import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import type { AppProps } from 'next/app'
import { extendTheme, ChakraProvider  } from '@chakra-ui/react';

import { theme } from 'config';
import { persistor, store } from 'store';

import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ChakraProvider theme={extendTheme(theme)}>
        <Component {...pageProps} />
      </ChakraProvider>
    </PersistGate>
  </Provider>

);

export default MyApp
