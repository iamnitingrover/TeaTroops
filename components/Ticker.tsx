'use client'

import { useEffect, useRef, useState } from 'react'
// import { getProduct } from '@/lib/products'
// import { usePathname } from 'next/navigation'

const messages = [
  "🎉 Enjoy 10% off your Monthly Subscription!",
  "Share your experience with us via a reel and receive a free product worth ₹185!",
  "Subscribe for 10% off your first order!",
]

export function Ticker() {
    // const pathname = usePathname()
    // const isProductPage = pathname.startsWith('/product/')
    // const productSlug = isProductPage ? pathname.split('/').pop() : null
    // const product = productSlug ? getProduct(productSlug) : null
    //const headerColor = product ? product.colorScheme : 'black'
    const headerColor = 'black'
    //const linkColor = product ? product.linkColorScheme : '#ffffff'
    const linkColor = '#ffffff'
    const tickerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const positionRef = useRef(0)
    const speedFactor = 0.07
    const lastTimeRef = useRef(0)
    const pausedPositionRef = useRef(0)

    useEffect(() => {
        const ticker = tickerRef.current
        if (ticker) {
            // Start from the right side of the window only on initial load
            if (positionRef.current === 0) {
                positionRef.current = window.innerWidth
            }

            const singleSetWidth = ticker.scrollWidth / 3 // We now have three sets
            let animationId: number

            const animate = (currentTime: number) => {
                if (!lastTimeRef.current) lastTimeRef.current = currentTime
                const deltaTime = currentTime - lastTimeRef.current
                lastTimeRef.current = currentTime

                if (!isHovered) {
                    positionRef.current -= speedFactor * deltaTime
                    pausedPositionRef.current = positionRef.current

                    // Reset when first set is fully scrolled
                    if (positionRef.current < -singleSetWidth) {
                        positionRef.current += singleSetWidth
                    }
                    
                    ticker.style.transform = `translate3d(${positionRef.current}px, 0, 0)`
                }
                animationId = requestAnimationFrame(animate)
            }

            animationId = requestAnimationFrame(animate)
            return () => cancelAnimationFrame(animationId)
        }
    }, [isHovered])

    const handleMouseEnter = () => {
        pausedPositionRef.current = positionRef.current
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        positionRef.current = pausedPositionRef.current
        lastTimeRef.current = 0
        setIsHovered(false)
    }

    return (
        <div 
            className="overflow-hidden py-2 sticky top-0 z-50 ticker" 
            style={{ backgroundColor: headerColor }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                ref={tickerRef}
                className="whitespace-nowrap will-change-transform"
                style={{ color: linkColor }}
            >
                {/* First set */}
                {messages.map((message, index) => (
                    <span key={index} className="inline-block px-4">{message} <span className="ml-2 mr-4">|</span></span>
                ))}
                {/* Second set */}
                {messages.map((message, index) => (
                    <span key={`repeat-${index}`} className="inline-block px-4">{message} <span className="ml-2 mr-4">|</span></span>
                ))}
                {/* Third set */}
                {messages.map((message, index) => (
                    <span key={`repeat-2-${index}`} className="inline-block px-4">{message} <span className="ml-2 mr-4">|</span></span>
                ))}
            </div>
        </div>
    )
}