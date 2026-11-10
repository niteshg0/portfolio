# Nitesh Kumar Gupta — Portfolio

Personal portfolio of Nitesh Kumar Gupta, Full-Stack Developer & AI Engineer.

**Live:** https://niteshg0.vercel.app

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) · React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) with CSS-variable design tokens
- [next-themes](https://github.com/pacocoursey/next-themes) for light / dark mode
- react-hook-form + zod for the contact form, nodemailer for delivery
- Deployed on [Vercel](https://vercel.com/)

No animation or UI-kit dependencies: scroll reveals are a single
`IntersectionObserver` component and CSS transitions.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx            Root layout, fonts, SEO metadata, JSON-LD
│  ├─ page.tsx              Home page (composes the sections)
│  ├─ projects/page.tsx     /projects
│  ├─ api/contact/route.ts  Contact form endpoint
│  ├─ globals.css           Design tokens + base styles
│  └─ opengraph-image.tsx, icon.svg, sitemap.ts, robots.ts, not-found.tsx
├─ components/
│  ├─ layout/               Header, Footer, theme provider + toggle
│  ├─ sections/             Hero, About, Skills, Experience, Projects, Education, Contact
│  └─ ui/                   Button, Section, Reveal, TechList, BrowserFrame, …
├─ content/                 ← all copy and data lives here
│  ├─ site.ts               Name, links, hero and about text, nav
│  ├─ skills.ts
│  ├─ experience.ts
│  ├─ projects.ts
│  └─ education.ts
└─ lib/                     cn() helper, shared contact schema
```

## Updating content

Everything a visitor reads is in `src/content/`. Components contain no copy.

- **Add a project** — append an object to `projects` in `src/content/projects.ts`
  and drop a screenshot in `public/images/`. Set `featured: true` for the large
  layout.
- **Add a role** — prepend to `experience` in `src/content/experience.ts`.
- **Résumé** — replace `public/resume.pdf`.
- **Colours / type** — edit the tokens at the top of `src/app/globals.css`.

## Local development

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Environment variables

Copy `.env.example` to `.env.local` and fill it in.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and social cards |
| `GMAIL_EMAIL` | Gmail address that sends and receives contact-form mail |
| `GMAIL_APP_PASSWORD` | Google app password for that account |

Without the Gmail variables the site still works; the contact form shows a
fallback asking visitors to email directly.

## Contact

- **Email:** nit947396@gmail.com
- **LinkedIn:** [niteshg0](https://linkedin.com/in/niteshg0)
- **GitHub:** [niteshg0](https://github.com/niteshg0)
