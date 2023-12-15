import { Component } from "react"
import Head from "next/head";

const Header = () => {
    return (
      <>
        <Head>
            <meta charset="utf-8" />
            <meta name="description" content="Portfolio Website" />
            <meta name="keywords" content="resume, jobs, career" />
        </Head>
        <div>Page Content</div>
      </>
    );
  };
export default Header;