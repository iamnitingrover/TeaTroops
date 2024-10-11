// components/Carousel/Carousel.tsx

import { CarouselFactory } from './CarouselFactory'
import { LandscapeCarouselImage, PortraitCarouselImage } from '@/types/carousel'

const landscapeImages: LandscapeCarouselImage[] = [
  { id: 1, landscapeUrl: "/images/carousel/landscape/1.webp", link: "/product/lavender" },
  { id: 2, landscapeUrl: "/images/carousel/landscape/2.webp", link: "/product/blueflower" },
  { id: 3, landscapeUrl: "/images/carousel/landscape/3.webp", link: "/product/hibiscus" },
  { id: 4, landscapeUrl: "/images/carousel/landscape/4.webp", link: "/product/chamomile" },
  // Add more landscape images as needed
]

const portraitImages: PortraitCarouselImage[] = [
  { id: 1, portraitUrl: "/images/carousel/portrait/1.webp", link: "/product/lavender" },
  { id: 2, portraitUrl: "/images/carousel/portrait/2.webp", link: "/product/blueflower" },
  { id: 3, portraitUrl: "/images/carousel/portrait/3.webp", link: "/product/hibiscus" },
  { id: 4, portraitUrl: "/images/carousel/portrait/4.webp", link: "/product/chamomile" },
  // Add more portrait images as needed
]

export function Carousel() {
  return <CarouselFactory landscapeImages={landscapeImages} portraitImages={portraitImages} />
}