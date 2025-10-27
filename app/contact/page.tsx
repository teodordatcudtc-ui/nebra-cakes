import ContactForm from '@/components/ContactForm'
import RevealOnScroll from '@/components/RevealOnScroll'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-4">
              Contactează-ne
            </h1>
            <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
              Suntem aici pentru tine. Trimite-ne un mesaj sau sună-ne direct!
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <RevealOnScroll>
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-6">
                  Informații de Contact
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Telefon</h3>
                    <a href="tel:0725857222" className="text-gray-700 text-lg hover:text-accent transition-colors">
                      📞 0725857222
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Adresă</h3>
                    <address className="text-gray-700 not-italic">
                      Strada Alexandru Papiu-Ilarian 17<br />
                      București 031691
                    </address>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Program</h3>
                    <p className="text-gray-700">
                      Luni - Duminică: 08:00 - 20:00
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Rețele Sociale</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/NEBRAcakes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary hover:bg-secondary text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Facebook Nebra Cakes"
                      >
                        f
                      </a>
                      <a
                        href="https://www.instagram.com/nebra_cakes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary hover:bg-secondary text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Instagram Nebra Cakes"
                      >
                        📷
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Map */}
            <RevealOnScroll delay="100">
              <div>
                <h2 className="text-2xl font-display font-bold text-primary mb-4">
                  Locația Noastră
                </h2>
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.536765603844!2d26.137922276660767!3d44.42215060235885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff9bdeee15d9%3A0x51ba65fb4e9c0605!2sNebra%20Cakes!5e0!3m2!1sen!2sro!4v1761553680529!5m2!1sen!2sro"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hartă Nebra Cakes"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <RevealOnScroll>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6 text-center">
                Trimite-ne un mesaj
              </h2>
              <ContactForm />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}

