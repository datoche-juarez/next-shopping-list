// import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import { newTheme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
   <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
