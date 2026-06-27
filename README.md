# Rajas Wholesale

Production-ready foundation for a static website built with **Next.js (App Router)**, **JavaScript**, and **CSS Modules**.

## Tech Stack

- Next.js (App Router)
- JavaScript (no TypeScript)
- CSS Modules + global CSS architecture
- ESLint
- Responsive, mobile-first design
- SEO-ready metadata utilities

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # App Router pages & layouts
│   ├── layout.js           # Root layout (Header + Main + Footer)
│   ├── page.js             # Home
│   ├── loading.js          # Global loading UI
│   ├── not-found.js        # 404 page
│   ├── about/
│   ├── contact/
│   ├── services/
│   ├── blog/
│   └── privacy-policy/
│
├── components/             # Reusable UI components
│   ├── Layout/             # SiteLayout wrapper
│   ├── Header/             # Sticky header + mobile menu
│   ├── Footer/
│   ├── Navigation/
│   ├── Hero/
│   ├── Sections/           # Container, PageBanner, SectionTitle
│   ├── Buttons/
│   ├── Cards/
│   ├── Forms/
│   └── Common/             # Breadcrumb, ResponsiveImage
│
├── styles/                 # Global CSS architecture
│   ├── variables.css       # Design tokens
│   ├── reset.css
│   ├── utilities.css
│   └── animations.css
│
├── constants/              # Site config, routes, nav links
├── hooks/                  # useScrollLock, useMediaQuery
├── utils/                  # cn(), createMetadata()
└── public/                 # Static assets
    ├── images/
    ├── icons/
    ├── logos/
    └── favicon/
```

## Architecture Notes

### Layout

Every page automatically uses the shared layout via `SiteLayout` in `app/layout.js`:

**Header → Main Content → Footer**

Header and Footer are never duplicated on individual pages.

### Styling

- **Global styles**: Design tokens, reset, utilities, and animations live in `/styles` and are imported via `app/globals.css`.
- **Component styles**: Each component has a co-located `.module.css` file.
- **No CSS frameworks**: Plain CSS only — no Tailwind, Bootstrap, or UI libraries.

### SEO

Use the `createMetadata()` utility from `@/utils/metadata` on each page:

```js
export const metadata = createMetadata({
  title: "Page Title",
  description: "Page description",
  path: "/about",
});
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` for production canonical URLs.

### Responsive Breakpoints

| Breakpoint | Width   |
|------------|---------|
| Small Mobile | < 480px |
| Mobile     | < 768px |
| Tablet     | 768px+  |
| Laptop     | 1024px+ |
| Desktop    | 1280px+ |

## Placeholder Pages

All routes are wired and use the shared layout:

| Route              | Page            |
|--------------------|-----------------|
| `/`                | Home            |
| `/about`           | About           |
| `/services`        | Services        |
| `/blog`            | Blog            |
| `/contact`         | Contact         |
| `/privacy-policy`  | Privacy Policy  |

## Next Steps

This foundation is ready for page content development. Add real copy, images, and sections to each route without changing the core architecture.
