"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { getProduct } from '@/lib/products'

export function Footer() {
  const pathname = usePathname()
  const isProductPage = pathname.startsWith('/product/')
  const productSlug = isProductPage ? pathname.split('/').pop() : null
  const product = productSlug ? getProduct(productSlug) : null
  const footerColor = product ? product.colorScheme : 'white'
  const logoSrc = product && product.logo ? product.logo : '/logo.svg'
  const linkColor = product ? product.linkColorScheme : '#00ab67'

  return (
    <footer className="w-full py-8 px-4 md:px-6" style={{ backgroundColor: footerColor }}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center mb-4">
          <Image src={logoSrc} alt="Tea Troops Logo" width={64} height={64} className="w-auto h-20 sm:h-16" />
            {/*<span className="ml-2 text-lg font-bold text-[#00ab67]">Tea Troops</span>*/}
          </Link>
          <p className="text-sm text-gray-600">Premium organic herbal teas for your daily ritual.</p>
        </div>
        <div>
          {/* <h3 className="font-semibold mb-4">Quick Links</h3> */}
          <nav className="grid grid-cols-2 gap-2 sm:grid-cols-2">
            <Link className="text-sm hover:underline" href="/" aria-label="Home" style={{ color: linkColor }}>Home</Link>
            <Link className="text-sm hover:underline" href="/privacy" aria-label="Privacy Policy" style={{ color: linkColor }}>Privacy Policy</Link>
            <Link className="text-sm hover:underline" href="#" aria-label="Shop" style={{ color: linkColor }}>Shop</Link>
            <Link className="text-sm hover:underline" href="/shipping" aria-label="Shipping Policy" style={{ color: linkColor }}>Shipping Policy</Link>
            <Link className="text-sm hover:underline" href="/about" aria-label="About" style={{ color: linkColor }}>About</Link>
            <Link className="text-sm hover:underline" href="/terms" aria-label="Terms and Conditions" style={{ color: linkColor }}>T&C</Link>
            <Link className="text-sm hover:underline" href="/contact" aria-label="Contact" style={{ color: linkColor }}>Contact</Link>
            <Link className="text-sm hover:underline" href="/refund" aria-label="Cancellation and Refund Policy" style={{ color: linkColor }}>Cancellation & Refund Policy</Link>
        </nav>
        </div>
        <div className='flex-grow'>
          <h3 className="font-bold mb-4" style={{ color: linkColor }}>Connect With Us</h3>
          <div className="flex gap-3 mb-3">
            <Link className="text-gray-600" href="#">
              <Instagram className="h-8 w-8" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link className="text-gray-600" href="#">
              <Facebook className="h-8 w-8" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="text-gray-600" href="#">
              <Twitter className="h-8 w-8" />
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
  )
}