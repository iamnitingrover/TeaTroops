//Carousel component that displays a list of images in a carousel with a timer to automatically change images.  

import { useState, useEffect, useRef } from 'react'
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { BaseCarouselImage } from '@/types/carousel'

interface BaseCarouselProps<T extends BaseCarouselImage> {
  images: T[];
  getImageUrl: (image: T) => string;
  getImageLink: (image: T) => string;
}

export function BaseCarousel<T extends BaseCarouselImage>({ 
  images, 
  getImageUrl,
  getImageLink
}: BaseCarouselProps<T>) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [carouselHeight, setCarouselHeight] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [images.length])

  useEffect(() => {
    const updateCarouselHeight = () => {
      if (carouselRef.current) {
        const viewportHeight = window.innerHeight
        const tickerHeight = document.querySelector('.ticker')?.clientHeight || 0
        const headerHeight = document.querySelector('header')?.clientHeight || 0
        const remainingHeight = viewportHeight - tickerHeight - headerHeight
        setCarouselHeight(remainingHeight)
      }
    }

    updateCarouselHeight()
    window.addEventListener('resize', updateCarouselHeight)
    return () => window.removeEventListener('resize', updateCarouselHeight)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const currentImage = images[currentImageIndex]

  return (
    <section       
      ref={carouselRef} 
      className="relative w-full overflow-hidden"
      style={{ height: `${carouselHeight}px` }}
    >
      <Link
        href={getImageLink(currentImage)}
        className="block absolute inset-0"
      >
        <Image
          src={getImageUrl(currentImage)}
          alt={`Carousel image ${currentImage.id}`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </Link>
      <button
        title="Previous image"
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        title="Next image"
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            title="Select carousel image" 
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}