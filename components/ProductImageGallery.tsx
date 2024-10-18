// ProductImageGallery component that displays a main image and a thumbnail scroller

"use client"

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

interface ThumbnailScrollerProps {
  images: string[];
  currentIndex: number;
  onSelect: (index: number) => void;
  direction: 'vertical' | 'horizontal';
  productName: string;
}

const ThumbnailScroller: React.FC<ThumbnailScrollerProps> = ({
  images,
  currentIndex,
  onSelect,
  direction,
  productName,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth, scrollHeight, clientHeight } = scrollRef.current;
      setShowScrollButtons(
        direction === 'vertical' 
          ? scrollHeight > clientHeight
          : scrollWidth > clientWidth
      );
    }
  }, [images, direction]);

  const scroll = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const isVertical = direction === 'up' || direction === 'down';
      const scrollAmount = isVertical
        ? direction === 'up' ? -current.clientHeight : current.clientHeight
        : direction === 'left' ? -current.clientWidth : current.clientWidth;
      
      current.scrollBy({
        top: isVertical ? scrollAmount : 0,
        left: isVertical ? 0 : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const renderScrollButtons = () => {
    if (!showScrollButtons) return null;

    if (direction === 'vertical') {
      return (
        <>
          <button title="Scroll Up" onClick={() => scroll('up')} className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 rounded-full p-1 z-10">
            <ChevronUp className="w-4 h-4" />
          </button>
          <button title="Scroll Down" onClick={() => scroll('down')} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 rounded-full p-1 z-10">
            <ChevronDown className="w-4 h-4" />
          </button>
        </>
      );
    } else {
      return (
        <>
          <button title="Scroll left" onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 z-10">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button title="Scroll right" onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 z-10">
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      );
    }
  };

  return (
    <div className={`relative ${direction === 'vertical' ? 'h-full' : 'w-full'}`}>
      {renderScrollButtons()}
      <div 
        ref={scrollRef} 
        className={`overflow-auto scrollbar-hide ${direction === 'vertical' ? 'flex-col h-full py-4 px-2' : 'flex-row w-full px-4 py-2'} flex`}
      >
        {images.map((image, index) => (
          <button
            title="Select Image"
            key={index}
            onClick={() => onSelect(index)}
            className={`flex-shrink-0 ${direction === 'vertical' ? 'w-24 h-24 mb-4 last:mb-0' : 'w-20 h-20 mr-4 last:mr-0'} overflow-hidden rounded-md ${
              index === currentIndex ? 'ring-2 ring-black' : 'ring-1 ring-gray-300'
            }`}
          >
            <Image
              src={image}
              alt={`${productName} - Thumbnail ${index + 1}`}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-3/4 aspect-square relative overflow-hidden rounded-lg">
        <Image
          src={images[currentImageIndex]}
          alt={`${productName} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 md:w-1/4">
        <div className="hidden md:block h-full">
          <ThumbnailScroller
            images={images}
            currentIndex={currentImageIndex}
            onSelect={setCurrentImageIndex}
            direction="vertical"
            productName={productName}
          />
        </div>
        <div className="md:hidden w-full">
          <ThumbnailScroller
            images={images}
            currentIndex={currentImageIndex}
            onSelect={setCurrentImageIndex}
            direction="horizontal"
            productName={productName}
          />
        </div>
      </div>
    </div>
  )
}

export default ThumbnailScroller;