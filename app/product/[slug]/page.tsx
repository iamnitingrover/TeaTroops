import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getProduct } from '@/lib/products'
import ProductDetails from '@/components/ProductDetails'
import { AlternativeProductDetails } from '@/components/AlternativeProductDetails'

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  // You can toggle this flag to switch between designs
  const useAlternativeDesign = false

  return (
    <div className="min-h-screen" style={{ backgroundColor: product.colorScheme }}>
      <div className="h-[calc(100vh-8rem)]">
        <Suspense fallback={<div>Loading...</div>}>
          {useAlternativeDesign ? (
            <AlternativeProductDetails product={product} />
          ) : (
            <ProductDetails product={product} />
          )}
        </Suspense>
      </div>
    </div>
  )
}