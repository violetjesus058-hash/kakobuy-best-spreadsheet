// ============================================================
// UsFans Product Directory Site Configuration
// UsFans - Spreadsheet, Product Links & Buying Research Resource
// ============================================================

export const siteConfig = {

  // ---- Brand ----
  brand: {
    name: 'Kakobuy Spreadsheet',
    tagline: 'Menswear Finds with QC Research',
    description: 'An independent Kakobuy resource for curated menswear finds, QC references, sizing notes and practical buying research.',
    primaryColor: '#8B0000',
    accentColor: '#d4af37',
    logoText: 'Kakobuy Spreadsheet',
  },

  // ---- Navigation ----
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Clothing', link: '/clothes' },
    { text: 'Shoes', link: '/shoes' },
    { text: 'Pants', link: '/pants' },
    { text: 'Hats', link: '/hats' },
    { text: 'Accessories', link: '/accessories' },
    { text: 'Electronics', link: '/electronics' },
    { text: 'Blog', link: '/blog' },
  ],

  // ---- Main Categories ----
  categories: [
    {
      id: 'clothes',
      name: 'USFans Clothing Product Links',
      icon: '',
      description: 'Hoodies, T-shirts, shirts, jackets, dresses and everyday wardrobe guides with direct article paths.',
      blogLink: '/blog/usfans-hoodies/',
      landingLink: '/clothes',
    },
    {
      id: 'shoes',
      name: 'USFans Shoes Product Links',
      icon: '',
      description: 'Sneakers, basketball shoes, running shoes, football shoes, hiking footwear and boots.',
      blogLink: '/blog/usfans-sneakers/',
      landingLink: '/shoes',
    },
    {
      id: 'pants',
      name: 'USFans Pants Product Links',
      icon: '',
      description: 'Jeans, pants, shorts, sweatpants and tracksuits with fit and fabric reading paths.',
      blogLink: '/blog/usfans-pants/',
      landingLink: '/pants',
    },
    {
      id: 'hats',
      name: 'USFans Hats Product Links',
      icon: '',
      description: 'Hats, caps, beanies, bucket hats and fit guides for everyday finishing pieces.',
      blogLink: '/blog/usfans-hats/',
      landingLink: '/hats',
    },
    {
      id: 'accessories',
      name: 'USFans Accessories Product Links',
      icon: '',
      description: 'Bags, belts, jewelry, sunglasses, watches and wallets with direct article paths.',
      blogLink: '/blog/usfans-accessories/',
      landingLink: '/accessories',
    },
    {
      id: 'electronics',
      name: 'USFans Electronics Product Links',
      icon: '',
      description: 'Electronics, phones, iPhone resources, AirPods and tech gadget guides.',
      blogLink: '/blog/usfans-electronics/',
      landingLink: '/electronics',
    },
  ],

  // ---- Featured Categories (Trending) ----
  featuredCategories: [
    { name: 'Sneakers', slug: 'sneakers', image: '/images/hero-sneakers.webp' },
    { name: 'Hoodies', slug: 'hoodies', image: '/images/hero-hoodies.webp' },
    { name: 'T-Shirts', slug: 't-shirts', image: '/images/hero-tshirts.webp' },
    { name: 'Jackets', slug: 'jackets', image: '/images/hero-jackets.webp' },
    { name: 'Pants', slug: 'pants', image: '/images/hero-pants.webp' },
    { name: 'Shirts', slug: 'shirts', image: '/images/hero-shirts.webp' },
    { name: 'Bags', slug: 'bags', image: '/images/hero-bags.webp' },
    { name: 'Watches', slug: 'watches', image: '/images/hero-watches.webp' },
    { name: 'Accessories', slug: 'accessories', image: '/images/hero-accessories.webp' },
    { name: 'Streetwear', slug: 'streetwear', image: '/images/hero-streetwear.webp' },
    { name: 'Casual Wear', slug: 'casual-wear', image: '/images/hero-casual.webp' },
    { name: 'New Arrivals', slug: 'new-arrivals', image: '/images/hero-new-arrivals.webp' },
  ],

  // ---- External Links ----
  links: {
    spreadsheet: 'https://docs.google.com/spreadsheets/d/1PPoujdSt0MiLO6RIVEZUqmi3-UpOoOKZeHt5Jpt6gno/edit?gid=1903531254#gid=1903531254',
    contact: '/blog/usfans-about/',
  },

  // ---- SEO Defaults ----
  seo: {
    hostname: 'https://usfanslinki.com',
    title: 'Kakobuy Spreadsheet 2026 | Menswear Finds & QC Research',
    description: 'Explore the Kakobuy Spreadsheet with curated menswear finds, QC references, category context and practical buying research.',
    keywords: ['kakobuy spreadsheet 2026', 'kakobuy spreadsheet', 'kakobuy menswear finds', 'kakobuy qc references', 'kakobuy buying guide'],
    ga4: 'G-9WJTE8DY0P',
  },

  // ---- Announcement Bar ----
  announcement: 'Explore UsFans product links, QC photo references and category guides for global marketplace research.',
}
