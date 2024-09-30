import Link from "next/link"
import { Leaf, Instagram, Facebook, Twitter } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Bloom & Brew</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/shop">
            Shop
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg?height=600&width=1200&text=Our+Story')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white bg-black bg-opacity-50 p-4 rounded-lg inline-block">
              Our Story
            </h1>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Bloom & Brew</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Founded in 2020, Bloom & Brew was born out of a passion for organic, ethically sourced herbal teas. Our journey began when our founder, Sarah, discovered the transformative power of herbal teas during her travels across Asia and Europe.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Inspired by the rich traditions and healing properties of various cultures, Sarah set out to create a brand that would bring these ancient wisdom and flavors to modern tea enthusiasts.
                </p>
              </div>
              <img
                alt="Bloom & Brew founder"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg?height=550&width=550&text=Founder+Image"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Leaf className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-500">We are committed to sustainable farming practices and eco-friendly packaging to minimize our environmental impact.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Leaf className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-500">We source only the finest organic ingredients to ensure every cup of tea is a premium experience.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Leaf className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-500">We support local farmers and communities, fostering fair trade practices and sustainable livelihoods.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Join Our Journey</h2>
            <p className="max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At Bloom & Brew, we're more than just a tea company. We're a community of tea lovers, wellness enthusiasts, and environmental advocates. Join us in our mission to bring the finest organic herbal teas to your cup while making a positive impact on the world.
            </p>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Bloom & Brew. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4 sm:ml-auto">
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}