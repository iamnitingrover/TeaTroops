'use client'

import { useEffect, useRef, useState } from 'react'
import { getProduct } from '@/lib/products'
import { usePathname } from 'next/navigation'

const messages = [
  "🎉 Enjoy 10% off your Monthly Subscription!  ",
  "Share your experience with us via a reel and receive a free product worth ₹185!  ",
  "Subscribe for 10% off your first order!  ",
]

export function Ticker() {
    const pathname = usePathname()
    const isProductPage = pathname.startsWith('/product/')
    const productSlug = isProductPage ? pathname.split('/').pop() : null
    const product = productSlug ? getProduct(productSlug) : null
    //const headerColor = product ? product.colorScheme : 'black'
    const headerColor = 'black'
    const linkColor = product ? product.linkColorScheme : '#ffffff'
    const tickerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const ticker = tickerRef.current
        if (ticker) {
            const totalWidth = ticker.scrollWidth
            let position = ticker.clientWidth
            let animationId: number

            const moveLeft = () => {
                if (!isHovered) {
                position--
                if (position < -totalWidth / 2) {
                    position = ticker.clientWidth
                }
                ticker.style.transform = `translateX(${position}px)`
                }
                animationId =requestAnimationFrame(moveLeft)
            }
            animationId = requestAnimationFrame(moveLeft)
            return () => cancelAnimationFrame(animationId)
        }
    }, [isHovered])

    return (
        <div 
            className="overflow-hidden py-2 sticky top-0 z-50" 
            style={{ backgroundColor: headerColor }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div 
                ref={tickerRef}
                className="whitespace-nowrap"
                style={{ color: linkColor }}
            >
                {messages.map((message, index) => (
                    <span key={index} className="inline-block px-4">{message} | </span>
                ))}
                {messages.map((message, index) => (
                    <span key={`repeat-${index}`} className="inline-block px-4">{message} | </span>
                ))}
            </div>
        </div>
    )
}