# Zokitcha E-Library

A responsive React single-page e-library built with Vite. The UI uses a warm paper palette, editorial typography, subtle Framer Motion animations, and separate reusable components.

## Stack
- React 19 + Vite
- Functional components, props, `useState`, `useMemo`, `useEffect`, and a reusable localStorage hook
- Framer Motion animations
- Lucide React icons
- Plain CSS with responsive breakpoints
- Open Library cover images (internet required for cover art)

## Run locally
Requires Node.js 20.19+ or 22.12+ for current Vite releases.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Folder structure

```text
zokitcha-e-library/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── components/
    │   ├── BookCard.jsx
    │   ├── BookDetailsModal.jsx
    │   ├── BookGrid.jsx
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── Logo.jsx
    │   ├── ReaderModal.jsx
    │   ├── SectionHeading.jsx
    │   └── Sidebar.jsx
    ├── data/books.js
    ├── hooks/useLocalStorage.js
    ├── pages/
    │   ├── BrowsePage.jsx
    │   ├── DiscoverPage.jsx
    │   └── ShelfPage.jsx
    └── styles/global.css
```

## Features
- SPA views: Discover, Explore books, and My bookshelf
- Search by title, author, category, and description
- Category filters and sorting
- Save/remove books with shelf state persisted in localStorage
- Book detail modal with rating, page count, metadata, and quote
- Animated reader preview with page-turn controls and keyboard arrows
- Responsive layout and reduced-motion support

## Notes
This is a frontend-only demonstration. The reader shows sample preview text, not complete digital editions. Cover images are loaded from Open Library. Saved shelf items persist in this browser via localStorage; there is no login or backend.
