export interface Product {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  price: string
  image: string
  category: string
  featured?: boolean
  allergens?: string[]
  ingredients?: string[]
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Tort de Ziua Nașterii Clasic',
    slug: 'tort-ziua-nasterii-clasic',
    description: 'Tort elegant cu cremă de ciocolată și fondant decorat personalizat.',
    longDescription: 'Tort perfect pentru ziua de naștere, decorat cu fondant și cremă de ciocolată belgiană. Include figurine personalizate și iluminat opțional.',
    price: '250',
    image: '/images/tort-clasic.avif',
    category: 'Torturi',
    featured: true,
    allergens: ['Gluten', 'Lactoza', 'Ouă'],
    ingredients: ['Făină', 'Zahăr', 'Ouă', 'Smântână', 'Ciocolată belgiană', 'Fondant', 'Coloranți naturali'],
  },
  {
    id: '2',
    name: 'Tort Tematic — Harry Potter',
    slug: 'tort-tematic-harry-potter',
    description: 'Tort tematic cu temă Harry Potter, decorat cu motive magice și culori vibrante.',
    longDescription: 'Tort impresionant cu temă Harry Potter, perfect pentru fani ai seriei. Include figurine, magic wands și decoruri din fondant și glazură.',
    price: '350',
    image: '/images/tort-harry-potter.avif',
    category: 'Torturi',
    featured: true,
    allergens: ['Gluten', 'Lactoza', 'Ouă'],
    ingredients: ['Făină', 'Zahăr', 'Ouă', 'Crema de ciocolată', 'Buttercream', 'Fondant', 'Coloranți comestibili'],
  },
  {
    id: '3',
    name: 'Tort de Nuntă Elegant',
    slug: 'tort-nunta-elegant',
    description: 'Tort de nuntă cu mai multe etaje, decorat cu flori de zahăr și auriu.',
    longDescription: 'Tort de nuntă elegant cu mai multe etaje, decorat cu flori delicate din zahăr, fondant auriu și un design romantic. Disponibil în mai multe arome.',
    price: '450',
    image: '/images/tort-nunta.avif',
    category: 'Torturi',
    featured: true,
    allergens: ['Gluten', 'Lactoza', 'Ouă'],
    ingredients: ['Făină premium', 'Zahăr glazurat', 'Ouă proaspete', 'Crema de vară', 'Buttercream italienesc', 'Fondant auriu', 'Flori comestibile'],
  },
  {
    id: '4',
    name: 'Brownie cu Fistic',
    slug: 'brownie-fistic',
    description: 'Brownie bogat cu ciocolată neagră și fistic crocant, indulgență pură.',
    longDescription: 'Brownie dens și afumat cu ciocolată neagră belgiană (70% cacao), tăiat cu fistic turcesc crocant. Perfect pentru iubitorii de ciocolată.',
    price: '35',
    image: '/images/brownie-fistic.avif',
    category: 'Brownies',
    featured: true,
    allergens: ['Gluten', 'Lactoza', 'Ouă', 'Fistic'],
    ingredients: ['Ciocolată neagră belgiană (70% cacao)', 'Unt', 'Făină', 'Zahăr brun', 'Fistic turcesc', 'Extract de vanilie'],
  },
  {
    id: '5',
    name: 'Mini Prăjituri Cupcakes',
    slug: 'mini-prjituri-cupcakes',
    description: 'Set de 6 cupcakes colorate cu glazură buttercream și topping-uri decorative.',
    longDescription: 'Set de 6 cupcakes delicioase, fiecare cu glazură buttercream colorată și topping-uri decorative. Disponibil în mai multe arome: ciocolată, vanilie, cacao, căpșuni.',
    price: '80',
    image: '/images/cupcakes.avif',
    category: 'Prajituri',
    featured: true,
    allergens: ['Gluten', 'Lactoza', 'Ouă'],
    ingredients: ['Făină', 'Zahăr', 'Ouă', 'Buttercream', 'Coloranți naturali', 'Glazură fondant'],
  },
  {
    id: '6',
    name: 'Biscuiți Școlărițe',
    slug: 'biscuiti-scolare',
    description: 'Biscuiți crocanți în formă de stele, ideal pentru mic dejun sau coffee break.',
    longDescription: 'Biscuiți tradiționali românești, crocanți și aromatizați cu vanilie. Formă de stele, perfect pentru momentele calme sau pentru pachete cadou.',
    price: '25',
    image: '/images/biscuiti.avif',
    category: 'Biscuiți',
    allergens: ['Gluten', 'Lactoza', 'Ouă'],
    ingredients: ['Făină', 'Zahăr pudră', 'Unt', 'Ouă', 'Extract de vanilie', 'Sare'],
  },
  {
    id: '7',
    name: 'Tort cu Ciocolată Belgiană',
    slug: 'tort-ciocolata-belgiana',
    description: 'Tort dens cu ciocolată neagră belgiană 70% cacao și glazură decadentă.',
    longDescription: 'Tort de vis pentru iubitorii de ciocolată - cu ciocolată neagră belgiană 70% cacao, cremă de unt și glazură de ciocolată. Perfect pentru evenimente elegante.',
    price: '380',
    image: '/images/tort-ciocolata.avif',
    category: 'Torturi',
    featured: true,
    allergens: ['Gluten', 'Lactoza', 'Ouă', 'Ciocolată'],
    ingredients: ['Ciocolată neagră belgiană (70%)', 'Crema de unt', 'Smântână', 'Oua', 'Glazură ciocolată'],
  },
  {
    id: '8',
    name: 'Macarons Francezi',
    slug: 'macarons-francezi',
    description: 'Set de 6 macarons în culori variate - cremă de vanilie, pistachio, zmeură.',
    longDescription: 'Macarons francezi autentici cu scoarță crocantă și cremă aromată. Disponibil în mai multe arome: vanilie, pistachio, ciocolată, zmeură, cafea.',
    price: '120',
    image: '/images/macarons.avif',
    category: 'Prajituri',
    featured: true,
    allergens: ['Gluten', 'Lactoza', 'Ouă', 'Fistic', 'Nuci'],
    ingredients: ['Almăndă', 'Zahăr pudră', 'Zăpadă de albuș', 'Arome naturale', 'Coloranți naturali'],
  },
  {
    id: '9',
    name: 'Ecler Classici',
    slug: 'ecler-classici',
    description: 'Ecler crocanți cu cremă de vanilie și glazură de ciocolată.',
    longDescription: 'Ecler tradiționali francezi cu cojă crocantă, cremă de vanilie și glazură de ciocolată. Perfect pentru desert sau coffee break.',
    price: '15',
    image: '/images/ecler.avif',
    category: 'Prajituri',
    featured: true,
    allergens: ['Gluten', 'Lactoza', 'Ouă', 'Ciocolată'],
    ingredients: ['Făină', 'Unt', 'Ouă', 'Crema de vanilie', 'Glazură ciocolată'],
  },
  {
    id: '10',
    name: 'Tiramisu Italian',
    slug: 'tiramisu-italian',
    description: 'Desert clasic italian cu mascarpone, cafea și cacao.',
    longDescription: 'Tiramisu autentic italian cu mascarpone, biscuiți Pavesini, espresso și cacao. Desert elegant și rafinat.',
    price: '45',
    image: '/images/tiramisu.avif',
    category: 'Prajituri',
    featured: true,
    allergens: ['Gluten', 'Lactoza', 'Ouă', 'Cafea'],
    ingredients: ['Mascarpone', 'Biscuiți Pavesini', 'Espresso', 'Cacao', 'Zahăr', 'Ouă'],
  },
]

export function getAllProducts(): Product[] {
  return products
}

export function getFeaturedProducts(): Product[] {
  // Return all products, not just featured
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}

export function getUniqueCategories(): string[] {
  const categories = products.map(product => product.category)
  return [...new Set(categories)]
}

