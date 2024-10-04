import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

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
            <Image
              src={product.images.card}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <p className="text-lg font-bold">₹{Object.values(product.sizes)[0]}</p>
        </CardContent>
      </Card>
    </Link>
  )
}