import { PortableTextBlock } from 'sanity'

export interface BlogPost {
  _id: string
  _createdAt: string
  title: string
  slug: string
  publishedAt: string
  date: string // alias for publishedAt for backward compatibility
  excerpt?: string
  description?: string // alias for excerpt for backward compatibility
  mainImage?: {
    asset: {
      url: string
    }
    alt?: string
  }
  image?: string // computed from mainImage for backward compatibility
  author?: {
    name: string
    image?: {
      asset: {
        url: string
      }
    }
  }
  categories?: Array<{
    title: string
  }>
  tags?: string[]
  body: PortableTextBlock[]
  content: string // plain text version for read time calculation
  metadata?: {
    author?: string
    avatar?: string
  }
}

export interface Author {
  _id: string
  name: string
  slug: string
  image?: {
    asset: {
      url: string
    }
    alt?: string
  }
  bio?: PortableTextBlock[]
}

export interface Category {
  _id: string
  title: string
  description?: string
} 