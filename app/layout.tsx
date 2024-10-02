import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tea Troops',
  description: 'Premium organic herbal teas',
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
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between bg-transparent">
            <Link className="flex items-center justify-center" href="/">
              <Image src="/logo.svg" alt="Tea Troops Logo" width={40} height={40} className="w-auto h-8 sm:h-10" />
              <span className="ml-2 text-lg font-bold text-[#00ab67]">Tea Troops</span>
            </Link>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#00ab67]" href="/">
                Home
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#00ab67]" href="/shop">
                Shop
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#00ab67]" href="/about">
                About
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#00ab67]" href="/contact">
                Contact
              </Link>
            </nav>
          </header>
          <main className="flex-grow pt-16">
            {children}
          </main>
          <footer className="w-full py-8 px-4 md:px-6 bg-[#f0f9f6]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Link href="/" className="flex items-center mb-4">
                  <Image src="/logo.svg" alt="Tea Troops Logo" width={40} height={40} className="w-auto h-8" />
                  <span className="ml-2 text-lg font-bold text-[#00ab67]">Tea Troops</span>
                </Link>
                <p className="text-sm text-gray-600">Premium organic herbal teas for your daily ritual.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <nav className="flex flex-col gap-2">
                  <Link className="text-sm hover:underline" href="/">Home</Link>
                  <Link className="text-sm hover:underline" href="/shop">Shop</Link>
                  <Link className="text-sm hover:underline" href="/about">About</Link>
                  <Link className="text-sm hover:underline" href="/contact">Contact</Link>
                </nav>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4 mb-4">
                  <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </div>
                <p className="text-sm text-gray-600">© 2024 Tea Troops. All rights reserved.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                Made with <Heart className="h-4 w-4 text-red-500" /> by{' '}
                <Link href="https://nitingrover.in" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                  Nitin Grover
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}