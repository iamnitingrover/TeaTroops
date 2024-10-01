"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Product } from '@/lib/products'

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedImage, setSelectedImage] = useState(product.images[0])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi, I'm interested in buying ${product.name} (${selectedSize}). Here's the image: ${selectedImage}`)
    window.open(`https://wa.me/${product.whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
          <Image
            src={selectedImage}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#00ab67]"
            >
              <Image
                src={image}
                alt={`${product.name} ${index + 1}`}
                width={80}
                height={80}
                objectFit="cover"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-[#00ab67]">{product.name}</h1>
        <p className="text-xl font-semibold">{product.price}</p>
        <p className="text-gray-600">{product.description}</p>
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedSize === size
                    ? 'bg-[#00ab67] text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <button
            className="w-full py-3 px-4 bg-gradient-to-r from-[#FF9900] to-[#FFC300] text-white font-bold rounded-lg shadow-lg hover:from-[#FFC300] hover:to-[#FF9900] transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => window.open(product.amazonUrl, '_blank')}
          >
            Buy on Amazon
          </button>
          <button
            className="w-full py-3 px-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold rounded-lg shadow-lg hover:from-[#128C7E] hover:to-[#25D366] transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={handleWhatsAppClick}
          >
            Buy on WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}