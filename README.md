# Nitheesh Gowda — Portfolio (React + Vite)

Frontend-only rebuild of the original Django portfolio. Same design, layout,
content, and interactions — no Python, no Django, no database, no backend.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The build output goes to `dist/`.

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Import the repo in Vercel.
3. Framework preset: **Vite** (auto-detected; `vercel.json` also pins this).
4. No environment variables or backend services are needed.

## Editing your content

Everything you'll want to change — your name, bio, skills, education,
experience, projects, certifications, achievements, contact info, and resume
link — lives in one file:

```
src/data/portfolioData.js
```

Edit the values there; every section reads from this file, so you never need
to touch component/JSX code just to update your info.

To replace your resume, drop a new PDF into `public/resume.pdf` (same file
name), or point `resumeFile` in `portfolioData.js` at a different path/URL.

## Project structure

```
src/
├── components/       # One component per section (Hero, About, Projects, ...)
├── data/
│   └── portfolioData.js   # All editable content lives here
├── hooks/
│   ├── useReveal.js        # Scroll-reveal animation (IntersectionObserver)
│   └── useCountUp.js       # Animated "At a Glance" stat counters
├── App.jsx
├── main.jsx
└── index.css          # Ported design tokens + all original styling
public/
└── resume.pdf
```

## What changed from the Django version

- Django templates/partials → React components, one per section.
- `portfolio/data.py` → `src/data/portfolioData.js` (same structure, same
  fields, just JS instead of Python).
- `{% static %}` asset tags → files served from `public/` (Vite convention).
- Vanilla `main.js` (typewriter, scroll-reveal, count-up stats, project tilt,
  mobile nav, back-to-top) → re-implemented as React hooks/components with
  identical behavior.
- The contact section was already `mailto:`/`tel:` links with no backend
  form in the original, so nothing needed replacing there — no fake API was
  invented.
- No routing library needed: this is still a single-page site navigated by
  anchor links (`#about`, `#projects`, etc.), same as before.
