"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Tea {
  name: string;
  description: string;
  price: string;
  slug: string;
}

interface CarouselProps {
  teas: Tea[];
}

export function Carousel({ teas }: CarouselProps) {
  const [currentTeaIndex, setCurrentTeaIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTeaIndex((prevIndex) => (prevIndex + 1) % teas.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [teas.length])

  const nextTea = () => {
    setCurrentTeaIndex((prevIndex) => (prevIndex + 1) % teas.length)
  }

  const prevTea = () => {
    setCurrentTeaIndex((prev) => (prev - 1 + teas.length) % teas.length)
  }

  return (
    <section className="relative w-full h-[calc(100vh-3.5rem)] overflow-hidden">
      {teas.map((tea, index) => (
        <Link
          key={tea.slug}
          href={`/product/${tea.slug}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentTeaIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={`/images/${tea.slug}.jpg`}
            alt={tea.name}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute bottom-8 left-8 text-white p-4 rounded">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-2">
              {tea.name}
            </h1>
            <p className="max-w-[700px] text-xl md:text-2xl">
              {tea.description}
            </p>
          </div>
        </Link>
      ))}
      <button
        onClick={prevTea}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#00ab67] bg-opacity-50 text-white p-2 rounded-full"
        aria-label="Previous tea"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextTea}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#00ab67] bg-opacity-50 text-white p-2 rounded-full"
        aria-label="Next tea"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {teas.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTeaIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentTeaIndex ? 'bg-[#00ab67]' : 'bg-white'
            }`}
            aria-label={`Go to tea ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}