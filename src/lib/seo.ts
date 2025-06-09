import { Metadata } from 'next';

import { BlogPost } from '@/types/blog';

// Default SEO configuration
export const DEFAULT_SEO = {
    title: 'Next.js 15 Starter - Modern Web Development',
    description:
        'A modern web development blog powered by Next.js 15, featuring insights, tutorials, and best practices.',
    siteName: 'Next.js 15 Starter',
    twitterHandle: '@yourtwitterhandle',
    author: 'Your Name',
    keywords: ['Next.js', 'React', 'TypeScript', 'Web Development', 'Blog', 'Tutorials']
} as const;

// Generate base URL
export function getBaseUrl(): string {
    return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
}

// Generate canonical URL
export function getCanonicalUrl(path: string): string {
    const baseUrl = getBaseUrl();
    return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

// Generate Open Graph image URL
export function getOgImageUrl(path?: string): string {
    const baseUrl = getBaseUrl();
    if (path) {
        return `${baseUrl}${path}`;
    }
    return `${baseUrl}/og-image.png`;
}

// Generate metadata for blog posts
export function generateBlogPostMetadata(post: BlogPost, slug: string): Metadata {
    const canonicalUrl = getCanonicalUrl(`/blogs/${slug}`);
    const publishedTime = new Date(post.publishedAt).toISOString();
    const modifiedTime = new Date(post._createdAt).toISOString();

    return {
        title: post.title,
        description: post.description || post.excerpt || `Read "${post.title}"`,
        keywords: post.tags || [],
        authors: post.author?.name ? [{ name: post.author.name }] : undefined,
        openGraph: {
            title: post.title,
            description: post.description || post.excerpt || '',
            type: 'article',
            url: canonicalUrl,
            images: post.image
                ? [
                      {
                          url: post.image,
                          width: 1200,
                          height: 630,
                          alt: post.mainImage?.alt || post.title
                      }
                  ]
                : [
                      {
                          url: getOgImageUrl(`/blogs/${slug}/opengraph-image`),
                          width: 1200,
                          height: 630,
                          alt: post.title
                      }
                  ],
            publishedTime,
            modifiedTime,
            authors: post.author?.name ? [post.author.name] : undefined,
            tags: post.tags || [],
            siteName: DEFAULT_SEO.siteName
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description || post.excerpt || '',
            images: post.image ? [post.image] : [getOgImageUrl(`/blogs/${slug}/opengraph-image`)],
            creator: DEFAULT_SEO.twitterHandle
        },
        alternates: {
            canonical: canonicalUrl
        },
        other: {
            'article:published_time': publishedTime,
            'article:modified_time': modifiedTime,
            'article:author': post.author?.name || '',
            'article:section': post.categories?.[0]?.title || 'Technology',
            'article:tag': post.tags?.join(',') || ''
        }
    };
}

// Generate JSON-LD structured data for blog posts
export function generateBlogPostJsonLd(post: BlogPost, slug: string) {
    const baseUrl = getBaseUrl();
    const canonicalUrl = getCanonicalUrl(`/blogs/${slug}`);

    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description || post.excerpt,
        image: post.image ? [post.image] : [],
        datePublished: new Date(post.publishedAt).toISOString(),
        dateModified: new Date(post._createdAt).toISOString(),
        author: {
            '@type': 'Person',
            name: post.author?.name || 'Anonymous',
            image: post.metadata?.avatar
        },
        publisher: {
            '@type': 'Organization',
            name: DEFAULT_SEO.siteName,
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl
        },
        keywords: post.tags?.join(', ') || '',
        articleSection: post.categories?.[0]?.title || 'Technology',
        wordCount: post.content?.split(' ').length || 0,
        url: canonicalUrl,
        isPartOf: {
            '@type': 'Blog',
            '@id': `${baseUrl}/blogs`,
            name: `${DEFAULT_SEO.siteName} Blog`
        }
    };
}

// Generate JSON-LD structured data for the blog listing page
export function generateBlogListingJsonLd(posts: BlogPost[]) {
    const baseUrl = getBaseUrl();

    return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': `${baseUrl}/blogs`,
        name: `${DEFAULT_SEO.siteName} Blog`,
        description: 'Latest articles, tutorials, and insights on modern web development',
        url: `${baseUrl}/blogs`,
        publisher: {
            '@type': 'Organization',
            name: DEFAULT_SEO.siteName,
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.png`
            }
        },
        blogPost: posts.slice(0, 10).map((post) => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description || post.excerpt,
            image: post.image,
            datePublished: new Date(post.publishedAt).toISOString(),
            author: {
                '@type': 'Person',
                name: post.author?.name || 'Anonymous'
            },
            url: `${baseUrl}/blogs/${post.slug}`
        }))
    };
}

// Generate breadcrumb JSON-LD
export function generateBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
    const baseUrl = getBaseUrl();

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
        }))
    };
}

// Truncate text for meta descriptions
export function truncateText(text: string, maxLength: number = 160): string {
    if (text.length <= maxLength) return text;

    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');

    return lastSpace > 0 ? `${truncated.substring(0, lastSpace)}...` : `${truncated}...`;
}

// Extract keywords from text
export function extractKeywords(text: string, maxKeywords: number = 10): string[] {
    const commonWords = new Set([
        'the',
        'a',
        'an',
        'and',
        'or',
        'but',
        'in',
        'on',
        'at',
        'to',
        'for',
        'of',
        'with',
        'by',
        'is',
        'are',
        'was',
        'were',
        'be',
        'been',
        'being',
        'have',
        'has',
        'had',
        'do',
        'does',
        'did',
        'will',
        'would',
        'could',
        'should',
        'may',
        'might',
        'can',
        'this',
        'that',
        'these',
        'those'
    ]);

    const words = text
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter((word) => word.length > 3 && !commonWords.has(word));

    const wordFreq = words.reduce(
        (acc, word) => {
            acc[word] = (acc[word] || 0) + 1;
            return acc;
        },
        {} as Record<string, number>
    );

    return Object.entries(wordFreq)
        .sort(([, a], [, b]) => b - a)
        .slice(0, maxKeywords)
        .map(([word]) => word);
}
