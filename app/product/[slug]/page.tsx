import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getProduct } from '@/lib/products'
import ProductDetails from '@/components/ProductDetails'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProduct(params.slug)
  if (!product) {
    return {}
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.images.hero }],
    },
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: product.colorScheme }}>
      <div className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductDetails product={product} />
        </Suspense>
      </div>
    </div>
  )
}