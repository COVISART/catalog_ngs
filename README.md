# COVISART Advanced Technologies - Product Catalog

Official product catalog website for COVISART Advanced Technologies, showcasing the NGS simulator family (NGS-360-3, NGS-5000, NGS-Mini Trainer).

## 🚀 Features

- **React 18 + TypeScript** - Type-safe, modern development
- **Vite** - Fast build tooling and HMR
- **React Router v6** - Dynamic routing with product pages
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first styling
- **Zustand** - Lightweight state management for comparison
- **Dark Mode Default** - Professional defense industry aesthetic
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- **Responsive Design** - Mobile-first approach

## 📦 Tech Stack

- React 18.3.1
- TypeScript 5.6.3
- Vite 6.0.1
- React Router DOM 6.28.0
- Framer Motion 11.15.0
- Tailwind CSS 3.4.15
- Zustand 5.0.2
- Lucide React (Icons)
- **i18next 23.16.8** - Internationalization framework
- **react-i18next 15.1.3** - React bindings for i18next
- **i18next-browser-languagedetector 8.0.2** - Language detection plugin

## 🏢 Brand Identity

- **Company**: COVISART Advanced Technologies
- **Primary Color**: Anthracite Gray `#1b1b1b`
- **Accent Color**: Industrial Yellow `#f4b000`
- **Secondary**: Gunmetal `#2b2b2b`
- **Typography**: Orbitron (headings), Exo 2 (body)
- **Design**: Cinematic, clean, defense-tech inspired

## 🌍 Pages & Routes

1. **Home** (`/`) - Hero section with cinematic design and product previews
2. **Products** (`/products`) - Dynamic grid of all simulators
3. **Product Details** (`/products/:id`) - Detailed specs, features, applications
4. **Interactive Comparison** (`/compare`) - Side-by-side product comparison
5. **Gallery** (`/gallery`) - Media grid with category filters
6. **About** (`/about`) - Company mission, IDEF showcase, compliance badges
7. **Contact** (`/contact`) - Inquiry form with prefilled comparison data

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation with language toggle
│   └── Footer.tsx          # Footer with social links
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── Products.tsx        # Product catalog
│   ├── ProductDetail.tsx   # Individual product pages
│   ├── Compare.tsx         # Product comparison tool
│   ├── Gallery.tsx         # Image gallery
│   ├── About.tsx           # Company information
│   └── Contact.tsx         # Contact form
├── store/
│   └── comparison.ts       # Zustand store for comparison
├── data/
│   └── products.json       # Product data (NGS-360-3, NGS-5000, NGS-Mini)
├── types/
│   └── index.ts            # TypeScript definitions
├── App.tsx                 # Main app with routing
├── main.tsx                # Entry point
└── index.css               # Global styles

public/
├── sitemap.xml             # SEO sitemap
└── assets/                 # Placeholder images
    ├── og/                 # Social media images
    ├── gallery/            # Gallery placeholders
    └── README.md           # Image specifications
```

## 🖼️ Placeholder Images

The project includes placeholders for:

- **Open Graph**: 1200×630 px for social media
- **Twitter Cards**: 1200×600 px
- **LinkedIn**: 1200×627 px
- **Instagram**: 1080×1080 px
- **Product Images**: 1920×1080 px (16:9)
- **Gallery Images**: 1024×768 px (4:3)

See `/public/assets/README.md` for detailed specifications and replacement instructions.

## 🎨 Key Features

### Interactive Product Comparison
- Select any two simulators for side-by-side comparison
- Automated specification table generation
- Export comparison (placeholder for PDF/image export)
- Direct inquiry with compared products

### Dynamic Product Pages
- Tabbed interface (Overview, Specifications, Applications)
- Key features with checkmarks
- "Add to Comparison" functionality
- Download brochure button

### Responsive Gallery
- Category filters (Motion Platforms, Cockpits, Control Systems, etc.)
- Animated grid layout
- Lightbox-ready placeholders

### SEO & Social Media
- Complete meta tags in `index.html`
- Open Graph tags for Facebook/LinkedIn
- Twitter Card support
- Canonical URLs
- Sitemap.xml included

## 🔧 Compliance & Standards

The website showcases compliance with:
- **MIL-STD-2525D** - Military symbology standard
- **APP-6D** - NATO Joint Military Symbology
- **ISO 9001** - Quality management
- **IDEF 2025** - International defense exhibition

## 🌐 Internationalization

The website supports multiple languages with **react-i18next**:

- **Default language**: English (EN)
- **Available languages**: English (EN), Turkish (TR)
- Language switcher in header (desktop and mobile)
- Language preference persists via `localStorage`
- All UI text is fully translated (navigation, pages, forms, buttons)
- SEO meta tags support both languages

### Translation Files

Translation files are located in `/public/locales/{language}/translation.json`:
- `/public/locales/en/translation.json` - English translations
- `/public/locales/tr/translation.json` - Turkish translations

### Adding a New Language

1. Create a new folder in `/public/locales/{language-code}/`
2. Add `translation.json` file with translated content
3. Import the translation in `/src/i18n.ts`:
   ```typescript
   import newLangTranslation from '../public/locales/{language-code}/translation.json';
   ```
4. Add the language to the resources object in `/src/i18n.ts`:
   ```typescript
   resources: {
     en: { translation: enTranslation },
     tr: { translation: trTranslation },
     {language-code}: { translation: newLangTranslation },
   }
   ```
5. Add language toggle button in `/src/components/Header.tsx`

### Translation Keys Structure

- `nav.*` - Navigation menu items
- `home.*` - Home page content
- `products.*` - Products page content
- `productDetail.*` - Product detail page content
- `compare.*` - Comparison page content
- `gallery.*` - Gallery page content
- `about.*` - About page content
- `contact.*` - Contact page content
- `footer.*` - Footer content
- `seo.*` - SEO meta tags for all pages

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile navigation
- Touch-optimized interactions

## 🎯 Product Data

Products are defined in `/src/data/products.json`:

1. **NGS-360-3** - Premium 360° simulator
2. **NGS-5000** - Professional motion platform
3. **NGS-Mini Trainer** - Compact training solution

Each product includes:
- Specifications (12+ technical details)
- Features list
- Application sectors
- Category and description

## 🚢 Deployment

The build output is static HTML/CSS/JS suitable for:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## 📄 License

© 2024 COVISART Advanced Technologies. All rights reserved.

## 🏆 Awards & Recognition

- IFIA Gold Medal Winner
- IDEF 2025 Exhibitor
- ISO 9001 Certified

## 📞 Contact

- **Email**: info@covisart.com.tr
- **Website**: https://www.covisart.com.tr
- **Social**: LinkedIn, YouTube

---

**Note**: This is a professional product catalog built for exhibition and online presence. Replace placeholder images with actual product photos from covisart.com.tr before deployment.
