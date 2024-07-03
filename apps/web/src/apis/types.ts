export interface ICategory {
  name: string
  website: string
  description: string
  explorer: string
  symbol: string
  type: string
  status: string
  projects: Project[]
}

export interface Project {
  name: string
  tag: string[]
  logo: string
  description: string
}