import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Tea Troops',
  description: 'Learn about Tea Troops, our story, and our commitment to providing premium organic herbal teas.',
}

export default function AboutUs() {
  return (
    // <div className="container mx-auto px-4 py-8 max-w-7xl">
    //   <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
    //     {/* Left column (desktop only) */}
    //     <div className="hidden md:block relative">
    //       <Image
    //         src="/images/about-us/2.webp"
    //         alt="Lavender illustration"
    //         width={300}
    //         height={300}
    //         className="absolute top-1/4 left-0"
    //       />
    //     </div>

    //     {/* Center column */}
    //     <div className="space-y-8 md:col-span-3">
    //       {/* First image (mobile only) */}
    //       <div className="md:hidden">
    //         <Image
    //           src="/images/about-us/3.webp"
    //           alt="Blue flower illustration"
    //           width={300}
    //           height={300}
    //           className="w-full h-auto"
    //           priority
    //         />
    //       </div>

    //       <section>
    //         <h1 className="text-4xl font-light text-left mb-8">ABOUT US</h1>
    //         <h2 className="text-3xl font-light mb-4">Welcome to Tea Troops!</h2>
    //         <p className="font-light mb-4">
    //           We are a small business based in Delhi, India. My family roots are from Uttarakhand and we came to Delhi before I was born. Landscape around me had in progress construction work and busy roads, so a void always existed. When we visited my uncle in our village, he made me taste different herbs it helped me develop a taste and moreover now I value this treasure more than ever. Interestingly I developed this habit to serve this to friend&apos;s n family at breakfast. Though I&apos;m one of those who also sometimes enjoys milk in my tea but these herbal cups have helped my family especially my parents reduce their daily caffeine tea intake. That is the beauty of tea and mind it enjoying tea with wonderful company exaggerates its flavours.
    //         </p>
    //       </section>

    //       <section>
    //         <p className="font-light mb-4">
    //           We know that we can&apos;t solve the issue that affects nature in major way but I believe every bit counts. There is always search of sustainable material for the packaging.
    //         </p>
    //         <p className="font-light mb-4">
    //           While we&apos;re not perfect, we are committed to improve and are therefore constantly evolving. It is also very important to make sure our teas are ethically sourced.
    //         </p>
    //       </section>

    //       <section>
    //         <h2 className="text-3xl font-light mb-4">What does Tea Troops mean?</h2>
    //         <p className="font-light mb-4">
    //           Troop that loves herbal tea. Tea Troops beyond its meaning it supports group of people that is working in fields to produce fresh, organic and natural ingredient something which appears simple but has a complex nature.
    //         </p>
    //         <h2 className="text-3xl font-light mb-4">Our Teas</h2>
    //         <p className="font-light mb-4">
    //           Yes! It is Permutation and combination with intense study also running behind our valuable clients who loves herbal tea and happily shares their experiences. We are building our teas.
    //         </p>
    //         <p className="font-light mb-4">
    //           We all love nature and nature based ingredient, and Tea Troops just bring the same for all of you with the help of our Troops.
    //         </p>
    //       </section>

    //       {/* Last image */}
    //       <div className="text-center">
    //         <Image
    //           src="/images/about-us/4.webp"
    //           alt="Fennel illustration"
    //           width={200}
    //           height={200}
    //           className="mx-auto"
    //         />
    //       </div>
    //     </div>

    //     {/* Right column (desktop only) */}
    //     <div className="hidden md:block relative">
    //       <Image
    //         src="/images/about-us/3.webp"
    //         alt="Blue flower illustration"
    //         width={300}
    //         height={300}
    //         className="absolute top-0 right-0"
    //       />
    //       <Image
    //         src="/images/about-us/1.webp"
    //         alt="Yellow flower illustration"
    //         width={300}
    //         height={300}
    //         className="absolute bottom-1/4 right-0"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Left column (desktop only) */}
        <div className="hidden md:flex items-center justify-center relative">
          <Image
            src="/images/about-us/2.webp"
            alt="Lavender illustration"
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>

        {/* Center column */}
        <div className="space-y-8 md:col-span-3">
          {/* First image (mobile only) */}
          <div className="md:hidden">
            <Image
              src="/images/about-us/3.webp"
              alt="Blue flower illustration"
              width={300}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>

          <section>
            <h1 className="text-4xl font-light text-left mb-8">ABOUT US</h1>
            <h2 className="text-3xl font-light mb-4">Welcome to Tea Troops!</h2>
            <p className="font-light mb-4">
              We are a small business based in Delhi, India. My family roots are from Uttarakhand and we came to Delhi before I was born. The landscape around me had ongoing construction work and busy roads, creating a void. When we visited my uncle in our village, he introduced me to different herbs, helping me develop a taste for them. I value this treasure more than ever. Interestingly, I developed the habit of serving this to friends and family at breakfast. Though I also enjoy milk in my tea sometimes, these herbal cups have helped my family, especially my parents, reduce their daily caffeine intake. That is the beauty of tea, and enjoying it with wonderful company enhances its flavors.
            </p>
          </section>

          <section>
            <p className="font-light mb-4">
              We know that we can&apos;t solve the major issues affecting nature, but I believe every bit counts. We are always searching for sustainable materials for our packaging.
            </p>
            <p className="font-light mb-4">
              While we&apos;re not perfect, we are committed to improving and constantly evolving. It is also essential to ensure our teas are ethically sourced.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-light mb-4">What does Tea Troops mean?</h2>
            <p className="font-light mb-4">
              It represents a troop that loves herbal tea. Beyond its meaning, Tea Troops supports a group of people working in fields to produce fresh, organic, and natural ingredients—something that appears simple but has a complex nature.
            </p>
            <h2 className="text-3xl font-light mb-4">Our Teas</h2>
            <p className="font-light mb-4">
              Yes! It is a permutation and combination with intense study, also driven by our valuable clients who love herbal tea and happily share their experiences. We are building our teas.
            </p>
            <p className="font-light mb-4">
              We all love nature and nature-based ingredients, and Tea Troops brings that to all of you with the help of our Troops.
            </p>
          </section>

          {/* Last image */}
          <div className="text-center">
            <Image
              src="/images/about-us/4.webp"
              alt="Fennel illustration"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Right column (desktop only) */}
        <div className="hidden md:flex flex-col justify-between h-full">
          {/* Top image */}
          <div className="mb-4 flex justify-center">
            <Image
              src="/images/about-us/3.webp"
              alt="Blue flower illustration"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          {/* Bottom image centered */}
          <div className="flex justify-center items-center flex-grow">
            <Image
              src="/images/about-us/1.webp"
              alt="Yellow flower illustration"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}