import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme} from '@nextui-org/react';
import Script from 'next/script';
import { useEffect } from 'react';
import ReactGA from 'react-ga';



const darkTheme = createTheme({type: "dark"});

function MyApp({ Component, pageProps,  }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
    
  )
}

export default MyApp
