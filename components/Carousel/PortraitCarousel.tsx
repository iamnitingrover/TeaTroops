// Just like the LandscapeCarousel, the PortraitCarousel is a simple wrapper around the BaseCarousel component. It takes an array of PortraitCarouselImage objects and passes them to the BaseCarousel component. It also provides the getImageUrl and getImageLink functions to the BaseCarousel component.

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