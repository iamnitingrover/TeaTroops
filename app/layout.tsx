import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Leaf } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bloom & Brew',
  description: 'Premium organic herbal flower teas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-white bg-opacity-90 shadow-sm">
            <div className="container mx-auto px-4 lg:px-6 h-14 flex items-center">
              <Link className="flex items-center justify-center" href="/">
                <Leaf className="h-6 w-6 text-[#00ab67]" />
                <span className="ml-2 text-lg font-bold text-[#00ab67]">Bloom & Brew</span>
              </Link>
              <nav className="ml-auto flex gap-4 sm:gap-6">
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
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-white border-t">
            <div className="container mx-auto px-4 py-6 md:px-6 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Bloom & Brew. All rights reserved.</p>
              <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                  Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                  Privacy
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}