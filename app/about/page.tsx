import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Tea Troops',
  description: 'Learn about Tea Troops, our story, and our commitment to providing premium organic herbal teas.',
}

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">ABOUT US</h1>
      <div className="space-y-8">
        <section className="flex items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Tea Troops!</h2>
            <p className="mb-4">
              We are a small business based in Delhi, India. My family roots are from Uttarakhand and we came to Delhi before I was born. Landscape around me had in progress construction work and busy roads, so a void always existed. When we visited my uncle in our village, he made me taste different herbs it helped me develop a taste and moreover now I value this treasure more than ever. Interestingly I developed this habit to serve this to friend's n family at breakfast. Though I'm one of those who also sometimes enjoys milk in my tea but these herbal cups have helped my family especially my parents reduce their daily caffeine tea intake. That is the beauty of tea and mind it enjoying tea with wonderful company exaggerates its flavours.
            </p>
          </div>
          <div className="w-1/3 pl-8">
            <Image
              src="/images/about-us/1.webp"
              alt="Blue flower illustration"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </section>

        <section className="flex items-center">
          <div className="w-1/3 pr-8">
            <Image
              src="/images/about-us/2.webp"
              alt="Lavender illustration"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <p className="mb-4">
              We know that we can't solve the issue that affects nature in major way but I believe every bit counts. There is always search of sustainable material for the packaging.
            </p>
            <p className="mb-4">
              While we're not perfect, we are committed to improve and are therefore constantly evolving. It is also very important to make sure our teas are ethically sourced.
            </p>
          </div>
        </section>

        <section className="flex items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">What does Tea Troops mean?</h2>
            <p className="mb-4">
              Troop that loves herbal tea. Tea Troops beyond its meaning it supports group of people that is working in fields to produce fresh, organic and natural ingredient something which appears simple but has a complex nature.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Teas</h2>
            <p className="mb-4">
              Yes! It is Permutation and combination with intense study also running behind our valuable clients who loves herbal tea and happily shares their experiences. We are building our teas.
            </p>
            <p className="mb-4">
              We all love nature and nature based ingredient, and Tea Troops just bring the same for all of you with the help of our Troops.
            </p>
          </div>
          <div className="w-1/3 pl-8">
            <Image
              src="/images/about-us/3.webp"
              alt="Yellow flower illustration"
              width={300}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </section>

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
    </div>
  )
}