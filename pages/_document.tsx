import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import Script from "next/script";
 
class MyDocument extends Document {
  static async getInitialProps(ctx : DocumentContext) {
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DD3RM7V9YG" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
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