"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ShoppingCart, Info } from 'lucide-react'
import { Product } from '@/lib/products'

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(Object.keys(product.sizes)[0])

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  const handleBuyNow = () => {
    window.open(product.amazonUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-amber-400 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center text-black">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </Link>
          <nav className="flex space-x-4">
            <button className="px-4 py-2 bg-white rounded-full text-sm">Products</button>
            <button className="px-4 py-2 bg-amber-500 text-white rounded-full text-sm">Contact</button>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-amber-500/20">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-amber-500/20" />
          </div>
        </header>

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
              <h1 className="text-5xl font-bold mb-4">{product.displayName}</h1>
              <h2 className="text-xl font-medium mb-2">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
            </div>

            <div className="flex space-x-4">
              {[30, 60, 90].map((count) => (
                <button
                  key={count}
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    count === 30 ? 'bg-black text-white' : 'bg-amber-500/20'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-amber-300/50 rounded-full blur-3xl transform -translate-y-1/4" />
            <Image
              src={product.images.details[0]}
              alt={product.name}
              width={400}
              height={600}
              className="relative z-10 mx-auto"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center justify-between">
          <p className="text-sm max-w-md">
            We work in close partnership with our clients - including the NHS, 
            the military, major private healthcare providers and GP practices.
          </p>

          <div className="flex items-center space-x-8">
            <div className="text-3xl font-bold">
              ${product.sizes[selectedSize].toFixed(2)}
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleQuantityChange(-1)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
              >
                -
              </button>
              <span className="text-xl font-medium">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
              >
                +
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              className="px-6 py-3 bg-white rounded-full flex items-center space-x-2"
            >
              <span>Buy Now</span>
            </button>
          </div>
        </div>

        {/* Info Button */}
        <button className="fixed bottom-6 right-6 flex items-center space-x-2 text-sm">
          <span>Overview, Dosage and Side effect</span>
          <Info className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}