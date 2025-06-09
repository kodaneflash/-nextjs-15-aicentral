import { groq } from 'next-sanity'

// Query for fetching all blog posts
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        url
      },
      alt
    },
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    categories[]->{
      title
    },
    tags,
    body
  }
`

// Query for fetching a single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        url
      },
      alt
    },
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    categories[]->{
      title
    },
    tags,
    body
  }
`

// Query for fetching posts by tag
export const postsByTagQuery = groq`
  *[_type == "post" && defined(slug.current) && $tag in tags] | order(publishedAt desc) {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        url
      },
      alt
    },
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    categories[]->{
      title
    },
    tags,
    body
  }
`

// Query for fetching limited number of posts
export const limitedPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...$limit] {
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        url
      },
      alt
    },
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    categories[]->{
      title
    },
    tags,
    body
  }
` 