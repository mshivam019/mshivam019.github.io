import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
        <SpeedInsights />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}
