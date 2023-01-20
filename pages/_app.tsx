/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';

import { Analytics } from '@vercel/analytics/react';



export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <ThemeProvider attribute="class">
      <main>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}
