import RevealOnScroll from '@/components/RevealOnScroll'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-4">
              Despre Nebra Cakes
            </h1>
            <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto">
              Transformăm momentele tale speciale în povești delicioase prin torturi și prăjituri artizanale
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <RevealOnScroll>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="/images/about-story.avif"
                  alt="Povestea Nebra Cakes"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay="100">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-4">
                  Povestea Noastră
                </h2>
                <p className="text-gray-700 mb-4">
                  Nebra Cakes s-a născut din pasiunea pentru cofetărie artizanală și dorința de a transforma fiecare eveniment 
                  în ceva memorabil. Începem cu o viziune simplă: torturi și prăjituri care nu doar că arată extraordinar, 
                  ci și au gust excepțional.
                </p>
                <p className="text-gray-700">
                  Fiecare produs este creat manual, cu atenție la detalii și cu ingrediente de cea mai bună calitate, 
                  pentru a te ajuta să creezi momente de neuitat alături de cei dragi.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
              Valori și Principii
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Calitate Superioară',
                description: 'Folosim doar ingrediente premium, selecționate cu grijă pentru a oferi cele mai bune arome și texturi.',
                icon: '⭐',
              },
              {
                title: 'Creativitate',
                description: 'Fiecare comandă este unică. Lucrăm împreună pentru a transforma viziunea ta în realitate.',
                icon: '🎨',
              },
              {
                title: 'Pasiune',
                description: 'Iubim ceea ce facem și asta se vede în fiecare produs creat cu dragoste și dedicare.',
                icon: '❤️',
              },
            ].map((value, index) => (
              <RevealOnScroll key={index} delay={`${index * 100}`}>
                <div className="bg-white p-8 rounded-2xl shadow-md text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary text-center mb-12">
              Echipa Noastră
            </h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-700 text-lg mb-8">
                La Nebra Cakes, suntem o echipă mică, dar pasionată, dedicată cofetăriei artizanale. 
                Fiecare membru al echipei noastre aduce experiența și creativitatea necesare pentru a 
                crea produse excepționale.
              </p>
              <p className="text-gray-700">
                Chiar dacă suntem o cofetărie locală, aspirațiile noastre sunt mari: vrem să fim cea mai 
                bună cofetărie artizanală din București, cunoscută pentru calitate, creativitate și servicii excelente.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Procesul nostru */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-primary font-semibold mb-6">
                Cum Lucrăm
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Procesul <span className="text-accent">Nostru</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-warm rounded-full mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultare', text: 'Discutăm despre gusturile tale și cerințele speciale' },
              { step: '02', title: 'Design', text: 'Cream un design personalizat pentru evenimentul tău' },
              { step: '03', title: 'Preparare', text: 'Folosim ingrediente premium pentru un gust deosebit' },
              { step: '04', title: 'Livrare', text: 'Livrăm cu grija produsul la locația dorită' },
            ].map((item, index) => (
              <RevealOnScroll key={index} delay={`${index * 100}`}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certificări & Premii */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm text-primary font-semibold mb-6">
                Recunoaștere
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Certificări & <span className="text-accent">Premii</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-warm rounded-full mx-auto"></div>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Certificat HACCP', desc: 'Salubritate și siguranță alimentară garantată' },
              { title: 'Deținător de Calitate', desc: 'Premiat pentru excelența în cofetărie artizanală' },
              { title: 'Partener AVOCAD', desc: 'Ingrediente sustenabile și de origine controlată' },
            ].map((item, index) => (
              <RevealOnScroll key={index} delay={`${index * 100}`}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Vrei să lucrezi împreună cu noi?
            </h2>
            <p className="text-xl mb-8">
              Contactează-ne pentru comenzi personalizate sau pentru a discuta despre evenimentul tău
            </p>
            <a
              href="tel:0725857222"
              className="btn-primary bg-accent text-primary inline-block"
              aria-label="Sună acum 0725857222"
            >
              Sună acum — 0725857222
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}

