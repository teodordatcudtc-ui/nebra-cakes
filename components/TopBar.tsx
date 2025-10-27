export default function TopBar() {
  return (
    <div className="bg-primary text-white text-xs py-1.5 border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left side - Program */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Luni - Duminică: 08:00 - 20:00</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>București</span>
            </div>
          </div>

          {/* Mobile - Program */}
          <div className="md:hidden text-xs">
            L-D: 08:00-20:00
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-white/70">
              <span className="text-xs">Urmărește-ne:</span>
            </div>
            <a
              href="https://www.facebook.com/NEBRAcakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/nebra_cakes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.38.896.42.42.679.819.896 1.38.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.07 4.85c-.055 1.17-.25 1.805-.415 2.227-.217.562-.478.96-.897 1.38-.42.42-.818.679-1.38.896-.422.164-1.058.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.055-1.806-.249-2.227-.415-.563-.217-.96-.477-1.38-.896-.42-.42-.68-.818-.897-1.38-.165-.422-.359-1.058-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.016-3.585.07-4.85c.055-1.17.249-1.806.415-2.227.216-.562.477-.96.896-1.38.42-.42.817-.679 1.38-.896.42-.166 1.057-.359 2.227-.414C8.408 2.179 8.79 2.165 12 2.165zm0 5.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.406 0 6.163-2.76 6.163-6.162 0-3.405-2.76-6.163-6.163-6.163zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .796-.646 1.442-1.44 1.442-.796 0-1.44-.646-1.44-1.442s.645-1.44 1.44-1.44c.794-.002 1.44.645 1.44 1.44z"/>
              </svg>
            </a>
            <a
              href="tel:0725857222"
              className="hover:text-accent transition-colors md:hidden"
              aria-label="Sună"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

