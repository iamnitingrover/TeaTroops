"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Product, whatsappNumber } from '@/lib/products'

interface AlternativeProductDetailsProps {
  product: Product;
}

export function AlternativeProductDetails({ product }: AlternativeProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState(Object.keys(product.sizes)[0])

  const handleAmazonClick = () => {
    window.open(product.amazonUrl, '_blank')
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi, I'm interested in buying ${product.name} (${selectedSize}).`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col text-black">
      <div className="flex-grow flex flex-col p-6 overflow-auto">
        <header className="flex justify-between items-center mb-4">
          <Link href="/" className="flex items-center text-black z-10">
            <ChevronLeft className="mr-2" />
            Back
          </Link>
        </header>

        <div className="flex justify-center space-x-4 mb-4">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center text-sm">
              <span className="mr-2">{benefit.icon}</span>
              <span>{benefit.name}</span>
            </div>
          ))}
        </div>

        <div className="flex-grow grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Open Sauce One Regular, sans-serif' }}>{product.name}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.keys(product.sizes).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedSize === size ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-center justify-center relative">
            <Image
              src={product.images.details[0]}
              alt={product.name}
              width={200}
              height={300}
              className="z-10"
            />
            <div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-contain bg-no-repeat bg-center opacity-30"
              style={{
                backgroundImage: `url(${product.images.translucent})`,
              }}
            />
          </div>

          <div className="col-span-1 flex flex-col items-end">
            <h2 className="text-lg font-bold mb-2">How to Use</h2>
            <ul className="list-none text-right text-sm">
              {product.guidelines.map((guideline, index) => (
                <li key={index} className="mb-1">{guideline}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 items-end">
          <div className="text-xs" style={{ width: '30%' }}>
            <p>{product.description}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">${product.sizes[selectedSize].toFixed(2)}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="mb-2 font-semibold text-sm">Buy Now</p>
            <div className="flex space-x-4">
              <button
                onClick={handleAmazonClick}
                className="bg-[#FF9900] text-white px-3 py-1 rounded-full text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.42 13.72c-.626 1.92-2.28 2.88-4.44 2.88-2.16 0-3.818-.96-4.446-2.88-.314-.96-.47-1.92-.47-3.36 0-1.44.156-2.4.47-3.36.628-1.92 2.286-2.88 4.446-2.88 2.16 0 3.814.96 4.44 2.88.314.96.47 1.92.47 3.36 0 1.44-.156 2.4-.47 3.36zm-4.44-10.32c-3.762 0-6.708 2.4-6.708 6.96 0 4.56 2.946 6.96 6.708 6.96 3.762 0 6.708-2.4 6.708-6.96 0-4.56-2.946-6.96-6.708-6.96zm-7.8 11.52c-.156.48-.47.96-1.098 1.44-.628.48-1.254.72-1.882.72-.94 0-1.726-.48-2.354-1.44-.628-.96-.94-2.16-.94-3.6 0-1.44.312-2.64.94-3.6.628-.96 1.414-1.44 2.354-1.44.628 0 1.254.24 1.882.72.628.48.942.96 1.098 1.44l1.254-1.2c-.47-.72-1.098-1.32-1.882-1.8-.784-.48-1.726-.72-2.824-.72-1.882 0-3.45.72-4.704 2.16-1.254 1.44-1.882 3.36-1.882 5.76 0 2.4.628 4.32 1.882 5.76 1.254 1.44 2.822 2.16 4.704 2.16 1.098 0 2.04-.24 2.824-.72.784-.48 1.412-1.08 1.882-1.8l-1.254-1.2z"/>
                </svg>
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] text-white px-3 py-1 rounded-full text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}