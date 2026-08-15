export type Project = {
  number: string
  title: string
  tagline: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  features: string[]
  challenge: string
  solution: string
  liveUrl: string
  githubUrl: string
  featured?: boolean
}

export const Wordpressprojects: Project[] = [
  {
    number: '01',
    title: 'LiraStudioYT Mineimator Portfolio',
    tagline: 'Real-time SaaS analytics dashboard',
    description:
      'A modern analytics platform that turns raw product data into clear, actionable insights with live charts and customizable dashboards.',
    longDescription:
      'Nova Analytics is a full-featured analytics dashboard built for product teams who need to understand user behavior at a glance. It aggregates event data from multiple sources, visualizes it through interactive charts, and lets teams build custom views tailored to their metrics. The goal was to make data exploration feel instant and effortless, even across large datasets.',
    image: '/screenshots/hero.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    features: [
      'Real-time data visualization',
      'Customizable dashboards',
      'Authentication & roles',
      'Interactive charts',
      'Dark mode',
      'Responsive design',
    ],
    challenge:
      'Rendering thousands of live data points without janky scrolling or slow interactions, while keeping the interface responsive on lower-end devices.',
    solution:
      'I implemented virtualized lists, memoized chart computations and a debounced streaming layer so the UI stays at 60fps while data updates continuously in the background.',
    liveUrl: 'https://lirastudioyt-mine-imator-portfolio.vercel.app/',
    githubUrl: 'https://github.com/Tygrys11/LiraStudioYT-Mineimator-Portfolio',
    featured: true,
  },
  {
    number: '02',
    title: 'Magic BookStore',
    tagline: 'Headless e-commerce storefront',
    description:
      'A fast, elegant e-commerce experience with a smooth cart flow and a design system that keeps the whole store consistent.',
    longDescription:
      'Aurora Store is a headless commerce frontend designed to feel as smooth as a native app. It focuses on speed, accessible product discovery and a frictionless checkout. Every component is part of a shared design system so new pages stay visually consistent and quick to ship.',
    image: '/screenshots/hero-magicbookstore.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Sass'],
    features: [
      'Product filtering & search',
      'Persistent cart',
      'Optimistic UI updates',
      'Design system',
      'SEO optimized',
      'Responsive design',
    ],
    challenge:
      'Keeping the cart perfectly in sync across tabs and sessions while making every interaction feel instant.',
    solution:
      'I used an optimistic UI layer backed by a synced client store, so updates render immediately and reconcile with the server in the background without blocking the user.',
    liveUrl: 'https://magic-book-store.vercel.app/',
    githubUrl: 'https://github.com/Tygrys11/MagicBookStore',
  },
  {
    number: '03',
    title: 'Magic BookStore',
    tagline: 'Headless e-commerce storefront',
    description:
      'A fast, elegant e-commerce experience with a smooth cart flow and a design system that keeps the whole store consistent.',
    longDescription:
      'Aurora Store is a headless commerce frontend designed to feel as smooth as a native app. It focuses on speed, accessible product discovery and a frictionless checkout. Every component is part of a shared design system so new pages stay visually consistent and quick to ship.',
    image: '/screenshots/hero-magicbookstore.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Sass'],
    features: [
      'Product filtering & search',
      'Persistent cart',
      'Optimistic UI updates',
      'Design system',
      'SEO optimized',
      'Responsive design',
    ],
    challenge:
      'Keeping the cart perfectly in sync across tabs and sessions while making every interaction feel instant.',
    solution:
      'I used an optimistic UI layer backed by a synced client store, so updates render immediately and reconcile with the server in the background without blocking the user.',
    liveUrl: 'https://magic-book-store.vercel.app/',
    githubUrl: 'https://github.com/Tygrys11/MagicBookStore',
  },
]
