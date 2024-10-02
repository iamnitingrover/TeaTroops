import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Leaf, Instagram, Facebook, Twitter, Heart } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bloom & Brew',
  description: 'Organic herbal flower teas',
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
          <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center justify-between bg-transparent">
            <Link className="flex items-center justify-center" href="/">
              <Leaf className="h-6 w-6 text-[#00ab67]" />
              <span className="ml-2 text-lg font-bold text-[#00ab67]">Bloom & Brew</span>
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
          <main className="flex-grow pt-14">
            {children}
          </main>
          <footer className="w-full py-6 px-4 md:px-6 border-t bg-white">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
              <p className="text-xs text-gray-500">© 2024 Bloom & Brew. All rights reserved.</p>
              <div className="flex items-center gap-1 text-xs">
                Made with <Heart className="h-4 w-4 text-red-500" /> by{' '}
                <Link href="https://nitingrover.in" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                  Nitin Grover
                </Link>
              </div>
              <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                  Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                  Privacy
                </Link>
              </nav>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}