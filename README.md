# Anup Rai Portfolio Website

A modern personal portfolio built with React and Vite, focused on machine learning, computer vision, and research highlights.

This project presents Anup Rai's profile, projects, education, honors, and contact information in a responsive single-page experience with smooth animations and interactive UI sections.

## Tech Stack

- React 18
- Vite 5
- JavaScript (ES6+)
- CSS3

## Key Features

- Responsive single-page portfolio layout
- Animated hero section with typing tagline effect
- Downloadable CV link
- About section with profile image and skills
- Project showcase cards
- Education timeline and honors/certifications section
- Contact form that opens pre-filled Gmail compose
- Social links (LinkedIn, GitHub, Facebook)
- Loading screen and reveal-on-scroll animations

## Project Structure

```text
.
|- public/
|  |- AnupRai_Resume.pdf
|  |- ProfilePic.png
|- src/
|  |- components/
|  |  |- About.jsx
|  |  |- Certifications.jsx
|  |  |- Contact.jsx
|  |  |- Education.jsx
|  |  |- Footer.jsx
|  |  |- Hero.jsx
|  |  |- Navbar.jsx
|  |  |- Projects.jsx
|  |  |- Skills.jsx
|  |- App.jsx
|  |- global.css
|  |- main.jsx
|- index.html
|- package.json
|- vite.config.js
```

## Local Development

### Prerequisites

- Node.js 18+ recommended
- npm

### Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

## Build and Preview

```bash
npm run build
npm run preview
```

- `npm run build` creates production assets in `dist/`
- `npm run preview` serves the production build locally

## Deployment

This repository is deployment-ready for static hosts such as Cloudflare Pages, Vercel, Netlify, and GitHub Pages.

### Recommended (Free): Cloudflare Pages

Use these build settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

If using a custom domain (including `.com.np`), connect domain DNS to Cloudflare and attach the domain in Pages settings.

## Asset Notes

- CV and profile photo are stored in `public/`
- Static asset links use Vite base-aware paths so they work correctly when hosted
- `dist/` is intentionally ignored by git and should not be committed

## Scripts

- `npm run dev` starts development server
- `npm run build` creates production build
- `npm run preview` previews production build

## Customization Guide

- Update personal intro and text content in component files under `src/components/`
- Update colors, typography, and layout in `src/global.css`
- Replace `public/ProfilePic.png` and `public/AnupRai_Resume.pdf` with your own files while keeping filenames (or update links accordingly)

## Repository Hygiene

This project ignores the following paths and files:

- `node_modules/`
- `dist/`
- `.env`
- `.DS_Store`

## License and Copyright

This project is proprietary and released under a custom all-rights-reserved license.

- See `LICENSE` for full legal terms.
- You may not copy, redistribute, modify, sell, or reuse the code/design/content without prior written permission from the author.

## Content Protection Notes

This site includes basic deterrents in production (for example context menu and copy shortcuts blocking), but no website can be made 100% copy-proof on the public internet. The strongest protection is legal ownership + clear licensing + timestamped repository history.

## Author

Anup Rai

- GitHub: https://github.com/Anup806
- LinkedIn: https://www.linkedin.com/in/anup-rai-095695343/

