import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Instagram, Facebook, Twitter, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from 'react'

const teas = [
  { name: "Lavender Serenity", description: "A soothing blend to calm your senses", price: "$12.99", slug: "lavender-serenity" },
  { name: "Blueflower Bliss", description: "Delicate and aromatic blue flower infusion", price: "$14.99", slug: "blueflower-bliss" },
  { name: "Hibiscus Harmony", description: "Vibrant and tangy hibiscus petals", price: "$13.99", slug: "hibiscus-harmony" },
  { name: "Chamomile Dream", description: "Gentle and relaxing chamomile flowers", price: "$11.99", slug: "chamomile-dream" },
]

export default function Home() {
  const [currentTeaIndex, setCurrentTeaIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTeaIndex((prevIndex) => (prevIndex + 1) % teas.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTea = () => {
    setCurrentTeaIndex((prevIndex) => (prevIndex + 1) % teas.length)
  }

  const prevTea = () => {
    setCurrentTeaIndex((prevIndex) => (prevIndex - 1 + teas.length) % teas.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-10 px-4 lg:px-6 h-14 flex items-center bg-transparent">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-[#00ab67]" />
          <span className="ml-2 text-lg font-bold text-[#00ab67]">Bloom & Brew</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#00ab67]" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#00ab67]" href="/shop">
            Shop
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#00ab67]" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-[#00ab67]" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full h-screen overflow-hidden">
          {teas.map((tea, index) => (
            <Link
              key={tea.slug}
              href={`/product/${tea.slug}`}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentTeaIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={`/placeholder.svg?height=1080&width=1920&text=${tea.name}`}
                alt={tea.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 text-white">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-2">
                  {tea.name}
                </h1>
                <p className="max-w-[700px] text-xl md:text-2xl">
                  {tea.description}
                </p>
              </div>
            </Link>
          ))}
          <button
            onClick={prevTea}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#00ab67] bg-opacity-50 text-white p-2 rounded-full"
            aria-label="Previous tea"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTea}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#00ab67] bg-opacity-50 text-white p-2 rounded-full"
            aria-label="Next tea"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {teas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTeaIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentTeaIndex ? 'bg-[#00ab67]' : 'bg-white'
                }`}
                aria-label={`Go to tea ${index + 1}`}
              />
            ))}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f9f6]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#00ab67]">Our Premium Teas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teas.map((tea) => (
                <Link href={`/product/${tea.slug}`} key={tea.slug}>
                  <Card className="cursor-pointer transition-shadow hover:shadow-lg border-[#00ab67] border-opacity-20">
                    <CardHeader>
                      <CardTitle className="text-[#00ab67]">{tea.name}</CardTitle>
                      <CardDescription>{tea.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
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
                      <p className="mt-4 text-lg font-bold text-[#00ab67]">{tea.price}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Organic tea farm"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg?height=550&width=550&text=Organic+Tea+Farm"
                width="550"
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
                    <Leaf className="h-4 w-4 text-[#00ab67]" />
                    <span>100% Organic Ingredients</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-[#00ab67]" />
                    <span>Ethically Sourced</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-[#00ab67]" />
                    <span>Biodegradable Packaging</span>
                  </li>
                </ul>
              </div>
            </div>
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
          <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link className="text-[#00ab67] hover:text-[#008c55]" href="#">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}