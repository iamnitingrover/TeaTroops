import { Carousel } from "@/components/carousel"
import { ScrollableTeaSection } from "@/components/scrollable-tea-section"
import Image from "next/image"

const teas = [
  { name: "Lavender Serenity", description: "A soothing blend to calm your senses", price: "$12.99", slug: "lavender" },
  { name: "Blueflower Bliss", description: "Delicate and aromatic blue flower infusion", price: "$14.99", slug: "blueflower" },
  { name: "Hibiscus Harmony", description: "Vibrant and tangy hibiscus petals", price: "$13.99", slug: "hibiscus" },
  { name: "Chamomile Dream", description: "Gentle and relaxing chamomile flowers", price: "$11.99", slug: "chamomile" },
  // Add more teas here as needed
  { name: "Earl Grey Bliss", description: "Classic black tea infused with bergamot", price: "$12.50", slug: "earl-grey" },
  { name: "Mint Medley", description: "Refreshing peppermint and spearmint blend", price: "$10.99", slug: "mint-medley" },
  { name: "Jasmine Green", description: "Delicate green tea with fragrant jasmine blossoms", price: "$13.75", slug: "jasmine-green" },
  { name: "Hibiscus Harmony", description: "Tangy hibiscus flowers for a vibrant brew", price: "$9.99", slug: "hibiscus-harmony" },
  { name: "Chai Spice Delight", description: "A warm blend of black tea and exotic spices", price: "$14.25", slug: "chai-spice" },
  { name: "Lemon Verbena Zest", description: "Bright and citrusy herbal infusion", price: "$8.50", slug: "lemon-verbena" },
  { name: "Rooibos Red", description: "Naturally caffeine-free rooibos with hints of vanilla", price: "$11.50", slug: "rooibos-red" },
  { name: "Oolong Orchid", description: "Smooth oolong tea with floral notes", price: "$15.00", slug: "oolong-orchid" },
  { name: "Berry Bliss", description: "A fruity blend of berries for a refreshing sip", price: "$10.50", slug: "berry-bliss" },
  { name: "Ginger Turmeric Glow", description: "Spicy ginger and earthy turmeric for a wellness boost", price: "$12.00", slug: "ginger-turmeric" }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Carousel teas={teas} />
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f9f6]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#00ab67]">Our Premium Teas</h2>
          <ScrollableTeaSection teas={teas} />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00ab67]">About Bloom & Brew</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Bloom & Brew, we are passionate about bringing you the finest organic herbal flower teas. Our
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
            <Image
              alt="Organic tea farm"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height={600}
              src="/images/about-tea-farm.jpg"
              width={600}
            />
          </div>
        </div>
      </section>
    </div>
  )
}