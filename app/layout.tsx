import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { VercelAnalytics } from './analytics'
import Script from 'next/script'
import localFont from 'next/font/local'

const nohemi = localFont({
  src: [
    {
      path: './fonts/Nohemi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Nohemi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-nehomi',
})

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
    <html lang="en" className={nohemi.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`font-nehomi ${nohemi.className}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <VercelAnalytics />
      </body>
    </html>
  )
}