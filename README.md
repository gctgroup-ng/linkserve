# Linkserve Website

Corporate website for Linkserve, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui-style components, Lucide icons and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
src/
  app/                 layout (fonts, SEO, JSON-LD), page, robots, sitemap, globals.css (theme tokens)
  components/
    ui/button.tsx      shadcn/ui-style Button (cva + Radix Slot)
    sections/          hero, about, solutions, mvno, why, cta
    navbar.tsx  footer.tsx  logo.tsx  section-heading.tsx
    network-graphic.tsx  motion.tsx (Reveal)
  lib/                 site.ts (content/contact config), utils.ts
```

## Customising

- **Contact details, URL, nav links:** `src/lib/site.ts` (email, phone and address are placeholders).
- **Colours:** CSS variables in `src/app/globals.css` (Deep Purple #35105C, Violet #7138C8, Electric Purple #9B6DFF, Off-white #FAF9FC, Lavender #EEE6FA).
- **Logo:** `src/components/logo.tsx` is a placeholder mark; swap in the official asset.
- **More shadcn components:** `components.json` is configured, so `npx shadcn@latest add <component>` works.

## Notes

- Animations respect `prefers-reduced-motion`.
- Includes skip link, semantic landmarks, metadata, Open Graph, JSON-LD, `robots.txt` and `sitemap.xml`.
