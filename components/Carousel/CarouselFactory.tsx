// Code for rendering the appropriate carousel based on the device orientation. 

"use client"

import { useState, useEffect } from 'react'
import { LandscapeCarousel } from './LandscapeCarousel'
import { PortraitCarousel } from './PortraitCarousel'
import { LandscapeCarouselImage, PortraitCarouselImage } from '@/types/carousel'

interface CarouselFactoryProps {
  landscapeImages: LandscapeCarouselImage[];
  portraitImages: PortraitCarouselImage[];
}

export function CarouselFactory({ landscapeImages, portraitImages }: CarouselFactoryProps) {
  const [isPortrait, setIsPortrait] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth)
    }

    handleResize() // Set initial orientation
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isPortrait && portraitImages.length > 0) {
    return <PortraitCarousel images={portraitImages} />
  } else if (landscapeImages.length > 0) {
    return <LandscapeCarousel images={landscapeImages} />
  } else {
    return null // No carousel if no images available for the current orientation
  }
}