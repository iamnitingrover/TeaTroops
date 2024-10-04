"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { RangeSlider } from "@/components/ui/range-slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Product } from '@/lib/products'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Label } from "@/components/ui/label"

interface ProductFiltersProps {
  products: Product[]
  onFilterChange: (filters: FilterState) => void
}

interface FilterState {
  search: string
  minPrice: number
  maxPrice: number
  benefits: string[]
}

export default function ProductFilters({ products, onFilterChange }: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(true)
  const maxProductPrice = Math.max(...products.flatMap(p => Object.values(p.sizes)))
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    minPrice: 0,
    maxPrice: maxProductPrice,
    benefits: []
  })

  const allBenefits = Array.from(new Set(products.flatMap(p => p.benefits.map(b => b.name))))

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const toggleFilter = () => setIsOpen(!isOpen)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Filters</h2>
        <Button variant="ghost" className="lg:hidden" onClick={toggleFilter}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>
      <div className={`space-y-4 ${isOpen ? 'block' : 'hidden lg:block'}`}>
        <Input
          type="text"
          placeholder="Search teas..."
          value={filters.search}
          onChange={(e) => handleFilterChange({ search: e.target.value })}
        />
        <div>
          <h3 className="text-lg font-medium mb-2">Price Range</h3>
          <div className="flex items-center space-x-2 mb-2">
            <Input
              type="number"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange({ minPrice: Number(e.target.value) })}
              className="w-20"
            />
            <span>to</span>
            <Input
              type="number"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange({ maxPrice: Number(e.target.value) })}
              className="w-20"
            />
          </div>
          <RangeSlider
            min={0}
            max={maxProductPrice}
            step={1}
            value={[filters.minPrice, filters.maxPrice]}
            onValueChange={([min, max]) => handleFilterChange({ minPrice: min, maxPrice: max })}
            className="mt-2"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Benefits</h3>
          {allBenefits.map((benefit) => (
            <div key={benefit} className="flex items-center space-x-2 mb-2">
              <Checkbox
                id={benefit}
                checked={filters.benefits.includes(benefit)}
                onCheckedChange={(checked) => {
                  const newBenefits = checked
                    ? [...filters.benefits, benefit]
                    : filters.benefits.filter(b => b !== benefit)
                  handleFilterChange({ benefits: newBenefits })
                }}
              />
              <Label htmlFor={benefit}>{benefit}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}