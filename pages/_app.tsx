import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme} from '@nextui-org/react';
import Script from 'next/script';
import { useEffect } from 'react';
import {initGA, logPageView } from '../components/ga';

const darkTheme = createTheme({type: "dark"});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DD3RM7V9YG" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DD3RM7V9YG');
        `}
      </Script>
      <Component {...pageProps} />
    </NextUIProvider>
    
  )
}

export default MyApp
