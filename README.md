# Nebra Cakes - Site Comercial

Site comercial profesional pentru cofetărie Nebra Cakes din București. Construit cu Next.js 14, React, și Tailwind CSS.

## 🎨 Design & Culori

- **Verde închis (Primary)**: `#184135`
- **Galben accent (Accent)**: `#ffcb3c`
- **Verde mediu (Secondary)**: `#207e5d`
- **Portocaliu cald (Warm)**: `#ed6a3c`

## 📦 Tehnologii

- **Next.js 14** - Framework React pentru producție
- **React 18** - Biblioteca UI
- **Tailwind CSS** - Stilizare utilitară
- **TypeScript** - Tipare statice
- **Optimizare imagini** - AVIF și WebP support

## 🚀 Instalare și Pornire

### 1. Instalează dependențele

```bash
npm install
```

### 2. Pornește serverul de dezvoltare

```bash
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000) în browser.

### 3. Build pentru producție

```bash
npm run build
npm start
```

## 📁 Structura Proiectului

```
nebra-cakes/
├── app/                      # App Router Next.js
│   ├── layout.tsx           # Layout principal cu Header & Footer
│   ├── page.tsx             # Pagina home
│   ├── produse/             # Pagini produse
│   │   ├── page.tsx         # Lista produse
│   │   └── [slug]/          # Pagini individuale produse
│   ├── comenzi/             # Formular comandă
│   ├── despre/              # Despre Nebra Cakes
│   ├── contact/             # Pagină contact cu hartă
│   ├── politica-confidentialitate/ # GDPR
│   └── terms/               # Termeni și condiții
├── components/               # Componente reutilizabile
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   ├── ProductCard.tsx
│   └── RevealOnScroll.tsx
├── lib/                     # Utilitare și date
│   └── products.ts          # Date produse
├── public/                  # Assets statice
│   └── images/             # Imagini placeholder
├── tailwind.config.js       # Configurare Tailwind
├── next.config.js           # Configurare Next.js
└── package.json             # Dependențe

```

## 🎬 Funcționalități

### Pagini
- ✅ Home - Hero, produse vedetă, valori
- ✅ Produse - Listă cu filtrare pe categorii
- ✅ Pagini produse individuale - Galerie, ingrediente, alergeni
- ✅ Comenzi - Formular comandă complet
- ✅ Despre Noi - Povestea și echipa
- ✅ Contact - Hartă embed, formular
- ✅ Politica de confidențialitate (GDPR)
- ✅ Termeni și condiții

### Animații & Micro-interacțiuni
- ✅ Hero reveal cu clip-path și opacity
- ✅ Hover pe carduri produse (scale + shadow)
- ✅ Butoane CTA cu glow effect
- ✅ Reveal on scroll (IntersectionObserver)
- ✅ Separator SVG curbat animat
- ✅ Success toast pentru formulare

### SEO & Performance
- ✅ Meta tags (title, description, canonical)
- ✅ Open Graph pentru social media
- ✅ Twitter Card tags
- ✅ JSON-LD pentru LocalBusiness (schema.org)
- ✅ Sitemap.xml generat
- ✅ robots.txt configurat
- ✅ Optimizare imagini (AVIF/WebP)
- ✅ Lazy loading
- ✅ Preconnect la Google Fonts

## 📝 Conținut & Date

### Informații Cofetărie
- **Nume**: Nebra Cakes
- **Telefon**: 0725857222
- **Adresă**: Strada Alexandru Papiu-Ilarian 17, București 031691
- **Facebook**: [NEBRAcakes](https://www.facebook.com/NEBRAcakes/)
- **Instagram**: [@nebra_cakes](https://www.instagram.com/nebra_cakes/)

### Categorii Produse
- Torturi
- Prăjituri
- Brownies
- Biscuiți

## 🖼️ Imagini

Site-ul folosește imagini placeholder în folderul `public/images/`. Înlocuiește-le cu imagini reale pentru producție.

**Placeholder-uri create:**
- `cake-hero.avif` - Imagina principală hero
- `tort-clasic.avif`, `tort-harry-potter.avif`, `tort-nunta.avif` - Torturi
- `brownie-fistic.avif` - Brownies
- `cupcakes.avif` - Prăjituri
- `biscuiti.avif` - Biscuiți
- `about-story.avif` - Pentru pagina despre

**Recomandări:**
- Folosește format AVIF sau WebP pentru optimizare
- Dimensiuni recomandate: 1200x800px pentru hero, 800x600px pentru produse
- Compresie: keep file size under 200KB per image

## 🔌 Conectare Backend (Formulare)

### Formular Comenzi & Contact

Formularele actuale doar loghează datele în consolă. Pentru producție, conectează un backend:

### Opțiuni recomandate:

#### 1. SendGrid (Email)
```javascript
// În app/api/comenzi/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const data = await request.json()
  
  await resend.emails.send({
    from: 'contact@nebra-cakes.ro',
    to: 'contact@nebra-cakes.ro',
    subject: 'Comandă nouă',
    html: `<p>Nume: ${data.name}</p><p>Telefon: ${data.phone}</p>...`,
  })
  
  return Response.json({ success: true })
}
```

#### 2. Netlify Functions
Creează `netlify/functions/submit-order.js`

#### 3. Formspree / Formkeep (SaaS)
Înlocuiește `<form>` cu endpoint-ul lor

#### 4. Custom API Route (Next.js)
Creează `app/api/comenzi/route.ts` și trimite către serviciu extern

### Variabile de mediu

Creează `.env.local`:
```env
RESEND_API_KEY=your_key
# sau
SENDGRID_API_KEY=your_key
```

## 📱 Deploy

### Vercel (Recomandat)

1. Conectează GitHub repo cu [Vercel](https://vercel.com)
2. Deploy automat la fiecare push
3. Setează variabile de mediu (pentru API-uri)

```bash
# Instalare Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
npm run build
# Upload folderul .next sau folosește Netlify CLI
```

### Alte platforme

Orice platformă care suportă Node.js: AWS Amplify, Railway, DigitalOcean, etc.

## 🔧 Scripturi Disponibile

```bash
npm run dev      # Pornește development server
npm run build    # Construiește pentru producție
npm run start    # Rulează build-ul
npm run lint     # Verifică cod cu ESLint
```

## 🎯 Checklist Finale

### Înainte de Deploy

- [ ] Înlocuiește imaginile placeholder cu imagini reale
- [ ] Conectează formularele la backend/email service
- [ ] Verifică toate link-urile și numerele de telefon
- [ ] Testează toate formularele
- [ ] Optimizează imagini (< 200KB fiecare)
- [ ] Verifică SEO (title, description, meta tags)
- [ ] Testează pe mobile și desktop
- [ ] Verifică accesibilitate (contrast, aria-labels)
- [ ] Actualizează sitemap.xml cu link-uri finale

### Post-Deploy

- [ ] Submit sitemap la Google Search Console
- [ ] Testare pe dispozitive reale
- [ ] Monitorizare analytics (Google Analytics)
- [ ] Testare formulare în producție

## 📄 Licență

© 2024 Nebra Cakes. Toate drepturile rezervate.

## 📞 Suport

Pentru suport tehnic sau modificări, contactează echipa de dezvoltare.

---

**Gata de producție** ✅

Site-ul este gata de utilizare. Urmează instrucțiunile de mai sus pentru instalare și deploy.

