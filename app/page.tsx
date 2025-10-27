import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProducts } from '@/lib/products'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 6)

  return (
    <>
      {/* Hero Section - Compact */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-gradient-to-br from-white via-primary/5 to-secondary/5 overflow-hidden">
        {/* Decorativ - linii curbe */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-4 md:py-8">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center max-w-7xl mx-auto">
            
            {/* Text Content - Left Side */}
            <div className="hero-reveal space-y-4 md:space-y-6 text-center md:text-left">
              {/* Heading */}
              <div className="space-y-2 md:space-y-3">
                <h1 className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight tracking-tight">
                  Torturi <span className="text-accent">artizanale</span><br className="hidden md:block" />care transformă orice moment în sărbătoare
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-accent to-warm rounded-full mx-auto md:mx-0"></div>
              </div>

              {/* Stats - compact */}
              <div className="grid grid-cols-3 gap-2 md:gap-4 py-3 md:py-4 border-y border-gray-200 max-w-md mx-auto md:max-w-none md:mx-0">
                <div>
                  <div className="text-xl md:text-2xl font-display font-bold text-primary">8+</div>
                  <div className="text-xs text-gray-600">Ani</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-display font-bold text-primary">500+</div>
                  <div className="text-xs text-gray-600">Comenzi</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-display font-bold text-primary">100%</div>
                  <div className="text-xs text-gray-600">Natural</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="tel:0725857222"
                  className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-3 group"
                  aria-label="Sună acum la 0725857222"
                >
                  <span>Sună acum</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <Link
                  href="/comenzi"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-semibold text-sm
                           transition-all duration-300 hover:bg-secondary hover:shadow-xl hover:-translate-y-0.5
                           focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 inline-flex items-center gap-2"
                >
                  Comandă
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image placeholder - Hidden on mobile */}
            <div className="hero-reveal animation-delay-300 relative hidden md:block">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-warm/10 to-secondary/20 rounded-3xl blur-xl opacity-50"></div>
                
                <div className="relative h-[350px] md:h-[400px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-warm/20 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 text-accent">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                          <path d="M12 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1zm0 8c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm-6-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium">
                        Adaugă imagine
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carusel Produse Auto-Scroll Horizontal */}
      <section className="py-4 md:py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-2 md:px-4">
          <div className="relative">
            {/* Carusel container */}
            <div className="flex gap-3 md:gap-6 animate-scroll-mobile md:animate-scroll">
              {[...featuredProducts, ...featuredProducts].map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="flex-shrink-0 w-64 md:w-80"
                >
                  <Link href={`/produse/${product.slug}`} className="group block">
                    <div className="bg-white rounded-2xl md:rounded-3xl shadow-md md:shadow-lg hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                      {/* Image */}
                      <div className="relative h-32 md:h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-16 md:w-24 h-16 md:h-24 text-primary/20">
                            <svg fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                              <circle cx="12" cy="12" r="3" opacity="0.5"/>
                              <circle cx="7" cy="7" r="1"/>
                              <circle cx="17" cy="7" r="1"/>
                              <path d="M12 6v2M12 16v2M6 12h2M16 12h2"/>
                            </svg>
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 md:top-4 md:right-4 px-2 py-1 md:px-3 md:py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                          {product.category}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-3 md:p-5">
                        <h3 className="text-base md:text-lg font-display font-bold text-primary mb-1 md:mb-2 group-hover:text-accent transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between pt-2 md:pt-3 border-t border-gray-100">
                          <div>
                            <span className="text-xs text-gray-500">de la</span>
                            <div className="text-lg md:text-xl font-bold text-primary">{product.price} RON</div>
                          </div>
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:translate-x-1 transition-all duration-300">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/produse"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
            >
              Vezi toate produsele
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Secțiune separator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-primary font-semibold mb-6">
                Collecția Noastră
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Delicii <span className="text-accent">Artizanale</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-warm rounded-full mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descoperă gama noastră completă de dulciuri artizanale - torturi, prăjituri, brownies și biscuiți pentru orice moment special
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <RevealOnScroll key={product.id} delay={`${index * 100}`}>
                <Link href={`/produse/${product.slug}`} className="group block">
                  <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2">
                    {/* Image container with gradient overlay */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-32 h-32 text-primary/20">
                          <svg fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                            <circle cx="12" cy="12" r="3" opacity="0.5"/>
                            <circle cx="7" cy="7" r="1"/>
                            <circle cx="17" cy="7" r="1"/>
                            <path d="M12 6v2M12 16v2M6 12h2M16 12h2"/>
                          </svg>
                        </div>
                      </div>
                      {/* Category badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                        {product.category}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* Price and arrow */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-xs text-gray-500">de la</span>
                          <div className="text-2xl font-bold text-primary">{product.price} RON</div>
                        </div>
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:translate-x-1 transition-all duration-300">
                          <svg className="w-5 h-5 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="text-center pt-8 border-t border-gray-200">
              <Link
                href="/produse"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Vezi toate produsele
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* De ce să ne alegi - Design Elegant */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <RevealOnScroll>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-semibold mb-6">
                Valori și Principii
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                De ce <span className="text-accent">Nebra Cakes</span>?
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-warm rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Commitere față de calitate, creativitate și servicii excepționale pentru fiecare client
              </p>
            </div>
          </RevealOnScroll>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4M5 21H3a2 2 0 01-2-2V5a2 2 0 012-2h2m14 0h2a2 2 0 012 2v2M17 21h2a2 2 0 002-2v-2m0-12V3m0 14v2" />
                  </svg>
                ),
                title: 'Ingrediente Premium',
                description: 'Folosim doar cea mai bună calitate pentru a oferi gusturi autentice și delicioase, fără aditivi artificiali.',
                color: 'from-accent/20 to-accent/5',
                iconBg: 'bg-accent/10',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: 'Design Personalizat',
                description: 'Fiecare tort este unic, creat special pentru evenimentul tău cu atenție la detalii și creativitate nelimitată.',
                color: 'from-warm/20 to-warm/5',
                iconBg: 'bg-warm/10',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Livrare Dedicată',
                description: 'Livrăm în toată Bucureștiul cu grija și respect pentru produsele noastre și momentul tău special.',
                color: 'from-secondary/20 to-secondary/5',
                iconBg: 'bg-secondary/10',
              },
            ].map((value, index) => (
              <RevealOnScroll key={index} delay={`${index * 100}`}>
                <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 ${value.iconBg} rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-br ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Pattern lines */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
            
            {/* Center logo/brand */}
            <div className="relative flex items-center justify-center py-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative px-8 bg-white">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8v4M12 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secțiune Testimoniale */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-primary font-semibold mb-6">
                Părerea Clienților
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Ce spun <span className="text-accent">Clienții</span> Noștri
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-warm rounded-full mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria P.',
                text: 'Tortul pentru ziua fiicei mele a fost absolut perfect! Gust incredibil și design exact ca în imagini. În absolut recomand.',
                rating: 5,
              },
              {
                name: 'Alexandru M.',
                text: 'Cea mai bună cofetărie din București! Brownies de vis și livrare promptă. Vom reveni cu siguranță.',
                rating: 5,
              },
              {
                name: 'Elena D.',
                text: 'Pentru nuntă am ales Nebra Cakes și nu am putut face o alegere mai bună. Tort elegant și delicios!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <RevealOnScroll key={index} delay={`${index * 100}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">Client Verificat</div>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Secțiune Galerie/Instagram Feed */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm text-primary font-semibold mb-6">
                Urmărește-ne
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Urmărește <span className="text-accent">Insta</span>gram
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-warm rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vezi cele mai recente creații și momente speciale din cofetăria noastră
              </p>
            </div>
          </RevealOnScroll>

          {/* Instagram Feed Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[...Array(8)].map((_, index) => (
              <RevealOnScroll key={index} delay={`${index * 50}`}>
                <div className="relative aspect-square bg-gradient-to-br from-accent/20 to-warm/20 rounded-2xl overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.38.896.42.42.679.819.896 1.38.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.07 4.85c-.055 1.17-.25 1.805-.415 2.227-.217.562-.478.96-.897 1.38-.42.42-.818.679-1.38.896-.422.164-1.058.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.055-1.806-.249-2.227-.415-.563-.217-.96-.477-1.38-.896-.42-.42-.68-.818-.897-1.38-.165-.422-.359-1.058-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.016-3.585.07-4.85c.055-1.17.249-1.806.415-2.227.216-.562.477-.96.896-1.38.42-.42.817-.679 1.38-.896.42-.166 1.057-.359 2.227-.414C8.408 2.179 8.79 2.165 12 2.165zm0 5.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.406 0 6.163-2.76 6.163-6.162 0-3.405-2.76-6.163-6.163-6.163zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .796-.646 1.442-1.44 1.442-.796 0-1.44-.646-1.44-1.442s.645-1.44 1.44-1.44c.794-.002 1.44.645 1.44 1.44z"/>
                    </svg>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 text-white/30">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="text-center">
              <a
                href="https://www.instagram.com/nebra_cakes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Vezi mai multe pe Instagram
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA final - Premium Design */}
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm text-white font-semibold">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Disponibili pentru Comenzi
              </div>
              
              {/* Heading */}
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                Gata să îți creăm momentul <span className="text-accent">perfect</span>?
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-warm rounded-full mx-auto"></div>
              
              {/* Description */}
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Contactează-ne acum pentru o comandă personalizată și transformă-ți evenimentul într-o experiență memorabilă
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <a
                  href="tel:0725857222"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-primary rounded-xl font-bold text-lg shadow-2xl hover:shadow-accent/50 hover:-translate-y-1 transition-all duration-300 group"
                  aria-label="Sună acum la 0725857222"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Sună — 0725857222
                </a>
                <Link
                  href="/comenzi"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  Comandă Personalizată
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-8 pt-12 text-white/80">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Livrare rapidă</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Ingrediente premium</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Design personalizat</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}

