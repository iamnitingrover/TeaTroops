// This component is responsible for rendering the About Us section on the homepage. It includes a brief description of the Tea Troops brand and a list of features, as well as an image of an organic tea farm. The component is responsive and uses Tailwind CSS for styling.

import Image from 'next/image'

export default function AboutUsSection() { 
    return (
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
    )
}