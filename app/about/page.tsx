import { Leaf } from "lucide-react"
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <Image
            src="/images/our-story.jpg"
            alt="Our Story"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="container px-4 md:px-6 relative z-10">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white bg-black bg-opacity-50 p-4 rounded-lg inline-block">
              Our Story
            </h1>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Tea Troops</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Founded in 2024, Tea Troops was born out of a passion for organic, ethically sourced herbal teas. Our journey began when our founder, Shreya, discovered the transformative power of herbal teas during her travels across Asia and Europe.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Inspired by the rich traditions and healing properties of various cultures, Shreya set out to create a brand that would bring these ancient wisdom and flavors to modern tea enthusiasts.
                </p>
              </div>
              <Image
                alt="Tea Troops founder"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
                height="550"
                width="550"
                src="/images/founder.jpg"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
              {
                title: "Sustainability",
                description: "We are committed to sustainable farming practices and eco-friendly packaging to minimize our environmental impact.",
              },
              {
                title: "Quality",
                description: "We source only the finest organic ingredients to ensure every cup of tea is a premium experience.",
              },
              {
                title: "Community",
                description: "We support local farmers and communities, fostering fair trade practices and sustainable livelihoods.",
              },
              ].map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Leaf className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </div>
              ))}
            </div>
        </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Join Our Journey</h2>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At Tea Troops, we&apos;re more than just a tea company. We&apos;re a community of tea lovers, wellness enthusiasts, and environmental advocates. Join us in our mission to bring the finest organic herbal teas to your cup while making a positive impact on the world.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}