import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';

const teas = [
  { name: "Lavender Serenity", description: "A soothing blend to calm your senses", price: "$12.99", slug: "lavender" },
  { name: "Blueflower Bliss", description: "Delicate and aromatic blue flower infusion", price: "$14.99", slug: "blueflower" },
  { name: "Hibiscus Harmony", description: "Vibrant and tangy hibiscus petals", price: "$13.99", slug: "hibiscus" },
  { name: "Chamomile Dream", description: "Gentle and relaxing chamomile flowers", price: "$11.99", slug: "chamomile" },
  // Add more teas here as needed
  { name: "Earl Grey Bliss", description: "Classic black tea infused with bergamot", price: "$12.50", slug: "earl-grey" },
  { name: "Mint Medley", description: "Refreshing peppermint and spearmint blend", price: "$10.99", slug: "mint-medley" },
  { name: "Jasmine Green", description: "Delicate green tea with fragrant jasmine blossoms", price: "$13.75", slug: "jasmine-green" },
  { name: "Pepper Mint", description: "Refreshing & Uplifiting", price: "$9.99", slug: "pepper-mint" },
  { name: "Chai Spice Delight", description: "A warm blend of black tea and exotic spices", price: "$14.25", slug: "chai-spice" }
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
                  src={`/images/${tea.slug}.jpg`}
                  alt={tea.name}
                  width={500}
                  height={300}
                  className="object-cover"
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