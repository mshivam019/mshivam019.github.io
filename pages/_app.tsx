/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';

import { ThemeProvider } from 'next-themes';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import PageWithTransition from '@/components/PageWithTransition';

import { AppProps } from 'next/app';

export default function App(props: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main>
        <PageWithTransition {...props} />
        <SpeedInsights />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}
