"use client"

import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Product } from "@/lib/products"
import ProductCard from "./ProductCard"

interface ScrollableTeaSectionProps {
  teas: Product[];
}

export function ScrollableTeaSection({ teas }: ScrollableTeaSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const updateArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    updateArrows()
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative px-4 md:px-6">
      <div className="overflow-x-auto scrollbar-hide scroll-smooth font-light" ref={scrollRef} onScroll={updateArrows}>
        <div className="inline-flex space-x-4 md:space-x-6">
          {teas.map((tea) => (
            // <div key={tea.slug} className="w-[calc(100vw-2rem)] sm:w-[calc(50vw-3rem)] md:w-[calc(33.33vw-3rem)] lg:w-[calc(25vw-3rem)] max-w-[400px] flex-shrink-0 font-light">
            <div key={tea.slug} className="w-[350px] flex-shrink-0 font-light">
              <ProductCard product={tea} />
            </div>
          ))}
        </div>
      </div>
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#00AB6A] bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#00AB6A] bg-opacity-50 text-white p-2 rounded-full"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}