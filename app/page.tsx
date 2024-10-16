import { Carousel } from "@/components/Carousel/Carousel"
import { ScrollableTeaSection } from "@/components/scrollable-tea-section"
import { getAllProducts } from "@/lib/products"
import Image from "next/image"
import SubscriptionPopup from "@/components/SubscriptionPopup"
import { Suspense } from "react"

/**
 * The Home component is an asynchronous function that fetches a list of products and renders the main page of the application.
 * It includes several sections:
 * 
 * - A subscription popup.
 * - A full-screen carousel displaying the products.
 * - A section showcasing premium teas with a scrollable tea section.
 * - An about section describing the Tea Troops brand, including a list of features and an image.
 * 
 * @returns {JSX.Element} The main page of the application.
 */
export default async function Home() {
  const products = await getAllProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[calc(100vh-64px)]">
        <Carousel />
      </section>
      <section>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl tracking-tighter font-light sm:text-4xl text-center mb-12 text-[#00AB6A]">Our Caffeine Free Teas</h2>
          <Suspense fallback={<div className="h-[400px]">Loading...</div>}>
            <ScrollableTeaSection teas={products} />
          </Suspense>
        </div>
      </section>
      <section className="py-5 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-light tracking-tighter sm:text-5xl text-[#00AB6A]">About Tea Troops</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Tea Troops, we&apos;re passionate about bringing you the finest organic herbal flower teas. Our
                carefully curated blends are sourced from sustainable farms and handcrafted to perfection. Experience
                the beauty of nature in every sip.
              </p>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center gap-2">
                  <span className="text-[#00AB6A]">✓</span>
                  <span>100% Organic Ingredients</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00AB6A]">✓</span>
                  <span>Ethically Sourced</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00AB6A]">✓</span>
                  <span>Biodegradable Packaging</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square w-full max-w-[600px]">
              <Image
                alt="Organic tea farm"
                src="/images/about-tea-farm.webp"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </section>
      <SubscriptionPopup />
    </div>
  )
}