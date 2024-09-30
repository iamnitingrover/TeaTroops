import { TeaCard } from "@/components/tea-card"
import { Carousel } from "@/components/carousel"
import Image from "next/image"

const teas = [
  { name: "Lavender", description: "A soothing blend to calm your senses", price: "$12.99", slug: "lavender" },
  { name: "Blueflower", description: "Delicate and aromatic blue flower infusion", price: "$14.99", slug: "blueflower" },
  { name: "Hibiscus", description: "Vibrant and tangy hibiscus petals", price: "$13.99", slug: "hibiscus" },
  { name: "Chamomile", description: "Gentle and relaxing chamomile flowers", price: "$11.99", slug: "chamomile" },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Carousel teas={teas} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f9f6]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#00ab67]">Our Premium Teas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teas.map((tea) => (
              <TeaCard key={tea.slug} {...tea} />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="Organic tea farm"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height={550}
              src="/placeholder.svg?height=550&width=550&text=Organic+Tea+Farm"
              width={550}
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00ab67]">About Bloom & Brew</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Bloom & Brew, we're passionate about bringing you the finest organic herbal flower teas. Our
                carefully curated blends are sourced from sustainable farms and handcrafted to perfection. Experience
                the beauty of nature in every sip.
              </p>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <span className="text-[#00ab67]">✓</span>
                  <span>100% Organic Ingredients</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00ab67]">✓</span>
                  <span>Ethically Sourced</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00ab67]">✓</span>
                  <span>Biodegradable Packaging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}