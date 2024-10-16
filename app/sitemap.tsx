import { MetadataRoute } from 'next'
import { getAllProducts } from '@/lib/products'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts()

  const productUrls = products.map((product) => ({
    url: `https://www.teatroops.com/product/${product.slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: 'https://www.teatroops.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.teatroops.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.teatroops.com/shop',
      lastModified: new Date(),
    },
    {
      url: 'https://www.teatroops.com/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://www.teatroops.com/privacy',
      lastModified: new Date(),
    },
    {
      url: 'https://www.teatroops.com/refund',
      lastModified: new Date(),
    },
    {
      url: 'https://www.teatroops.com/shipping',
      lastModified: new Date(),
    },
    {
      url: 'https://www.teatroops.com/terms',
      lastModified: new Date(),
    },
    ...productUrls,
  ]
}