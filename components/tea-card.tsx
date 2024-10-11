import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from "@/lib/products"

export function TeaCard({ name, displayName, sizes, images, slug }: Product) {
  const smallestSize = Object.keys(sizes)[0];
  const { price, discountedPrice } = sizes[smallestSize];

  return (
    <Link href={`/product/${slug}`}>
      <Card className="h-full flex flex-col transition-shadow hover:shadow-lg border-[#00AB6A] border-opacity-20">
        <CardHeader className="flex-grow">
          <CardTitle className="font-semibold text-[#00AB6A]">{displayName}</CardTitle>
          {/* <CardDescription className="line-clamp-2">{shortDescription}</CardDescription> */}
          <CardDescription className="line-clamp-2">
            {/* Benefits */}
          {/* <div className="flex space-x-2 md:space-x-4 mb-2 md:mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span className="text-xs md:text-xs">{benefit.icon}</span>
                <span className="text-xs md:text-xs font-light">{benefit.name}</span>
              </div>
            ))}
          </div> */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            alt={name}
            className="w-full h-64 object-cover rounded-md mb-4"
            height={256}
            src={images.card}
            width={320}
          />
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-bold text-[#00AB6A]">
            {/* <p className="text-lg text-[#00AB6A]"> */}
              ₹ {discountedPrice || price}
            </p>
            {discountedPrice && (
              <p className="text-sm line-through text-gray-500">₹ {price}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}