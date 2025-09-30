Savore Restaurant Project Structure
=================================

```
savore-restaurant/
├── astro.config.mjs              # Astro configuration with Tailwind & sitemap
├── package.json                  # NPM manifest
├── tailwind.config.mjs           # Tailwind CSS config with custom colours
├── public/                       # Publicly served assets
│   ├── images/                   # Place images here (logo, dishes, etc.)
│   └── videos/                   # Place videos here (promotional clips)
└── src/
    ├── components/               # Reusable UI pieces
    │   ├── Navigation.astro
    │   ├── Footer.astro
    │   └── HeroSection.astro
    ├── layouts/                  # Top‑level HTML scaffolding
    │   └── BaseLayout.astro
    ├── pages/                    # Site pages (routed automatically)
    │   ├── index.astro           # Homepage
    │   ├── services.astro        # Services page
    │   ├── about.astro           # About us page
    │   └── contact.astro         # Contact page
    └── styles/
        └── global.css            # Global Tailwind imports
```

After running this script you can start the development server with

```
npm run dev
```

and build the site for production with

```
npm run build
```

