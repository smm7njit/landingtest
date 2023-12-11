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
      <Script
  strategy="lazyOnload"
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
/>

<Script id="ga-script" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
</Script>
      <Component {...pageProps} />
    </NextUIProvider>
    
  )
}

export default MyApp
