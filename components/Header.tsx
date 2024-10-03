'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { getProduct } from '@/lib/products'

export function Header() {
  const pathname = usePathname()
  const isProductPage = pathname.startsWith('/product/')
  const productSlug = isProductPage ? pathname.split('/').pop() : null
  const product = productSlug ? getProduct(productSlug) : null
  const headerColor = product ? product.colorScheme : 'white'
  const logoSrc = product && product.logo ? product.logo : '/logo.svg'
  const linkColor = product ? product.linkColorScheme : '#00ab67'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between" style={{ backgroundColor: headerColor }}>
      <Link className="flex items-center justify-center" href="/">
        <Image src={logoSrc} alt="Tea Troops Logo" width={40} height={40} className="w-auto h-8 sm:h-10" />
      </Link>
      <nav className="flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" style={{ color: linkColor }} href="/">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" style={{ color: linkColor }} href="/shop">
          Shop
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" style={{ color: linkColor }} href="/about">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" style={{ color: linkColor }} href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}

//        <span className="ml-2 text-lg font-bold" style={{ color: linkColor }}>Tea Troops</span>