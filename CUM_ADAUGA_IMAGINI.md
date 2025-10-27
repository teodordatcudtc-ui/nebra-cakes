# Cum să Adaugi Imagini Reale - Ghid Rapid

## 🎯 Problema Actuală

Am folosit placeholder-uri pentru imagini (emoji-uri și gradient-uri) până adaugi fișierele reale.

## 📝 Locuri Unde Trebuie Să Schimbi Codul

### 1. Hero Image (pagina principală)

**Fișier:** `app/page.tsx` (liniile 41-54)

**Înlocuiește:**
```tsx
<div className="w-full h-full bg-gradient-to-br from-accent/30 to-warm/30 rounded-2xl shadow-2xl flex items-center justify-center p-8">
  <div className="text-center">
    <div className="text-6xl mb-4">🎂</div>
    <p className="text-gray-600 text-sm">
      Adaugă <code className="text-accent">cake-hero.avif</code><br />
      în folderul public/images/
    </p>
  </div>
</div>
```

**Cu:**
```tsx
<Image
  src="/images/cake-hero.avif"
  alt="Tort artizanal Nebra Cakes"
  fill
  className="object-cover rounded-2xl shadow-2xl"
  priority
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 2. Product Cards

**Fișier:** `components/ProductCard.tsx` (liniile 12-23)

**Înlocuiește:**
```tsx
<div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent/20 to-warm/20 flex items-center justify-center">
  <span className="text-4xl">🍰</span>
  {/* Decomentează când ai imaginile reale: */}
</div>
```

**Cu:**
```tsx
<div className="relative h-64 overflow-hidden">
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-cover transition-transform duration-300 group-hover:scale-105"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
```

Și șterge comentariul despre decomentare.

### 3. Pagină Produs Individual

**Fișier:** `app/produse/[slug]/page.tsx`

Ar trebui să fie deja configurat corect cu `Image` component. Verifică dacă există erori.

### 4. Pagina Despre

**Fișier:** `app/despre/page.tsx`

Verifică dacă există placeholder-uri și înlocuiește-le cu componente `Image` când ai imaginea reală.

## 📁 Fișiere de Adăugat în `public/images/`

```
public/
  images/
    ├── cake-hero.avif          (1200x800px) - Hero principal
    ├── tort-clasic.avif        (800x600px)  - Tort ziua nașterii
    ├── tort-harry-potter.avif  (800x600px)  - Tort Harry Potter
    ├── tort-nunta.avif         (800x600px)  - Tort nuntă
    ├── brownie-fistic.avif     (800x600px)  - Brownie
    ├── cupcakes.avif            (800x600px)  - Cupcakes
    ├── biscuiti.avif            (800x600px) - Biscuiți
    ├── about-story.avif         (1000x600px) - Despre noi
    └── og-image.jpg            (1200x630px) - Social media
```

## 🖼️ Opțiuni de Imagini

### Opțiunea 1: Folosește servicii online temporare
```bash
# Descarcă placeholder-uri temporare
curl -o public/images/cake-hero.jpg https://picsum.photos/1200/800
curl -o public/images/tort-clasic.jpg https://picsum.photos/800/600
```

### Opțiunea 2: Generează imagini placeholder

Folosește servicii online:
- https://picsum.photos/ - Imagini random
- https://placeholder.com/ - Placeholder customizabil

Sau folosește Photoshop/Canva pentru a crea imagini simple.

### Opțiunea 3: Imagini reale (RECOMANDAT pentru producție)

Fotografiază produsele sau folosește imagini profesionale.

## 🎨 Optimizare Imagini

### Folosește imaginile când sunt gata:

1. **Optimizare manuală:**
   - Comprimă cu TinyPNG sau Squoosh
   - Convertă în AVIF pentru mărime minimă
   - Dimensiuni: hero (1200x800px), produse (800x600px)

2. **Next.js optimizare automată:**
   - Next.js va optimiza automat imaginile la `<Image>` component
   - Suport pentru AVIF, WebP, lazy loading

## ✅ Verificare

După ce adaugi imagini:

1. Build proiect: `npm run build`
2. Verifică erori
3. Testează toate paginile
4. Verifică console pentru erori de imagini

## 📊 Dimensiuni Recomandate

| Imagine | Dimensiune | Dimensiune fișier (target) |
|---------|------------|---------------------------|
| Hero | 1200x800px | < 200KB |
| Produse | 800x600px | < 150KB |
| About | 1000x600px | < 180KB |
| OG | 1200x630px | < 300KB |

---

**După adăugarea imaginilor, site-ul va arăta profesional! 🎂✨**

