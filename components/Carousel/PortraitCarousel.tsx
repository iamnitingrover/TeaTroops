// components/Carousel/PortraitCarousel.tsx

import { BaseCarousel } from './BaseCarousel'
import { PortraitCarouselImage } from '@/types/carousel'

interface PortraitCarouselProps {
  images: PortraitCarouselImage[];
}

export function PortraitCarousel({ images }: PortraitCarouselProps) {
  return (
    <BaseCarousel
      images={images}
      getImageUrl={(image) => image.portraitUrl}
      getImageLink={(image) => image.link}
    />
  )
}