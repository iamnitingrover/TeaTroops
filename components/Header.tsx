'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { getProduct } from '@/lib/products'
import { Ticker } from './Ticker'

export function Header() {
  const pathname = usePathname()
  const isProductPage = pathname.startsWith('/product/')
  const productSlug = isProductPage ? pathname.split('/').pop() : null
  const product = productSlug ? getProduct(productSlug) : null
  const headerColor = product ? product.colorScheme : 'white'
  const logoSrc = product && product.logo ? product.logo : '/logo.svg'
  const linkColor = product ? product.linkColorScheme : '#00ab67'

  return (
    <>
    <Ticker />
    <header className="sticky top-8 left-0 right-0 z-40 px-4 lg:px-6 h-16 flex items-center justify-between" style={{ backgroundColor: headerColor }}>
      <Link className="flex items-center justify-center" href="/">
        <Image src={logoSrc} alt="Tea Troops Logo" width={64} height={64} className="w-auto h-8 sm:h-10" />
        {/*<span className="ml-2 text-lg font-bold" style={{ color: linkColor }}>Tea Troops</span>*/}
      </Link>
      <nav className="flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" aria-label="Home" style={{ color: linkColor }} href="/">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" aria-label="Shop" style={{ color: linkColor }} href="/shop">
          Shop
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" aria-label="About" style={{ color: linkColor }} href="/about">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" aria-label="Contact" style={{ color: linkColor }} href="/contact">
          Contact
        </Link>
      </nav>
    </header>
    </>
  )
}