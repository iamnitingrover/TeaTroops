"use client"

import { TeaCard } from "@/components/tea-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from 'react'
import { Product } from "@/lib/products"

interface ScrollableTeaSectionProps {
  teas: Product[];
}

export function ScrollableTeaSection({ teas }: ScrollableTeaSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      <div className="overflow-x-auto scrollbar-hide scroll-smooth font-light" ref={scrollRef}>
        <div className="inline-flex space-x-6 p-4">
          {teas.map((tea) => (
            <div key={tea.slug} className="w-80 flex-shrink-0 font-light">
              <TeaCard {...tea} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#00AB6A] bg-opacity-50 text-white p-2 rounded-full hidden md:block"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#00AB6A] bg-opacity-50 text-white p-2 rounded-full hidden md:block"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}