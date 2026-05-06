export interface Project {
  name: string
  description: string
  tags: string[]
  repo: string
  live: string
  featured?: boolean
}

export interface SkillCategory {
  label: string
  color: string
  skills: string[]
}

export interface NavLink {
  label: string
  href: string
}
