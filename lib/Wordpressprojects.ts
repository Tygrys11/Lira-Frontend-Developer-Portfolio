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
    title: 'Dzienny Dom Pomocy Społecznej',
    tagline: 'Custom WordPress website',
    description:
      'A custom WordPress website designed and developed from scratch for a public care institution, based on an original Figma design created in two color variations.',
    longDescription:
      'This was the largest WordPress project I worked on for my employer and a project delivered for an external client. I was responsible for the visual concept and implementation of the website, starting with the design in Figma and preparing two different color variations before moving to development. The website was built without relying on a ready-made theme, giving me full control over the layout, visual hierarchy and responsive presentation of the content.',
    image: '/screenshots/ddps.png',
    technologies: ['WordPress', 'Figma', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Custom visual design',
      'Figma UI design',
      'Two color variations',
      'Custom WordPress implementation',
      'Responsive design',
      'Content-focused layout',
    ],
    challenge:
      'The main challenge was creating a professional, accessible and welcoming website for a public institution while presenting a large amount of information in a clear and easy-to-navigate structure.',
    solution:
      'I designed the interface in Figma first, exploring two different color directions, and then translated the selected design into a custom WordPress implementation. I focused on clear content hierarchy, consistent spacing, responsive layouts and an intuitive navigation structure.',
    liveUrl: 'https://ddpspiotrkow.pl/',
    githubUrl: '',
    featured: true,
  },
  {
    number: '02',
    title: 'Interaktywa - Piotrków Trybunalski',
    tagline: 'WordPress website & visual development',
    description:
      'A WordPress website developed during my internship, where I worked independently on the visual implementation, layout and responsive presentation of the content using an existing theme.',
    longDescription:
      'I worked on the Interaktywa website during my internship, contributing to a real-world project for my employer. The website was built using an existing WordPress theme, while I independently worked on adapting and developing its visual side. My work included page layouts, styling, content presentation and responsive behavior, allowing me to gain practical experience in working with WordPress and adapting an existing theme to project requirements.',
    image: '/screenshots/interaktywa.png',
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'WordPress development',
      'Theme customization',
      'Responsive layouts',
      'Visual customization',
      'Content structure',
      'Mobile optimization',
    ],
    challenge:
      "The main challenge was adapting an existing WordPress theme to the project's requirements while maintaining a consistent visual style and ensuring a good experience across different screen sizes.",
    solution:
      'I independently customized the theme, adjusted layouts and styling, and refined individual sections of the website. I also focused on responsive behavior to ensure that the final result remained clear and usable across desktop, tablet and mobile devices.',
    liveUrl: 'https://interaktywa.pl/',
    githubUrl: '',
  },
  {
    number: '03',
    title: 'BookMed',
    tagline: 'WordPress website concept',
    description:
      'A WordPress website concept developed during my internship to present a solution for making medical appointment booking easier and reducing the need for phone reservations.',
    longDescription:
      'BookMed was a project I worked on during my internship as a concept for a more convenient approach to medical appointment booking. The idea was to present a solution that could reduce the number of appointments handled directly over the phone and make the process more accessible for patients. The website was developed using a WordPress theme, with my work focused on the visual presentation, layout and adaptation of the concept to the website.',
    image: '/screenshots/bookmed.png',
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'WordPress development',
      'Theme customization',
      'Responsive design',
      'Service presentation',
      'Clear user flow',
      'Mobile optimization',
    ],
    challenge:
      'The goal was to present an online booking concept in a simple and understandable way, while showing how digital appointment management could make the process more convenient for patients.',
    solution:
      'I focused on creating a clear visual structure and straightforward user flow, presenting the booking concept in a way that makes the purpose of the service immediately understandable. The website was adapted to work consistently across desktop and mobile devices.',
    liveUrl: 'https://bookmed.com.pl/',
    githubUrl: '',
  },
]