import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from "@/lib/products"

export function TeaCard({ displayName, shortDescription, sizes, images, slug }: Product) {
  const smallestSize = Object.keys(sizes)[0];
  const lowestPrice = sizes[smallestSize];

  return (
    <Link href={`/product/${slug}`}>
      <Card className="h-full flex flex-col transition-shadow hover:shadow-lg border-[#00ab67] border-opacity-20">
        <CardHeader className="flex-grow">
          <CardTitle className="text-[#00ab67]">{displayName}</CardTitle>
          <CardDescription className="line-clamp-2">{shortDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            alt={displayName}
            className="w-full h-64 object-cover rounded-md mb-4"
            height={256}
            src={images.card}
            width={320}
          />
          <p className="text-lg font-bold text-[#00ab67]">From ₹{lowestPrice.toFixed(2)}</p>
        </CardContent>
      </Card>
    </Link>
  )
}