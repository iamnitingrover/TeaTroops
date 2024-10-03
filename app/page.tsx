import { Carousel } from "@/components/carousel"
import { ScrollableTeaSection } from "@/components/scrollable-tea-section"
import { getAllProducts } from "@/lib/products"
import Image from "next/image"

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="h-screen">
        <Carousel teas={products} />
      </section>
      
      <section className="bg-[#f0f9f6]">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#00ab67]">Our Premium Teas</h2>
          <ScrollableTeaSection teas={products} />
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#00ab67]">About Tea Troops</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Tea Troops, we&apos;re passionate about bringing you the finest organic herbal flower teas. Our
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