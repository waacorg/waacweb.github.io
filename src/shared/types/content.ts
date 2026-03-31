export interface NewsPost {
  id: string
  title: string
  date: string
  content: string
  path?: string
  htmlUrl?: string
}

export interface Academician {
  id: string
  name: string
  image?: string
  role: string
  description: string
  institution?: string
}

export interface CollaborationProjectLink {
  title: string
  link: string
  slug: string
}

export interface CollaborationSection {
  category: string
  projects: CollaborationProjectLink[]
}

export interface CollaborationDetail {
  id: string
  title: string
  category: string
  content: string
}

export interface EventItem {
  title: string
  date: string
  location: string
  status: "Upcoming" | "Recent" | "Past"
  description: string
  themes?: string[]
  image?: string
}

