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
        <script async src="https://www.googletagmanager.com/gtag/js?id=${YOUR_TRACKING_ID}"></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', ${YOUR_TRACKING_ID});`
            }}
          />
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