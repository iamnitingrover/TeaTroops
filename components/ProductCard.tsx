import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

/**
 * Component that renders a product card with a link to the product's page.
 * 
 * @component
 * @param {ProductCardProps} props - The properties object.
 * @param {Object} props.product - The product object to display.
 * @param {string} props.product.slug - The slug of the product used in the URL.
 * @param {string} props.product.displayName - The display name of the product.
 * @param {string} props.product.shortDescription - A short description of the product.
 * @param {Object} props.product.images - The images object of the product.
 * @param {string} props.product.images.card - The URL of the product's card image.
 * @param {string} props.product.name - The name of the product.
 * @param {Object} props.product.sizes - The sizes object of the product.
 * @returns {JSX.Element} The rendered product card component.
 */
export default function ProductCard({ product }: ProductCardProps) {
  const firstSize = Object.keys(product.sizes)[0];
  const { price, discountedPrice } = product.sizes[firstSize];
  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="cursor-pointer transition-shadow hover:shadow-lg h-full flex flex-col">
        <CardHeader className="pb-0">
          <CardTitle className="text-2xl font-light" style={{color:'#00AB6A'}}>{product.displayName}</CardTitle>
          {/* <CardDescription className="text-sm">{product.shortDescription}</CardDescription> */}
          {/* Benefits */}
          <div className="flex space-x-4 md:space-x-6 mb-4 md:mb-8">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-lg md:text-sm">{benefit.icon}</span>
                <span className="text-xs md:text-sm font-light">{benefit.name}</span>
              </div>
            ))}
          </div>
        </CardHeader>
        <CardContent className="pt-4 flex-grow flex flex-col">
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
            <p className="text-lg font-light" style={{color:'#00AB6A'}}>₹ {discountedPrice || price}</p>
            {discountedPrice && (
              <p className="text-sm line-through text-gray-500">₹{price}</p>
            )}
          </div>
          {/* Add Buy Button here that takes to respective */}
        </CardContent>
      </Card>
    </Link>
  )
}