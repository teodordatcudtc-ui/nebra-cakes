import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/5">
      <div className="text-center px-4 max-w-md">
        <h1 className="text-8xl font-display font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-display font-bold text-primary mb-4">
          Pagină negăsită
        </h2>
        <p className="text-gray-700 mb-8">
          Ne pare rău, pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <Link
          href="/"
          className="btn-primary inline-block"
        >
          Înapoi la pagina principală
        </Link>
      </div>
    </div>
  )
}

