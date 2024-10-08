export interface BaseCarouselImage {
    id: number;
    link: string;
}
  
export interface LandscapeCarouselImage extends BaseCarouselImage {
    landscapeUrl: string;
}
  
export interface PortraitCarouselImage extends BaseCarouselImage {
    portraitUrl: string;
}