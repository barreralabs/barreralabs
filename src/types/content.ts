export type ThemeMode = 'light' | 'dark'
export type Locale = 'en' | 'es'

export interface ResearchItem {
  id: string
  title: string
  slug: string
  description: string
  objectives: string[]
  status: string
  technologies: string[]
  category: string
}

export interface ProjectItem {
  id: string
  name: string
  description: string
  status: string
  technologies: string[]
  category: string
  duration: string
  summary: string
}

export interface ArticleItem {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  image: string
  readTime: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  initials: string
}

export interface StatItem {
  id: string
  value: string
  label: string
}

export interface TestimonialItem {
  id: string
  quote: string
  author: string
  role: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface ContactFormValues {
  name: string
  email: string
  company: string
  subject: string
  message: string
}
