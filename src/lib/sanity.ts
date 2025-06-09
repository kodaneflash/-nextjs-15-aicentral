import { client } from '@/sanity/client'
import { postsQuery, postBySlugQuery, postsByTagQuery, limitedPostsQuery } from '@/sanity/queries'
import { BlogPost } from '@/types/blog'
import { portableTextToPlainText } from './readTime'

// Transform Sanity post data to match BlogPost interface
function transformPost(post: any): BlogPost {
  return {
    ...post,
    date: post.publishedAt, // alias for backward compatibility
    description: post.excerpt, // alias for backward compatibility
    image: post.mainImage?.asset?.url, // computed from mainImage
    content: portableTextToPlainText(post.body || []), // plain text for read time
    metadata: {
      author: post.author?.name || 'Guest Author',
      avatar: post.author?.image?.asset?.url || '/images/circleavatar.webp'
    }
  }
}

// Fetch all posts
export async function getPosts(): Promise<BlogPost[]> {
  const posts = await client.fetch(postsQuery)
  return posts.map(transformPost)
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = await client.fetch(postBySlugQuery, { slug } as any)
  return post ? transformPost(post) : null
}

// Fetch posts by tag
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await client.fetch(postsByTagQuery, { tag } as any)
  return posts.map(transformPost)
}

// Fetch limited number of posts
export async function getLimitedPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await client.fetch(limitedPostsQuery, { limit: limit - 1 } as any)
  return posts.map(transformPost)
}

// Hook-like function for fetching posts with options
export interface PostsOptions {
  limit?: number
  tag?: string
}

export async function fetchPosts(options: PostsOptions = {}): Promise<BlogPost[]> {
  const { limit, tag } = options
  
  if (tag) {
    const posts = await getPostsByTag(tag)
    return limit ? posts.slice(0, limit) : posts
  }
  
  if (limit) {
    return getLimitedPosts(limit)
  }
  
  return getPosts()
} 