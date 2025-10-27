import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'

// Meta tags default pentru SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://nebra-cakes.ro'),
  title: {
    default: 'Nebra Cakes — Cofetărie Artizanală în București',
    template: '%s | Nebra Cakes',
  },
  description: 'Nebra Cakes — torturi și prăjituri artizanale la comandă în București. Comandă online sau sună: 0725857222. Livrări și design personalizat.',
  keywords: 'torturi, prăjituri, cofetărie, București, comenzi personalizate, deserturi',
  authors: [{ name: 'Nebra Cakes' }],
  creator: 'Nebra Cakes',
  publisher: 'Nebra Cakes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Open Graph pentru rețelele sociale
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://nebra-cakes.ro',
    siteName: 'Nebra Cakes',
    title: 'Nebra Cakes — Cofetărie Artizanală în București',
    description: 'Torturi și prăjituri artizanale la comandă în București',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nebra Cakes',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Nebra Cakes — Cofetărie Artizanală în București',
    description: 'Torturi și prăjituri artizanale la comandă în București',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nebra-cakes.ro',
    languages: {
      'ro-RO': 'https://nebra-cakes.ro',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        {/* JSON-LD pentru LocalBusiness schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Bakery',
              name: 'Nebra Cakes',
              description: 'Cofetărie artizanală specializată în torturi și prăjituri personalizate',
              url: 'https://nebra-cakes.ro',
              telephone: '+40725857222',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Strada Alexandru Papiu-Ilarian 17',
                addressLocality: 'București',
                postalCode: '031691',
                addressCountry: 'RO',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '44.42215060235885',
                longitude: '26.137922276660767',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                  opens: '08:00',
                  closes: '20:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/NEBRAcakes/',
                'https://www.instagram.com/nebra_cakes/',
              ],
              priceRange: '$$',
              servesCuisine: 'Romanian Pastries',
            }),
          }}
        />
        {/* Preconnect pentru Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white">
        <TopBar />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

