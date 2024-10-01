import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getProduct } from '@/lib/products'
import ProductDetails from '@/components/ProductDetails'

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetails product={product} />
      </Suspense>
    </div>
  )
}