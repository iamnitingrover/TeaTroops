// The LandscapeCarousel is a simple wrapper around the BaseCarousel component. It takes an array of LandscapeCarouselImage objects and passes them to the BaseCarousel component. It also provides the getImageUrl and getImageLink functions to the BaseCarousel component to extract the image URL and link from the LandscapeCarouselImage object.

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
      getImageLink={(image) => image.link}
    />
  )
}