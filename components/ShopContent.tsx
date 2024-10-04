"use client"

import { useState } from 'react'
import { Product } from '@/lib/products'
import ProductCard from './ProductCard'
import ProductFilters from './ProductFilters'

interface ShopContentProps {
  initialProducts: Product[]
}

interface FilterState {
  search: string
  minPrice: number
  maxPrice: number
  benefits: string[]
}

export default function ShopContent({ initialProducts }: ShopContentProps) {
  const [products, setProducts] = useState(initialProducts)

  const filterProducts = (filters: FilterState) => {
    const filtered = initialProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                            product.description.toLowerCase().includes(filters.search.toLowerCase())
      const matchesPrice = Object.values(product.sizes).some(price => 
        price >= filters.minPrice && price <= filters.maxPrice
      )
      const matchesBenefits = filters.benefits.length === 0 || 
                              product.benefits.some(b => filters.benefits.includes(b.name))
      return matchesSearch && matchesPrice && matchesBenefits
    })
    setProducts(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilters products={initialProducts} onFilterChange={filterProducts} />
        </div>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}