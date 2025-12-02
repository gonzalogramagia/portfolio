type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  youtube?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Entrenar.app',
    description:
      'Web app for UNC students to track workouts with personalized routines and social features. Built with Go, React, and Supabase.',
    link: 'https://entrenar.app/',
    image: '/Entrenar.app.png',
    id: 'project1',
  },
  {
    name: 'Alianza La Libertad Avanza Córdoba',
    description: '',
    link: 'https://www.alianzalalibertadavanzacordoba.com.ar/admin/secure-login/',
    youtube:
      'qX0PC89YqlY',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Catsule Corp',
    title: 'Full Stack Web Developer',
    start: '2024',
    end: '2025',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Stämm Biotech',
    title: 'Help Desk Specialist',
    start: '2023',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Molecule Protocol',
    title: 'Video and Podcast Editor',
    start: '2022',
    end: '2023',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/gonzalogramagia',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/ciberportero',
  },
  {
    label: 'Youtube',
    link: 'https://www.youtube.com/@ciberportero',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gonzalogramagia',
  }
]

export const EMAIL = 'ciberportero@gmail.com'
