import { notFound } from 'next/navigation'
import { getProductBySlug, getAllProducts } from '@/lib/products'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/RevealOnScroll'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const products = getAllProducts()
  return products.map(product => ({
    slug: product.slug,
  }))
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Acasă</Link>
            {' / '}
            <Link href="/produse" className="hover:text-primary">Produse</Link>
            {' / '}
            <span className="text-primary">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <RevealOnScroll>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>

            {/* Product Info */}
            <RevealOnScroll delay="100">
              <div>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  {product.longDescription}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-accent">
                    de la {product.price} RON
                  </span>
                </div>
                <div className="space-y-4">
                  <a
                    href="tel:0725857222"
                    className="btn-primary inline-block"
                    aria-label="Comandă acum 0725857222"
                  >
                    Comandă acum — 0725857222
                  </a>
                  <Link
                    href="/comenzi"
                    className="block w-full text-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Comandă personalizată
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ingredients */}
            <RevealOnScroll>
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-4">
                  Ingrediente
                </h2>
                <ul className="space-y-2">
                  {product.ingredients?.map((ingredient, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            {/* Allergens */}
            <RevealOnScroll delay="100">
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-4">
                  Alergeni
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.allergens?.map((allergen, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              Îți place acest produs?
            </h2>
            <p className="text-gray-600 mb-8">
              Contactează-ne pentru comenzi personalizate sau alte produse
            </p>
            <a
              href="tel:0725857222"
              className="btn-primary inline-block mr-4"
              aria-label="Sună acum 0725857222"
            >
              Sună — 0725857222
            </a>
            <Link
              href="/produse"
              className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Vezi toate produsele
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}

