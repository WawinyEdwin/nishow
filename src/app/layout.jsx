"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import Header  from '../components/Header';
import Footer from '../components/Footer';
import "../styles/index.css";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop  from '../components/ScrollToTop';

export default function RootLayout({
  children,
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <GoogleAnalytics gaId="G-9PMXVY26RC" />
      <head />
      <Analytics />
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
