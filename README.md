# AfriCyberCore

Marketing website for **AfriCyberCore** — *"Together we protect our future."*
Cybersecurity, business automation, and custom software for African enterprises.

A static, no-build site (HTML + [Tailwind CSS Play CDN](https://tailwindcss.com) + vanilla JS).

## Pages
- `index.html` — Home (video-card hero, floating navbar, logo marquee)
- `about.html` — About
- `services.html` — Services
- `products.html` — Products
- `consulting.html` — Consulting
- `contact.html` — Contact

Shared assets live in `assets/` (`css/`, `js/`, `img/`).

## Deploy on Vercel
This repo is a plain static site, so no configuration is needed:

1. Import the repository into Vercel.
2. **Framework Preset:** Other (static).
3. **Build Command:** none. **Output Directory:** leave as the repo root.
4. Deploy — `index.html` is served as the homepage.

## Local preview
Any static server works, e.g.:

```bash
npx serve .
```

> The brand logo is loaded from `assets/img/logo.png`. Until that file is added,
> the hero shows a styled **AfriCyberCore** text badge as a fallback.
