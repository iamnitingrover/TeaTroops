"use client"

import { useState } from 'react'
import Image from 'next/image'
//import Link from 'next/link'
//import { ChevronLeft } from 'lucide-react'
import { Product, whatsappNumber } from '@/lib/products'

interface AlternativeProductDetailsProps {
  product: Product;
}

const amazonLogoSrc = '/amazon-icon.svg'
const whatsappLogoSrc = '/whatsapp-white-icon.svg'

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
        {/*<header className="flex justify-between items-center mb-4">
          <Link href="/" className="flex items-center text-black z-10">
            <ChevronLeft className="mr-2" />
            Back
          </Link>
        </header>*/}

        <div className="flex justify-center space-x-6 mb-12">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-xl">{benefit.icon}</span>
              <span className="text-sm font-medium">{benefit.name}</span>
            </div>
          ))}
        </div>

        <div className=" grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <h1 className="text-5xl font-bold mb-2" style={{ fontFamily: 'Open Sauce One Regular, sans-serif' }}>{product.displayName}</h1>
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
              alt={product.displayName}
              width={800}
              height={800}
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
                className="bg-[#FFffff] text-white px-3 py-1 rounded-full text-sm"
              >
              <Image src={amazonLogoSrc} width={24} height={24} alt={'Buy Now on Amazon'}/>
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] text-white px-3 py-1 rounded-full text-sm"
              >
                <Image src={whatsappLogoSrc} width={24} height={24} alt={'Buy Now on Whatsapp'}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}