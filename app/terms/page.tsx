export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-4">
            Termeni și Condiții
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <div className="space-y-6 text-gray-700">
            <p className="text-sm text-gray-500">Ultima actualizare: {new Date().getFullYear()}</p>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                1. Informații Generale
              </h2>
              <p>
                Bine ai venit la Nebra Cakes ("noi", "a noastră"). Prin accesarea și utilizarea acestui site, 
                accepti acești termeni și condiții. Dacă nu ești de acord, te rugăm să nu folosești site-ul.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                2. Plasarea Comenzilor
              </h2>
              <p>
                Prin plasarea unei comenzi, îți confirmi că ai 18 ani sau ai consimțământul unui părinte/tutore.
                Toate comenzile sunt supuse disponibilității produselor și confirmării noastre.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                3. Prețuri și Plata
              </h2>
              <p>Toate prețurile sunt exprimate în RON și include TVA (dacă este cazul). Modalitățile de plată acceptate:</p>
              <ul className="list-disc pl-6">
                <li>Numerar la livrare</li>
                <li>Transfer bancar</li>
                <li>Card la livrare (dacă disponibil)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                4. Livrare
              </h2>
              <p>
                Livrarea se efectuează în zonele specificate de Nebra Cakes. Termenii de livrare variază în funcție 
                de complexitatea comenzii. Vom furniza un termen de livrare estimativ la confirmarea comenzii.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                5. Politica de Anulare
              </h2>
              <p>
                Anulările de comenzi trebuie făcute cu cel puțin 48 de ore înainte de data de livrare programată. 
                Pentru anulări care depășesc acest termen, pot apărea costuri parțiale pentru timp și materiale folosite.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                6. Produse Personalizate
              </h2>
              <p>
                Pentru produsele personalizate, ne asigurăm că toate specificațiile sunt clarificate înainte de începerea 
                producției. Schimbările majore după începerea lucrului pot implica costuri suplimentare.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                7. Responsabilitate
              </h2>
              <p>
                Nebra Cakes nu va fi responsabil pentru daune indirecte sau neprevăzute rezultate din utilizarea produselor 
                noastre, cu excepția cazurilor de neglijență gravă sau intenție.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                8. Proprietate Intelectuală
              </h2>
              <p>
                Toate conținutul site-ului, inclusiv texte, imagini, logo-uri, sunt proprietatea Nebra Cakes și sunt 
                protejate de legile drepturilor de autor.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                9. Modificări
              </h2>
              <p>
                Ne rezervăm dreptul de a modifica acești termeni și condiții oricând. Utilizarea continuă a site-ului 
                după modificări constituie acceptarea termenilor actualizați.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                10. Contact
              </h2>
              <p>Pentru întrebări despre acești termeni și condiții, contactează-ne:</p>
              <address className="not-italic mt-4 p-4 bg-gray-50 rounded-lg">
                <strong>Nebra Cakes</strong><br />
                Strada Alexandru Papiu-Ilarian 17<br />
                București 031691<br />
                Telefon: <a href="tel:0725857222" className="text-accent">0725857222</a><br />
                Email: contact@nebra-cakes.ro
              </address>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

