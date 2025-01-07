// Code for the layout component that wraps all pages in the app. This component includes the Header and Footer components, and the Vercel Analytics component. The layout component also includes the global CSS file and the Google Analytics script.

import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { VercelAnalytics } from './analytics'
import Script from 'next/script'
import React from "react";

export const metadata: Metadata = {
  title: {
    default: 'Tea Troops | Premium Organic Herbal Teas',
    template: '%s | Tea Troops'
  },
  description: 'Discover our premium selection of organic herbal teas, crafted for your daily ritual and well-being.',
  keywords: ['organic tea', 'herbal tea', 'premium tea', 'Tea Troops'],
  authors: [{ name: 'Tea Troops' }],
  creator: 'Tea Troops',
  publisher: 'Tea Troops',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
          defer
        />
        <Script id="google-analytics" strategy="afterInteractive" defer>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        <div className="font-sans flex flex-col min-h-screen ">
          <Header />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
        <VercelAnalytics />
      </body>
    </html>
  )
}