"use client"

import { useState } from 'react'
import Image from 'next/image'
//import Link from 'next/link'
//import { ChevronLeft, ShoppingCart, Info } from 'lucide-react'
import { Product, whatsappNumber } from '@/lib/products'

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
    <div className="h-[calc(100vh-8rem)] flex flex-col text-black">
      <div className="flex-grow flex flex-col p-6 overflow-auto">
        {/* Header */}
        {/*<header className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center text-black z-10">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </Link>
          <nav className="flex space-x-4">
            <button className="px-4 py-2 bg-white rounded-full text-sm">Products</button>
            <button className="px-4 py-2 bg-amber-500 text-white rounded-full text-sm">Contact</button>
          </nav>
          /*<div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-amber-500/20">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-amber-500/20" />
          </div>
        </header>*/}

        {/* Benefits */}
        <div className="flex justify-center space-x-6 mb-12">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-xl">{benefit.icon}</span>
              <span className="text-sm font-medium">{benefit.name}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins Light Italic, sans-serif' }}>
                {product.displayName}
              </h1>
              <h2 className="text-xl font-medium mb-2">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
            </div>

            <div className="flex space-x-4">
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

            <div>
              <h2 className="text-lg font-bold mb-2">How to Use</h2>
              <ul className="list-none text-sm space-y-1">
                {product.guidelines.map((guideline, index) => (
                  <li key={index}>{guideline}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className={`absolute inset-0 bg-${radiantColor}-300/80 rounded-full blur-3xl transform -translate-y-1/4`}/>
            <div className="relative z-10">
              <Image
                src={product.images.details[0]}
                alt={product.name}
                width={600}
                height={600}
                className="mx-auto"
              />
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-contain bg-no-repeat bg-center opacity-30"
                style={{
                  backgroundImage: `url(${product.images.translucent})`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Price and Purchase Options */}
        <div className="mt-12 flex items-left justify-between">
          {/* <p className="text-sm max-w-md">
            We work in close partnership with our clients - including the NHS, 
            the military, major private healthcare providers and GP practices.
          </p> */}

          <div className="flex items-center space-x-8">
            <div className="text-3xl font-bold">
            ₹{product.sizes[selectedSize].toFixed(2)}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAmazonClick}
                className="px-6 py-3 bg-[#FFFFFF] text-black rounded-full flex items-center space-x-2"
              >
                <Image src={amazonLogoSrc} width={24} height={24} alt={'Buy Now on Amazon'}/>
                <span>Amazon</span>
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="px-6 py-3 bg-[#25D366] text-white rounded-full flex items-center space-x-2"
              >
                <Image src={whatsappLogoSrc} width={24} height={24} alt={'Buy Now on Whatsapp'}/>
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}