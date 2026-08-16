<div align="center">

# ✦ LIRA ✦

### Frontend Developer Portfolio

**Building modern digital experiences through code & design.**

<br />

<a href="https://github.com/Tygrys11/Lira-Frontend-Developer-Portfolio">
  <img src="https://img.shields.io/badge/VIEW%20SOURCE-18181B?style=for-the-badge&logo=github&logoColor=white" alt="View Source" />
</a>
&nbsp;
<a href="https://lira-frontend-developer-portfolio.vercel.app/">
  <img src="https://img.shields.io/badge/LIVE%20PORTFOLIO-18181B?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Portfolio" />
</a>

<br /><br />

<img src="./public/screenshots/hero.png" alt="Lira Portfolio Preview" width="900" />

</div>

---

<div align="center">

### `DESIGN` · `DEVELOPMENT` · `EXPERIENCE`

</div>

---

## ◈ About Lira

**Lira** is my personal Frontend Developer portfolio — a place where I showcase the projects I build, the technologies I work with and the way I approach modern web development.

Rather than creating a simple collection of links, I wanted the portfolio itself to demonstrate the skills I use when building real products:

* thoughtful UI
* responsive layouts
* reusable components
* smooth interactions
* motion and micro-interactions
* clean project architecture
* attention to detail

The goal was simple:

> **Build a portfolio that is itself a demonstration of my frontend skills.**

---

## ✦ What makes it different

<table>
<tr>
<td width="50%">

### 🎨 Design First

Clean interfaces with a strong focus on typography, spacing, hierarchy and visual consistency.

</td>
<td width="50%">

### ⚡ Motion

Subtle animations and transitions powered by Framer Motion to make the interface feel alive without overwhelming the user.

</td>
</tr>

<tr>
<td width="50%">

### 🧩 Component Driven

Reusable React components keep the application modular and easier to maintain.

</td>
<td width="50%">

### 📱 Responsive

The interface adapts across desktop, laptop, tablet and mobile devices.

</td>
</tr>

<tr>
<td width="50%">

### 🛠️ Real Projects

The portfolio showcases actual projects instead of placeholder concepts.

</td>
<td width="50%">

### 🧠 Continuous Development

The project evolves together with my skills and the technologies I learn.

</td>
</tr>
</table>

---

# ⚙️ Tech Stack

<div align="center">

### Core

<img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />

### Styling & Motion

<img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />

### UI & Tools

<img src="https://img.shields.io/badge/Lucide-000000?style=for-the-badge" />
<img src="https://img.shields.io/badge/Simple_Icons-111111?style=for-the-badge" />
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />

### Analytics

<img src="https://img.shields.io/badge/Vercel_Analytics-000000?style=for-the-badge&logo=vercel&logoColor=white" />

</div>

---

# ✦ Experience the Interface

The portfolio is built around a collection of interactive sections rather than a traditional static resume.

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                         HERO                                │
│                                                             │
│              Introduction & primary actions                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                         ABOUT                               │
│                                                             │
│                 Who I am & how I work                       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    TECHNOLOGIES                             │
│                                                             │
│                 Tools & technical skills                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    SELECTED WORK                            │
│                                                             │
│            Projects → Details → Live Demo                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                       CONTACT                               │
│                                                             │
│                 Let's build something                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

# 🚀 Features

### Navigation

* Responsive navigation
* Smooth scrolling
* Mobile navigation
* Scroll progress indicator

### UI

* Responsive layouts
* Reusable components
* Project cards
* Interactive project modals
* Technology icons
* Responsive typography
* Custom visual elements

### Motion

* Entrance animations
* Staggered animations
* Hover interactions
* Project transitions
* Floating elements
* Scroll-based animations

### Performance

* Next.js Image optimization
* Component-based architecture
* Shared animation configuration
* Production analytics

---

# 🧠 Architecture

One of the goals of this project was to keep the interface modular instead of putting the entire application into a single page.

```text
app/
│
├── layout.tsx
├── page.tsx
└── globals.css

components/
│
├── ui/
│   └── button.tsx
│
├── about.tsx
├── ambient-background.tsx
├── brand-icons.tsx
├── contact.tsx
├── footer.tsx
├── hero.tsx
├── navbar.tsx
│
├── projects.tsx
├── project-card.tsx
├── project-modal.tsx
│
├── skills.tsx
├── tech-stack.tsx
├── section-label.tsx
├── scroll-progress.tsx
│
└── WordPress
    ├── project-card-wordpressP.tsx
    ├── project-modal-wordpressP.tsx
    └── wordpressProjects.tsx

lib/
│
├── motion.ts
└── projects.ts
```

### Why this structure?

The UI is split into focused components so that individual sections can be developed and modified independently.

Project data is separated from the presentation layer, while shared animation variants are centralized inside:

```text
lib/motion.ts
```

This makes animations easier to reuse and keeps individual components cleaner.

---

# ✦ Project Showcase

## 01 / LiraStudioYT

### Mine-imator Portfolio

A dedicated portfolio created for a Minecraft animator and YouTube creator.

**Built with**

`Next.js` · `React` · `TypeScript` · `Tailwind CSS` · `Framer Motion`

**Includes**

* Mine-imator project showcase
* YouTube presentation
* animated sections
* responsive interface
* reusable components
* contact functionality

<div align="center">

<a href="https://lirastudioyt-mine-imator-portfolio.vercel.app/">
  <img src="https://img.shields.io/badge/↗_LIVE_DEMO-000000?style=for-the-badge" />
</a>

<a href="https://github.com/Tygrys11/LiraStudioYT-Mineimator-Portfolio">
  <img src="https://img.shields.io/badge/⌘_SOURCE-000000?style=for-the-badge" />
</a>

</div>

---

## 02 / Magic BookStore

### Online Bookstore

A larger application currently under active development.

The project explores a more complex application structure with authentication, user accounts, shopping functionality and an administration dashboard.

**Built with**

`Next.js` · `React` · `TypeScript` · `Tailwind CSS` · `Firebase` · `Clerk` · `NextAuth` · `Framer Motion`

**Includes**

* Book catalogue
* Book details
* Shopping cart
* Authentication
* User profiles
* Orders
* Category management
* Analytics dashboard
* Account settings
* Responsive UI

<div align="center">

<img src="./public/screenshots/hero-magicbookstore.png" alt="Magic BookStore" width="800" />

<br /><br />

<a href="https://magic-book-store.vercel.app/">
  <img src="https://img.shields.io/badge/↗_LIVE_DEMO-000000?style=for-the-badge" />
</a>

<a href="https://github.com/Tygrys11/MagicBookStore">
  <img src="https://img.shields.io/badge/⌘_SOURCE-000000?style=for-the-badge" />
</a>

<br />

`🚧 WORK IN PROGRESS`

</div>

---

## 03 / To-Do List

### Task Management Application

My first project built with React and Vite.

A lightweight application created to practice component architecture, state management and interactive UI development.

**Built with**

`React` · `Vite` · `Ionic React` · `Ionicons`

**Includes**

* Task creation
* Task management
* Interactive interface
* Reusable components
* Responsive layout

<div align="center">

<a href="https://to-do-list-planning.netlify.app/">
  <img src="https://img.shields.io/badge/↗_LIVE_DEMO-000000?style=for-the-badge" />
</a>

<a href="https://github.com/Tygrys11/ToDo-List">
  <img src="https://img.shields.io/badge/⌘_SOURCE-000000?style=for-the-badge" />
</a>

</div>

---

# 🎞️ Motion & Interaction

Motion is an important part of the visual identity of Lira.

Instead of adding animations everywhere, the project uses smaller interactions to guide attention and improve the feeling of the interface.

Examples include:

```text
Page Load
    ↓
Section Entrance
    ↓
Staggered Content
    ↓
Hover Interaction
    ↓
Project Transition
    ↓
Scroll Animation
```

Animation configuration is shared through:

```text
lib/motion.ts
```

This allows animation behaviour to remain consistent across different sections.

---

# 📱 Responsive by Design

The interface was designed around different screen sizes from the beginning.

<div align="center">

|    Device   |        Experience       |
| :---------: | :---------------------: |
| 🖥️ Desktop |       Full layout       |
|  💻 Laptop  |     Adaptive layout     |
|  📟 Tablet  |  Responsive components  |
|  📱 Mobile  | Mobile-first navigation |

</div>

The layout uses Tailwind CSS breakpoints and adaptive component structures rather than separate desktop/mobile pages.

---

# 📸 Screenshots

<div align="center">

### Desktop

<img src="./public/screenshots/hero.png" alt="Lira Desktop Preview" width="900" />

<br /><br />

### Magic BookStore

<img src="./public/screenshots/hero-magicbookstore.png" alt="Magic BookStore Preview" width="900" />

<br /><br />

### To-Do List

<img src="./public/screenshots/ToDoList.png" alt="To-Do List Preview" width="900" />

</div>

---

# 📊 Project Status

<div align="center">

### 🟢 Active Development

The portfolio is continuously evolving.

New projects, improvements, animations and technologies will be added over time.

</div>

---

# 👨‍💻 About Me

I'm a Frontend Developer focused on creating modern, responsive and engaging web experiences.

My main focus is building interfaces with:

**React · Next.js · TypeScript · Tailwind CSS**

I enjoy combining development and design to create products that are both technically solid and visually polished.

I'm constantly learning, experimenting and building new projects.

---

# 🤝 Let's Work Together

Have an idea for a website or application?

I'm open to:

`Freelance Projects` · `Frontend Development` · `Collaborations` · `Creative Web Projects`

Feel free to reach out through my portfolio.

---

<div align="center">

## ✦ Lira ✦

**Code. Design. Experience.**

<br />

<img src="https://komarev.com/ghpvc/?username=Tygrys11&label=Portfolio%20Views&color=000000&style=flat" alt="Portfolio Views" />

<br /><br />

<a href="https://github.com/Tygrys11">
  <img src="https://img.shields.io/badge/GitHub-Tygrys11-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>

<br /><br />

<sub>Built with Next.js, React, TypeScript & a lot of ☕</sub>

</div>
