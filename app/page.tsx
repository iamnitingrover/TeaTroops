// This file contains the main page of the application, which includes a subscription popup, a carousel, a scrollable tea section, and an about section.

import { Carousel } from "@/components/Carousel/Carousel"
import { ScrollableTeaSection } from "@/components/scrollable-tea-section"
import { getAllProducts } from "@/lib/products"
import { Suspense } from "react"
import dynamic from "next/dynamic"

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

const SubscriptionPopup = dynamic(() => import('@/components/SubscriptionPopup'))
const AboutUsSection = dynamic(() => import('@/components/AboutUsSection'))

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
        <AboutUsSection />
      </section>
      <SubscriptionPopup />
    </div>
  )
}