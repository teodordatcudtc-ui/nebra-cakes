import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Despre */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Despre Nebra Cakes</h3>
            <p className="text-gray-300 text-sm">
              Cofetărie artizanală specializată în torturi și prăjituri personalizate 
              pentru momentele tale speciale.
            </p>
          </div>

          {/* Link-uri rapide */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produse" className="text-gray-300 hover:text-accent transition-colors">
                  Produse
                </Link>
              </li>
              <li>
                <Link href="/despre" className="text-gray-300 hover:text-accent transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/comenzi" className="text-gray-300 hover:text-accent transition-colors">
                  Comenzi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="tel:0725857222" className="hover:text-accent transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  0725857222
                </a>
              </li>
              <li>Strada Alexandru Papiu-Ilarian 17</li>
              <li>București 031691</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Urmărește-ne</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/NEBRAcakes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook Nebra Cakes"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nebra_cakes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram Nebra Cakes"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.38.896.42.42.679.819.896 1.38.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.07 4.85c-.055 1.17-.25 1.805-.415 2.227-.217.562-.478.96-.897 1.38-.42.42-.818.679-1.38.896-.422.164-1.058.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.055-1.806-.249-2.227-.415-.563-.217-.96-.477-1.38-.896-.42-.42-.68-.818-.897-1.38-.165-.422-.359-1.058-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.016-3.585.07-4.85c.055-1.17.249-1.806.415-2.227.216-.562.477-.96.896-1.38.42-.42.817-.679 1.38-.896.42-.166 1.057-.359 2.227-.414C8.408 2.179 8.79 2.165 12 2.165zm0 5.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.406 0 6.163-2.76 6.163-6.162 0-3.405-2.76-6.163-6.163-6.163zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .796-.646 1.442-1.44 1.442-.796 0-1.44-.646-1.44-1.442s.645-1.44 1.44-1.44c.794-.002 1.44.645 1.44 1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Linia de jos */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; {currentYear} Nebra Cakes. Toate drepturile rezervate.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/politica-confidentialitate" className="hover:text-accent transition-colors">
              Politica de Confidențialitate
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Termeni și Condiții
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

