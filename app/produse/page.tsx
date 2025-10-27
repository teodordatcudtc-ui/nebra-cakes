'use client'

import { useState } from 'react'
import { getAllProducts, getUniqueCategories } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Toate')
  const allProducts = getAllProducts()
  const categories = ['Toate', ...getUniqueCategories()]

  const filteredProducts = selectedCategory === 'Toate'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-4">
              Produsele Noastre
            </h1>
            <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
              Descoperă gama noastră completă de torturi, prăjituri, brownies și biscuiți artizanali
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-accent text-primary shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Nu există produse în această categorie.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <RevealOnScroll key={product.id} delay={`${index * 50}`}>
                  <ProductCard product={product} />
                </RevealOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              Nu găsești ce cauți?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Contactează-ne pentru comenzi personalizate
            </p>
            <a
              href="tel:0725857222"
              className="btn-primary inline-block"
              aria-label="Sună acum la 0725857222"
            >
              Sună — 0725857222
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}

