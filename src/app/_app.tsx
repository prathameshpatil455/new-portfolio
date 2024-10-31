import React from 'react';
import "./globals.css";
import { AppProps } from 'next/app';
import store from '../store/store';
import { Provider } from 'react-redux';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="icon" href="/MyIcon.svg" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
