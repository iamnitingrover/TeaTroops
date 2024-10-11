"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Product, whatsAppNumber } from '@/lib/products'
import { ProductImageGallery } from './ProductImageGallery'

interface ProductDetailsProps {
  product: Product;
}

const amazonLogoSrc = '/amazon-icon.svg'
const whatsappLogoSrc = '/whatsapp-white-icon.svg'

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState(Object.keys(product.sizes)[0])

  const handleAmazonClick = () => {
    window.open(product.amazonUrl, '_blank')
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi, I'm interested in buying ${product.name} (${selectedSize}).`)
    window.open(`https://wa.me/${whatsAppNumber}?text=${message}`, '_blank')
  }

  const color = product.colorScheme;
  const radiantColor = product.radiantColor;

  const { price, discountedPrice } = product.sizes[selectedSize];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-4 md:p-6">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-4 md:space-y-6 order-2 md:order-1">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {product.displayName}
              </h1>
              {/* <h2 className="text-lg md:text-xl font-medium mb-2">{product.name}</h2> */}
              {/* Benefits */}
              <div className="flex space-x-4 md:space-x-6 mb-4 md:mb-2">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-lg md:text-xl">{benefit.icon}</span>
                    <span className="text-xs md:text-sm font-regular">{benefit.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm">{product.description}</p>
            </div>

            <div className="md:hidden">
              <ProductImageGallery images={product.images.details} productName={product.name} />
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4">
              {Object.keys(product.sizes).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm ${
                    selectedSize === size ? 'bg-black text-white' : `bg-${color}-100/80`
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Price and Purchase Options */}
            <div className="space-y-2 md:space-y-4">
              <div className="flex items-baseline gap-2">
                <div className="text-2xl md:text-3xl font-light">
                  ₹ {discountedPrice || price}
                </div>
                {discountedPrice && (
                  <div className="text-lg md:text-xl line-through text-gray-500">
                    ₹ {price}
                  </div>
                )}
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold mb-2">Buy on:</p>
                <div className="flex flex-row gap-2 md:gap-4">
                  <button
                    onClick={handleAmazonClick}
                    className="flex-1 md:flex-none px-4 py-2 md:px-6 md:py-3 bg-[#FFFFFF] text-black rounded-full flex items-center justify-center space-x-2 md:w-auto"
                  >
                    <Image src={amazonLogoSrc} width={20} height={20} alt={'Buy Now on Amazon'}/>
                    <span className="text-sm md:text-base">Amazon</span>
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex-1 md:flex-none px-4 py-2 md:px-6 md:py-3 bg-[#25D366] text-white rounded-full flex items-center justify-center space-x-2 md:w-auto"
                  >
                    <Image src={whatsappLogoSrc} width={20} height={20} alt={'Buy Now on Whatsapp'}/>
                    <span className="text-sm md:text-base">WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-base md:text-lg mb-2">How to Use:</h2>
              <ul className="list-none text-xs md:text-sm space-y-1">
                {product.guidelines.map((guideline, index) => (
                  <li key={index}>{guideline}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative order-1 md:order-2 hidden md:block">
            <div className={`absolute inset-0 bg-${radiantColor}-300/80 rounded-full blur-3xl transform -translate-y-1/4`}/>
            <div className="relative z-10 w-full h-full">
              <ProductImageGallery images={product.images.details} productName={product.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}