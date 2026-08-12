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

export const projects: Project[] = [
  {
    number: '01',
    title: 'Nova Analytics',
    tagline: 'Real-time SaaS analytics dashboard',
    description:
      'A modern analytics platform that turns raw product data into clear, actionable insights with live charts and customizable dashboards.',
    longDescription:
      'Nova Analytics is a full-featured analytics dashboard built for product teams who need to understand user behavior at a glance. It aggregates event data from multiple sources, visualizes it through interactive charts, and lets teams build custom views tailored to their metrics. The goal was to make data exploration feel instant and effortless, even across large datasets.',
    image: '/project-1.png',
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
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    number: '02',
    title: 'Aurora Store',
    tagline: 'Headless e-commerce storefront',
    description:
      'A fast, elegant e-commerce experience with a smooth cart flow and a design system that keeps the whole store consistent.',
    longDescription:
      'Aurora Store is a headless commerce frontend designed to feel as smooth as a native app. It focuses on speed, accessible product discovery and a frictionless checkout. Every component is part of a shared design system so new pages stay visually consistent and quick to ship.',
    image: '/project-2.png',
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
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    number: '03',
    title: 'Lumen Chat',
    tagline: 'AI-powered conversation interface',
    description:
      'A sleek AI chat application with streaming responses, conversation history and a focus on a calm, distraction-free interface.',
    longDescription:
      'Lumen Chat is an AI assistant interface that makes long conversations feel organized and easy to navigate. It streams responses token by token, groups history intelligently and keeps the reading experience clean. The main goal was to create an interface that stays out of the way and lets the content shine.',
    image: '/project-3.png',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    features: [
      'Streaming responses',
      'Conversation history',
      'Keyboard shortcuts',
      'Markdown rendering',
      'Dark mode',
      'Responsive design',
    ],
    challenge:
      'Rendering streamed markdown smoothly while keeping the scroll position stable and the input always accessible.',
    solution:
      'I built an incremental markdown renderer paired with a scroll anchor system, so streamed text appears fluidly without ever pulling the user away from where they were reading.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    number: '04',
    title: 'Flow Board',
    tagline: 'Collaborative task management',
    description:
      'A drag-and-drop kanban board for teams, built for speed with fluid interactions and thoughtful micro-details.',
    longDescription:
      'Flow Board is a task management tool that helps small teams organize work visually. It centers around a drag-and-drop kanban board with instant updates, filtering and progress tracking. The emphasis was on interaction quality — every drag, drop and reorder should feel physical and satisfying.',
    image: '/project-4.png',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    features: [
      'Drag & drop boards',
      'Progress tracking',
      'Filtering & labels',
      'Keyboard navigation',
      'Animations',
      'Responsive design',
    ],
    challenge:
      'Making drag-and-drop feel natural across both mouse and touch while keeping the board accessible via keyboard.',
    solution:
      'I combined a pointer-based drag layer with spring animations and full keyboard support, so reordering feels smooth for everyone regardless of input device.',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
]
