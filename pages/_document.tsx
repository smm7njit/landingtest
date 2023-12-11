import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import Script from "next/script"

declare global {
  interface Window {
    dataLayer: any[];
  }
}



const GA_TRACKING_ID = process.env.GTAG;
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}


          <Script id="gtag-script" async src="https://www.googletagmanager.com/gtag/js?id=G-DD3RM7V9YG"></Script>
          <Script id="gtag-inline-script" strategy="lazy-onload">
            {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DD3RM7V9YG');
  `}
          </Script>


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;