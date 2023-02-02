// import '../styles/globals.css'
import Layout from "../components/Layout.js";
import { ChakraProvider } from "@chakra-ui/react";
import { newTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider restCSS theme={newTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
