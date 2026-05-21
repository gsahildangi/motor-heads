# Motor-Heads

A React landing site for car enthusiasts — hero slideshow, auto-play background video, and an explore section for future car listings.

## Tech stack

- **React 19** + **Vite 7**
- **React Router** (client-side routes)
- **Tailwind CSS**

## Quick start

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

## Project structure (short)

```
src/
├── Components/     UI pieces (Hero, Background, Navbar, CarsSection)
├── pages/          Route screens (Home, About, Contact)
├── layouts/        Shared layout wrapper
├── hooks/          Reusable logic (auto video, image preload)
├── constants/      Shared asset imports
├── utils/          Small helpers (scroll to cars)
├── App.jsx         Route definitions
└── main.jsx        App entry + BrowserRouter
```

## Routes

| URL        | Page                                      |
|------------|-------------------------------------------|
| `/`        | Home (hero + cars section)                |
| `/explore` | Redirects to home and scrolls to cars     |
| `/about`   | About page                                |
| `/contact` | Contact page                              |

## Deploy (Vercel / Netlify)

1. Push the repo to GitHub.
2. Import the project on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
3. Build command: `npm run build`
4. Output directory: `dist`

SPA routing is already configured:

- `vercel.json` — rewrite all paths to `index.html`
- `public/_redirects` — same for Netlify

## HTTPS on your live link (no certificate setup needed)

You did **not** need to upload a certificate yourself. Hosting platforms like **Vercel**, **Netlify**, **GitHub Pages**, and **Cloudflare Pages** automatically:

1. Terminate HTTPS at their edge servers
2. Issue and renew free **TLS certificates** (usually via **Let’s Encrypt**)
3. Serve your site over `https://` on both default URLs (e.g. `*.vercel.app`) and custom domains once DNS is connected

So when you deploy, HTTPS is enabled by default. You only manage DNS (pointing your domain to the host); SSL is handled for you.

## Performance notes

- Large images and video load **on demand** (video after idle, images per slide).
- See `PROJECT_GUIDE.md` for a full walkthrough of flow, files, and React concepts used in this repo.

## Learn more

Read **[PROJECT_GUIDE.md](./PROJECT_GUIDE.md)** for:

- End-to-end user flow
- What each file does
- Auto-play video and scroll logic explained simply
- React concepts revision (`useRef`, `useCallback`, routes, etc.)
