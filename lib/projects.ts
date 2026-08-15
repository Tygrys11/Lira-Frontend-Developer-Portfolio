export type Project = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenge: string;
  solution: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "LiraStudioYT Mineimator Portfolio",
    tagline:
      "Modern portfolio website for a Minecraft animator and YouTube creator",
    description:
      "A modern and animated portfolio website created to showcase Mine-imator animations, YouTube projects, creative work and digital artwork.",
    longDescription:
      "LiraStudioYT Mineimator Portfolio is a personal portfolio website designed for a Minecraft animator and YouTube content creator. The project focuses on presenting visual work in an engaging way while keeping the experience clean and easy to navigate. It includes dedicated sections for showcasing projects, animations, skills and creative work, combined with animated elements, smooth transitions and a responsive layout for different screen sizes.",
    image: "/screenshots/hero.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      "Mine-imator project showcase",
      "YouTube project presentation",
      "Animated sections",
      "Smooth page transitions",
      "Responsive and mobile-friendly design",
      "Reusable React components",
      "Contact form",
    ],
    challenge:
      "The main challenge was creating a portfolio that could present animation and visual content in an interesting way without making the interface feel cluttered. The website also needed to remain responsive and performant despite using animations and visual effects.",
    solution:
      "I built the website around reusable React components and a clear visual hierarchy, giving the creative work the most attention. Framer Motion is used for animations and transitions, while Next.js provides the application structure and performance optimizations. The layout was also designed to adapt to both desktop and mobile screens.",
    liveUrl:
      "https://lirastudioyt-mine-imator-portfolio.vercel.app/",
    githubUrl:
      "https://github.com/Tygrys11/LiraStudioYT-Mineimator-Portfolio",
    featured: true,
  },

  {
    number: "02",
    title: "Magic BookStore",
    tagline:
      "Full-featured online bookstore with authentication, cart and user dashboard",
    description:
      "A modern online bookstore where users can browse books, manage their account, add products to a cart and access their personal dashboard.",
    longDescription:
      "Magic BookStore is a full-featured bookstore application built with Next.js. The project goes beyond a simple book catalog and includes authentication, user registration and login, a personal profile area, shopping cart functionality and a dashboard with different management sections. The application also contains dedicated pages for books, categories, orders, analytics and settings, along with additional pages such as About Us and Contact.",
    image: "/screenshots/hero-magicbookstore.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Clerk",
      "NextAuth",
      "Framer Motion",
    ],
    features: [
      "Book catalog",
      "Book browsing and details",
      "Shopping cart",
      "User registration and login",
      "User profile",
      "Orders management",
      "Categories management",
      "Analytics dashboard",
      "Account settings",
      "Contact and About Us pages",
      "Responsive interface",
    ],
    challenge:
      "The main challenge was combining multiple parts of an online bookstore into one consistent application. The project includes public book pages as well as authentication, user profiles, cart functionality and a larger dashboard with several management sections.",
    solution:
      "I separated the application into dedicated pages and reusable components for the different areas of the store. Authentication and user-related functionality were integrated into the application, while Firebase is used as part of the project's backend setup. The dashboard is divided into focused sections such as books, categories, orders, analytics and settings, making the larger application easier to navigate and maintain.",
    liveUrl:
      "https://magic-book-store.vercel.app/",
    githubUrl:
      "https://github.com/Tygrys11/MagicBookStore",
  },

  {
    number: "03",
    title: "To-Do List",
    tagline:
      "Simple task management application built with React and Vite",
    description:
      "A lightweight To-Do List application created to help users organize everyday tasks and responsibilities through a simple interactive interface.",
    longDescription:
      "To-Do List is my first project built with React and Vite. The application focuses on the basics of creating an interactive task management interface, allowing users to organize their everyday tasks through a simple and focused UI. The project is structured with reusable React components, including separate components for entering tasks and displaying task information.",
    image: "/ToDoList.png",
    technologies: [
      "React",
      "Vite",
      "Ionic React",
      "Ionicons",
    ],
    features: [
      "Task creation",
      "Task management",
      "Task information display",
      "Interactive UI",
      "Reusable React components",
      "Responsive interface",
    ],
    challenge:
      "As my first React and Vite project, the main challenge was learning how to structure a React application and make different components work together to create an interactive task management experience.",
    solution:
      "I split the application into smaller React components, including dedicated components for creating and displaying tasks. Vite provides the development and build setup, while Ionic React and Ionicons are used for interface elements and icons. This project gave me practical experience with React components, application structure and interactive UI development.",
    liveUrl:
      "https://to-do-list-planning.netlify.app/",
    githubUrl:
      "https://github.com/Tygrys11/ToDo-List",
  },
];