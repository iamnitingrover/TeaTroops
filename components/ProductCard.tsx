import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="cursor-pointer transition-shadow hover:shadow-lg h-full flex flex-col">
        <CardHeader className="pb-0">
          <CardTitle className="text-lg">{product.displayName}</CardTitle>
          <CardDescription className="text-sm">{product.shortDescription}</CardDescription>
        </CardHeader>
        <CardContent className="pt-4 flex-grow flex flex-col">
          <div className="relative w-full pt-[75%] mb-4 flex-grow">
            {/* <Image
              src={product.images.card}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            /> */}
            <Image
              src={product.images.card}
              alt={product.name}
              fill
              className="rounded-md"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p className="text-lg font-bold">₹{Object.values(product.sizes)[0]}</p>
        </CardContent>
      </Card>
    </Link>
  )
}