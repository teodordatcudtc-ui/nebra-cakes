export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary text-center mb-4">
            Politica de Confidențialitate
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
                1. Introducere
              </h2>
              <p>
                Nebra Cakes ("noi", "a noastră") se angajează să respecte confidențialitatea datelor personale 
                ale vizitatorilor și clienților site-ului nostru. Această politică de confidențialitate explică 
                modul în care colectăm, folosim, protejăm și dezvăluim informațiile tale personale.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                2. Datele Colectate
              </h2>
              <p>Colectăm următoarele tipuri de date personale:</p>
              <ul className="list-disc pl-6">
                <li>Nume și informații de contact (telefon, email, adresă)</li>
                <li>Informații despre comenzi (tip produs, dată, cantitate)</li>
                <li>Date de navigare (prin cookie-uri și tehnologii similare)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                3. Modul de Utilizare a Datelor
              </h2>
              <p>Utilizăm datele tale personale pentru:</p>
              <ul className="list-disc pl-6">
                <li>Procesarea și onorarea comenzilor</li>
                <li>Comunicare cu tine privind comenzi și servicii</li>
                <li>Îmbunătățirea experienței tale pe site</li>
                <li>Conformitatea cu cerințele legale</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                4. Securitatea Datelor
              </h2>
              <p>
                Implementăm măsuri tehnice și organizatorice pentru a proteja datele tale personale contra 
                accesului neautorizat, pierderii, distrugerii sau alterării.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                5. Drepturile Tale
              </h2>
              <p>În conformitate cu GDPR, ai următoarele drepturi:</p>
              <ul className="list-disc pl-6">
                <li>Accesul la datele tale personale</li>
                <li>Rectificarea datelor inexacte</li>
                <li>Ștergerea datelor ("dreptul de a fi uitat")</li>
                <li>Limita procesării</li>
                <li>Portabilitatea datelor</li>
                <li>Opoziția procesării</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                6. Cookie-uri
              </h2>
              <p>
                Site-ul folosește cookie-uri pentru a îmbunătăți experiența ta de navigare. 
                Poți gestiona preferințele cookie-urilor din setările browser-ului tău.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                7. Contact
              </h2>
              <p>
                Pentru întrebări despre această politică de confidențialitate sau pentru a exercita drepturile tale, 
                ne poți contacta la:
              </p>
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

