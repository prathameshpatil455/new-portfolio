import React from 'react';
import "./globals.css";
import { AppProps } from 'next/app';
import store from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
