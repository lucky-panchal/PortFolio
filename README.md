# Lacki Lohar — Portfolio

> A minimal, fast, and fully responsive developer portfolio built with React + Vite.

**Live:** [lackilohar.netlify.app](https://lackilohar.netlify.app) &nbsp;·&nbsp; **Contact:** [luckykanti31122006@gmail.com](mailto:luckykanti31122006@gmail.com) &nbsp;·&nbsp; **Schedule:** [cal.com/lucky-panchal-qckdio](https://cal.com/lucky-panchal-qckdio)

---

## Overview

This is my personal developer portfolio — designed from scratch with a focus on clean editorial aesthetics, purposeful motion, and a visitor-first experience. No UI frameworks. No dark mode toggle. No unnecessary complexity. Just well-structured React, hand-written CSS, and scroll-driven animations that feel intentional.

The design philosophy is simple: **clarity over complexity.** Every spacing decision, animation timing, and typographic choice was made with the person reading it in mind.

---

## Design Decisions

### Visual System
The entire interface runs on five color values — black, white, and three shades of gray. No gradients, no color accents competing for attention. Content hierarchy is established through size, weight, and spacing alone.

```css
--color-black   : #0a0a0a;   /* headings, borders, buttons  */
--color-white   : #ffffff;   /* backgrounds                 */
--color-gray-200: #e5e5e5;   /* dividers, card borders      */
--color-gray-400: #a3a3a3;   /* labels, metadata            */
--color-gray-600: #525252;   /* body text, descriptions     */
```

### Typography
Large display headings with bold + italic alternating lines on every section. The contrast between `font-weight: 800` and `font-weight: 300 italic` creates visual rhythm without needing color.

### Layout
Full-width container at `max-width: 1440px` with `4rem` horizontal padding. Sections breathe at `5rem 0`. Nothing feels cramped or over-centered.

### Navigation
- **Desktop** — fixed top navbar with text links, right-aligned CTA button
- **Mobile** — floating bottom bar, icon-only, pill-shaped, always accessible

---

## Animation System

Every animation is scroll-driven and has a specific purpose. Nothing moves just to look clever.

| Animation | Trigger | What it communicates |
|-----------|---------|----------------------|
| Page cover wipe | On load | Arrival — the page reveals itself |
| Text clip reveal | Scroll into view | Importance — headings slide up from behind a mask |
| Inview fade-up | Scroll into view | Sequence — elements appear with staggered delays |
| Section line grow | Scroll into view | Progress — dividers animate 0% → 100% width |
| Image parallax | Scroll position | Depth — images shift at 8% of scroll rate |
| Cursor ring scale | Hover on interactive | Feedback — ring expands 32px → 56px, dot hides |
| Link underline | Hover | Affordance — underline grows left to right |
| Lenis smooth scroll | Always | Feel — momentum-based inertia throughout |

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| — | **Home** | Hero with name, role, profile image, social links, and two CTAs |
| 01 | **Work** | Project cards with category filter tabs and hover overlay with links |
| 02 | **Skills** | Frontend and Backend & Tools — all skills listed with proficiency levels |
| 03 | **Experience** | Accordion cards — B.Tech, AICTE internship, DefenceTech hackathon win |
| 04 | **Qualification** | Education timeline — Higher Secondary to B.Tech |
| 05 | **About** | Stats, bio, personal traits, and CV download |
| 06 | **Testimonials** | Auto-advancing carousel with manual dot navigation |
| 07 | **Connect** | Social platform cards — Instagram, LinkedIn, GitHub |
| 08 | **Contact** | Contact info panel alongside an EmailJS-powered form |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build tool | Vite 5 |
| Styling | CSS3 — hand-written, no UI framework |
| Animations | GSAP, Framer Motion, CSS keyframes |
| Smooth scroll | Lenis |
| Contact form | EmailJS |
| Deployment | Netlify |

### Dependencies

```json
{
  "react": "^18.3.1",
  "@emailjs/browser": "^4.4.1",
  "framer-motion": "^12.4.10",
  "gsap": "^3.x",
  "lenis": "^1.x",
  "react-icons": "^5.4.0"
}
```

---

## Project Structure

```
Portfolio/
├── components/
│   ├── about/              # Stats, bio, traits, CV download
│   ├── contact/            # EmailJS form + contact info panel
│   ├── experience/         # Accordion cards with images and certificates
│   ├── footer/             # Dark minimal footer
│   ├── header/             # Top navbar + mobile bottom bar
│   ├── home/               # Hero section
│   ├── qualification/      # Education timeline
│   ├── scrollup/           # Back to top button
│   ├── skills/             # Skills grid with level badges
│   ├── social/             # Social platform cards
│   ├── testimonials/       # Auto-advancing testimonial carousel
│   └── work/               # Project cards with category filter
│
└── src/
    ├── assets/             # Images, PDFs, certificates
    ├── components/
    │   ├── cursor/         # Custom cursor — dot + ring
    │   ├── scroll3d/       # Scroll animation wrapper
    │   └── ScrollReveal/   # Reveal animation wrapper
    ├── hooks/
    │   ├── useAdvancedObserver.jsx    # IntersectionObserver logic
    │   ├── useSmoothScroll.jsx        # Lenis smooth scroll setup
    │   └── useVisibilityAnimations.jsx
    ├── App.jsx             # Root — observer, parallax, cursor setup
    ├── App.css             # Design tokens + global styles
    ├── main.jsx            # Entry point
    └── index.css           # Base reset
```

---

## Getting Started

**Prerequisites:** Node.js v14+, npm

```bash
# Clone
git clone https://github.com/lucky-panchal/PortFolio.git
cd PortFolio

# Install
npm install

# Development
npm run dev
# → http://localhost:5173

# Production build
npm run build
```

---

## Contact

| | |
|---|---|
| Portfolio | [lackilohar.netlify.app](https://lackilohar.netlify.app) |
| LinkedIn | [lacki-lohar-463a23321](https://linkedin.com/in/lacki-lohar-463a23321) |
| Instagram | [@luckyp4nch4l](https://www.instagram.com/luckyp4nch4l) |
| Email | luckykanti31122006@gmail.com |
| WhatsApp | [+91 7425875484](https://api.whatsapp.com/send?phone=7425875484) |
| Schedule | [cal.com/lucky-panchal-qckdio](https://cal.com/lucky-panchal-qckdio) |

---

*Built by Lacki Lohar — React + Vite · Deployed on Netlify*
