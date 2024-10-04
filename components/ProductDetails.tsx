"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Product, whatsappNumber } from '@/lib/products'
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
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const color = product.colorScheme;
  const radiantColor = product.radiantColor;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col p-6 overflow-y-auto">
        {/* Benefits */}
        <div className="flex justify-center space-x-6 mb-8">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-xl">{benefit.icon}</span>
              <span className="text-sm font-medium">{benefit.name}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Poppins Light Italic, sans-serif' }}>
                {product.displayName}
              </h1>
              <h2 className="text-xl font-medium mb-2">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
            </div>

            <div className="md:hidden">
              <ProductImageGallery images={product.images.details} productName={product.name} />
            </div>

            <div className="flex flex-wrap gap-4">
              {Object.keys(product.sizes).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedSize === size ? 'bg-black text-white' : `bg-${color}-100/80`
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Price and Purchase Options */}
            <div className="space-y-4">
              <div className="text-3xl font-bold">
                ₹{product.sizes[selectedSize].toFixed(2)}
              </div>
              <div>
                <p className="text-lg font-semibold mb-2">Buy on:</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAmazonClick}
                    className="px-6 py-3 bg-[#FFFFFF] text-black rounded-full flex items-center justify-center space-x-2"
                  >
                    <Image src={amazonLogoSrc} width={24} height={24} alt={'Buy Now on Amazon'}/>
                    <span>Amazon</span>
                  </button>
                  <button
                    onClick={handleWhatsAppClick}
                    className="px-6 py-3 bg-[#25D366] text-white rounded-full flex items-center justify-center space-x-2"
                  >
                    <Image src={whatsappLogoSrc} width={24} height={24} alt={'Buy Now on Whatsapp'}/>
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2">How to Use</h2>
              <ul className="list-none text-sm space-y-1">
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