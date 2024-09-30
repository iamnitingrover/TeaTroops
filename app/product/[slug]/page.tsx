import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const teas = [
  { name: "Lavender Serenity", description: "A soothing blend to calm your senses", price: "$12.99", slug: "lavender-serenity" },
  { name: "Blueflower Bliss", description: "Delicate and aromatic blue flower infusion", price: "$14.99", slug: "blueflower-bliss" },
  { name: "Hibiscus Harmony", description: "Vibrant and tangy hibiscus petals", price: "$13.99", slug: "hibiscus-harmony" },
  { name: "Chamomile Dream", description: "Gentle and relaxing chamomile flowers", price: "$11.99", slug: "chamomile-dream" },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const tea = teas.find(t => t.slug === params.slug)

  if (!tea) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src={`/placeholder.svg?height=400&width=400&text=${tea.name}`}
          alt={tea.name}
          className="w-full h-auto rounded-lg"
          width={400}
          height={400}
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{tea.name}</h1>
          <p className="text-xl mb-4">{tea.price}</p>
          <p className="mb-6">{tea.description}</p>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}