import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
//import { Leaf } from "lucide-react"

const teas = [
  { name: "Lavender Serenity", description: "A soothing blend to calm your senses", price: "$12.99", slug: "lavender-serenity" },
  { name: "Blueflower Bliss", description: "Delicate and aromatic blue flower infusion", price: "$14.99", slug: "blueflower-bliss" },
  { name: "Hibiscus Harmony", description: "Vibrant and tangy hibiscus petals", price: "$13.99", slug: "hibiscus-harmony" },
  { name: "Chamomile Dream", description: "Gentle and relaxing chamomile flowers", price: "$11.99", slug: "chamomile-dream" },
]

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Tea Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teas.map((tea) => (
          <Link href={`/product/${tea.slug}`} key={tea.slug}>
            <Card className="cursor-pointer transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>{tea.name}</CardTitle>
                <CardDescription>{tea.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  alt={tea.name}
                  className="w-full h-48 object-cover rounded-md"
                  height="192"
                  src={`/placeholder.svg?height=192&width=256&text=${tea.name}`}
                  style={{
                    aspectRatio: "4/3",
                    objectFit: "cover",
                  }}
                  width="256"
                />
                <p className="mt-4 text-lg font-bold">{tea.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}