/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';

import { Analytics } from '@vercel/analytics/react';

import { AppProps } from 'next/app';

export default function App({ Component, pageProps: { ...pageProps } }:AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}