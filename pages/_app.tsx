import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme} from '@nextui-org/react';
import Script from 'next/script';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import CookieConsent, {getCookieConsentValue} from "react-cookie-consent";





const darkTheme = createTheme({type: "dark"});

function MyApp({ Component, pageProps,  }: AppProps) {
  return (
    
    <NextUIProvider theme={darkTheme}>
      <GoogleAnalytics measurementId='G-DD3RM7V9YG' />
      <Component {...pageProps} />
    </NextUIProvider>
    
  )
}

export default MyApp
