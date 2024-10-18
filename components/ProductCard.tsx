// Code: ProductCard component. This component is responsible for rendering a product card on the homepage and shop page. It displays the product image, name, price, and benefits. The component is responsive and uses Tailwind CSS for styling.

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from '@/lib/products'
import { ShoppingCart } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstSize = Object.keys(product.sizes)[0];
  const { price, discountedPrice } = product.sizes[firstSize];
  return (
    <Card className="cursor-pointer transition-shadow hover:shadow-lg h-full flex flex-col relative">
      <Link href={`/product/${product.slug}`}>
        <CardHeader className="pb-0">
          <CardTitle className="text-xl sm:text-xl font-light" style={{color:'#00AB6A'}}>{product.displayName}</CardTitle>
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-2 sm:mb-4">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-1 sm:space-x-2">
                <span className="text-base sm:text-xs">{benefit.icon}</span>
                <span className="text-xs sm:text-xs font-light">{benefit.name}</span>
              </div>
            ))}
          </div>
        </CardHeader>
        <CardContent className="pt-2 sm:pt-4 flex-grow flex flex-col">
          <div className="relative w-full pt-[75%] mb-4 flex-grow">
            <Image
              src={product.images.card}
              alt={product.name}
              fill
              className="rounded-md"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-base sm:text-lg font-light" style={{color:'#00AB6A'}}>₹ {discountedPrice || price}</p>
            {discountedPrice && (
              <p className="text-sm line-through text-gray-500">₹{price}</p>
            )}
          </div>
        </CardContent>
      </Link>
      <Link 
        href={`/product/${product.slug}`}
        className="absolute bottom-6 right-6 bg-[#00AB6A] text-white p-2 rounded-full hover:bg-[#008c56] transition-colors"
        aria-label={`View ${product.name}`}
      >
        <ShoppingCart size={16} />
      </Link>
    </Card>
  )
}