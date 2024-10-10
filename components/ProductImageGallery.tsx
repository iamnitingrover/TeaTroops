"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed) {
      const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
      const x = ((event.clientX - left) / width) * 100
      const y = ((event.clientY - top) / height) * 100
      setZoomPosition({ x, y })
    }
  }

  const handleMouseEnter = () => setIsZoomed(true)
  const handleMouseLeave = () => setIsZoomed(false)

  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative w-full h-0 pb-[70%]">
        <div
          className="absolute inset-0 overflow-hidden cursor-zoom-in"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* <Image
            src={images[currentImageIndex]}
            alt={`${productName} - Image ${currentImageIndex + 1}`}
            layout="fill"
            objectFit="contain"
            className={isZoomed ? 'scale-150' : ''}
            style={isZoomed ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` } : {}}
          /> */}
          <Image
            src={images[currentImageIndex]}
            alt={`${productName} - Image ${currentImageIndex + 1}`}
            fill
            className={`relative ${isZoomed ? 'scale-150' : ''}`}
            style={{
              objectFit: 'contain',
              transformOrigin: isZoomed ? `${zoomPosition.x}% ${zoomPosition.y}%` : undefined,
            }}
          />
        </div>
        <button
          onClick={handlePrevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-14 h-14 border-2 ${
              index === currentImageIndex ? 'border-black' : 'border-transparent'
            }`}
          >
            {/* <Image
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              width={64}
              height={64}
              objectFit="cover"
            /> */}
            <Image
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              width={56}
              height={56}
              style={{ objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}