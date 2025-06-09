# Sanity CMS Setup Guide

This repository has been configured with Sanity CMS as the blog backend. Here's everything you need to know to get started.

## 🚀 Quick Start

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and sign up/log in
2. Create a new project
3. Choose a project name and dataset name (usually "production")
4. Note down your **Project ID** and **Dataset**

### 2. Environment Variables

1. Copy `env.template` to `.env.local`:

    ```bash
    cp env.template .env.local
    ```

2. Fill in your Sanity credentials:
    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
    NEXT_PUBLIC_SANITY_DATASET=production
    ```

### 3. Install Dependencies

All dependencies are already included in package.json:

- `next-sanity` - Sanity client for Next.js
- `sanity` - Sanity Studio
- `@sanity/vision` - GROQ query tool
- `@portabletext/react` - Render rich text content

### 4. Start Development

```bash
# Start Next.js development server
npm run dev

# In another terminal, start Sanity Studio
npm run studio
```

- **Next.js App**: http://localhost:3000
- **Sanity Studio**: http://localhost:3333
- **Embedded Studio**: http://localhost:3000/studio

## 📁 Project Structure

```
src/
├── sanity/
│   ├── client.ts          # Sanity client configuration
│   ├── queries.ts         # GROQ queries
│   └── schemas/           # Content schemas
│       ├── index.ts       # Schema exports
│       ├── post.ts        # Blog post schema
│       ├── author.ts      # Author schema
│       ├── category.ts    # Category schema
│       └── blockContent.ts # Rich text schema
├── types/
│   └── blog.ts           # TypeScript interfaces
├── lib/
│   ├── sanity.ts         # Data fetching functions
│   ├── readTime.ts       # Read time utilities
│   └── utils.ts          # General utilities
├── components/
│   ├── BlogCard.tsx      # Individual blog post card
│   ├── BlogCarousel.tsx  # Server component wrapper
│   └── BlogCarouselClient.tsx # Client carousel component
└── app/
    ├── studio/[[...tool]]/  # Embedded Sanity Studio
    └── blogs/
        ├── page.tsx      # Blog listing page
        └── [slug]/       # Dynamic blog post pages
```

## 🧩 Components Overview

### BlogCard

- **Location**: `src/components/BlogCard.tsx`
- **Purpose**: Renders individual blog post cards
- **Features**:
    - Displays post image, title, excerpt, author, and read time
    - Calculates read time from Portable Text content
    - Maintains original styling from MDX version

### BlogCarousel

- **Location**: `src/components/BlogCarousel.tsx`
- **Purpose**: Server component that fetches blog posts
- **Features**:
    - Fetches posts from Sanity with filtering and limiting
    - Passes data to client carousel component

### BlogCarouselClient

- **Location**: `src/components/BlogCarouselClient.tsx`
- **Purpose**: Client component for carousel functionality
- **Features**:
    - Embla carousel implementation
    - Responsive design with navigation arrows
    - Tag filtering and post limiting

## ⚙️ Data Fetching

### GROQ Queries (`src/sanity/queries.ts`)

- `postsQuery` - Fetch all published posts
- `postBySlugQuery` - Fetch single post by slug
- `postsByTagQuery` - Fetch posts filtered by tag
- `limitedPostsQuery` - Fetch limited number of posts

### Fetch Functions (`src/lib/sanity.ts`)

- `getPosts()` - Get all posts
- `getPostBySlug(slug)` - Get single post
- `getPostsByTag(tag)` - Get posts by tag
- `getLimitedPosts(limit)` - Get limited posts
- `fetchPosts(options)` - Flexible fetching with options

### Example Usage

```typescript
// Server component
import { fetchPosts } from '@/lib/sanity'

export default async function MyPage() {
  // Get latest 5 posts
  const posts = await fetchPosts({ limit: 5 })

  // Get posts by tag
  const techPosts = await fetchPosts({ tag: 'technology' })

  return <BlogCarousel posts={posts} />
}
```

## 📝 Content Schema

### Blog Post Fields

- **title** - Post title (required)
- **slug** - URL slug (required, auto-generated)
- **author** - Reference to author
- **mainImage** - Featured image with alt text
- **categories** - Array of category references
- **tags** - Array of tag strings
- **publishedAt** - Publication date (required)
- **excerpt** - Short description
- **body** - Rich text content (Portable Text)

### Author Fields

- **name** - Author name (required)
- **slug** - URL slug (required)
- **image** - Author photo
- **bio** - Author biography (Portable Text)

## 🔄 End-to-End Flow

1. **Content Creation**: Authors create posts in Sanity Studio
2. **Data Fetching**: Next.js fetches data using GROQ queries
3. **Data Transformation**: Raw Sanity data is transformed to match component interfaces
4. **Rendering**: Components render blog posts with original styling
5. **Read Time Calculation**: Automatically calculated from Portable Text content

## 🎨 Styling

All components maintain their original styling and layout:

- Tailwind CSS classes preserved
- Mobile-first responsive design
- Group hover effects on cards
- Smooth transitions and animations

## 📱 Pages

### Blog Listing (`/blogs`)

- Displays all published blog posts in a grid
- Uses `BlogCard` component for each post
- Includes empty state when no posts exist

### Individual Post (`/blogs/[slug]`)

- Renders full blog post content
- Uses Portable Text for rich content
- Includes SEO metadata generation
- Static generation for all published posts

### Sanity Studio (`/studio`)

- Embedded Sanity Studio for content management
- Accessible at `/studio` route
- Full CMS functionality for managing posts, authors, and categories

## 🚀 Deployment

### Next.js App

Deploy as usual to Vercel, Netlify, or your preferred platform.

### Sanity Studio

```bash
# Build and deploy studio
npm run studio:deploy
```

## 🛠 Development Commands

```bash
# Start Next.js development
npm run dev

# Start standalone Sanity Studio
npm run studio

# Build Sanity Studio
npm run studio:build

# Deploy Sanity Studio
npm run studio:deploy

# Lint and format
npm run lint
npm run format
```

## 🔍 Key Features

✅ **Full Sanity CMS Integration**  
✅ **Server Components with Next.js 15**  
✅ **Original Component Styling Preserved**  
✅ **Automatic Read Time Calculation**  
✅ **SEO-Optimized Blog Pages**  
✅ **Embedded Sanity Studio**  
✅ **Type-Safe with TypeScript**  
✅ **Mobile-First Responsive Design**  
✅ **Static Generation for Performance**

## 📚 Next Steps

1. Set up your Sanity project and add environment variables
2. Start the development servers
3. Create your first blog post in Sanity Studio
4. View your blog posts on the frontend
5. Customize the styling and layout as needed

The blog components will automatically work with your Sanity content without any additional configuration!
