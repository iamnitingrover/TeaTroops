import { Suspense } from 'react'
import { getProducts } from '@/lib/products'
import ShopContent from '@/components/ShopContent'

export default async function ShopPage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Our Tea Collection
            </h1>
            <Suspense fallback={<div>Loading...</div>}>
              <ShopContent initialProducts={products} />
            </Suspense>
          </div>
        </section>
      </main>
    </div>
  )
}