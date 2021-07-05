import type { AppProps } from 'next/app'
import { extendTheme, ChakraProvider  } from '@chakra-ui/react';

import { theme } from 'config';

import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={extendTheme(theme)}>
    <Component {...pageProps} />
  </ChakraProvider>

);

export default MyApp
