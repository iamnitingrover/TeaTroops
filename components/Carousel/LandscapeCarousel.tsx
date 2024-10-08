// components/Carousel/LandscapeCarousel.tsx

import { BaseCarousel } from './BaseCarousel'
import { LandscapeCarouselImage } from '@/types/carousel'

interface LandscapeCarouselProps {
  images: LandscapeCarouselImage[];
}

export function LandscapeCarousel({ images }: LandscapeCarouselProps) {
  return (
    <BaseCarousel
      images={images}
      getImageUrl={(image) => image.landscapeUrl}
    />
  )
}