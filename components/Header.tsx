// Note: Header component for the website. It includes a logo, navigation links, and a ticker displaying the latest offers. The component is responsive and uses Tailwind CSS for styling.

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Home, ShoppingCart } from 'lucide-react'
import { Ticker } from './Ticker'

export function Header() {
  const headerColor = 'white'
  const logoSrc = '/logo.svg'
  const linkColor = '#00AB6A'

  return (
    <div className="sticky top-0 left-0 right-0 z-40">
      <Ticker />
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between" style={{ backgroundColor: headerColor }}>
        <Link className="flex items-center justify-center" href="/">
          <Image src={logoSrc} alt="Tea Troops Logo" width={64} height={64} className="w-auto h-8 sm:h-10" />
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-lg font-medium hover:underline underline-offset-4" aria-label="Home" style={{ color: linkColor }} href="/">
            <span className="hidden sm:inline">Home</span>
            <Home className="sm:hidden" size={24} />
          </Link>
          <Link className="text-lg font-medium hover:underline underline-offset-4" aria-label="Shop" style={{ color: linkColor }} href="/shop">
            <span className="hidden sm:inline">Shop</span>
            <ShoppingCart className="sm:hidden" size={24} />
          </Link>
          <Link className="text-lg font-medium hover:underline underline-offset-4 hidden sm:inline-block" aria-label="About" style={{ color: linkColor }} href="/about">
            About
          </Link>
          <Link className="text-lg font-medium hover:underline underline-offset-4 hidden sm:inline-block" aria-label="Contact" style={{ color: linkColor }} href="/contact">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  )
}