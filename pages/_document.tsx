import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import Script from "next/script";
 
const GA_TRACKING_ID = process.env.GTAG;
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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            });
          `,
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