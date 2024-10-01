import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface TeaCardProps {
  name: string;
  description: string;
  price: string;
  slug: string;
}

export function TeaCard({ name, description, price, slug }: TeaCardProps) {
  return (
    <Link href={`/product/${slug}`}>
      <Card className="h-full flex flex-col transition-shadow hover:shadow-lg border-[#00ab67] border-opacity-20">
        <CardHeader className="flex-grow">
          <CardTitle className="text-[#00ab67]">{name}</CardTitle>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            alt={name}
            className="w-full h-48 object-cover rounded-md mb-4"
            height={192}
            src={`/images/${slug}.jpg`}
            width={256}
          />
          <p className="text-lg font-bold text-[#00ab67]">{price}</p>
        </CardContent>
      </Card>
    </Link>
  )
}