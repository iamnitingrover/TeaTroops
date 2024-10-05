import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getProduct } from '@/lib/products'
import ProductDetails from '@/components/ProductDetails'
import { Metadata } from 'next'

/**
 * Generates metadata for a product page based on the product slug.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.slug - The slug of the product.
 * @returns {Promise<Metadata>} A promise that resolves to the metadata object.
 *
 * The metadata includes:
 * - `title`: The name of the product.
 * - `description`: A short description of the product.
 * - `openGraph`: An object containing Open Graph metadata:
 *   - `title`: The name of the product.
 *   - `description`: A short description of the product.
 *   - `images`: An array with a single object containing the URL of the product's hero image.
 */
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

/**
 * Renders the product page based on the provided slug.
 * 
 * @param {Object} params - The parameters object.
 * @param {string} params.slug - The slug of the product to fetch.
 * 
 * @returns {JSX.Element} The product page component.
 * 
 * @async
 * @function ProductPage
 * 
 * @throws Will call `notFound` if the product is not found.
 */
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