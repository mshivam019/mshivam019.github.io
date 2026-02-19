import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import { ViewTransition } from "react";
import Navigation from "@/components/navigation";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mshivam019.github.io"),
  title: {
    default: "Shivam Mishra | Senior Developer - AI Products",
    template: "%s | Shivam Mishra",
  },
  description: "Senior Developer specializing in AI products. Building intelligent systems and sharing knowledge through technical writing on frontend, backend, and cloud architecture.",
  keywords: ["developer", "AI", "software engineer", "full stack", "React", "Next.js", "machine learning"],
  authors: [{ name: "Shivam Mishra" }],
  creator: "Shivam Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mshivam019.github.io",
    siteName: "Shivam Mishra",
    title: "Shivam Mishra | Senior Developer - AI Products",
    description: "Senior Developer specializing in AI products. Building intelligent systems and sharing knowledge through technical writing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shivam Mishra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Mishra | Senior Developer - AI Products",
    description: "Senior Developer specializing in AI products.",
    creator: "@mshivam019",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.variable} ${geistMono.variable} antialiased min-h-screen transition-colors duration-300`}
      >
        <div className="page-shell max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
          <div className="site-grid">
            <aside className="site-nav-column">
              <Navigation />
            </aside>
            <ViewTransition default="page-transition">
              <main className="editorial-main">{children}</main>
            </ViewTransition>
          </div>
        </div>
      </body>
    </html>
  );
}
