import { Metadata } from 'next';

import { BlogCard } from '@/components/BlogCard';
import { getPosts } from '@/lib/sanity';
import { generateBlogListingJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Blog - Latest Articles & Tutorials',
    description:
        'Explore our comprehensive collection of articles, tutorials, and insights on modern web development, Next.js, React, and cutting-edge technologies.',
    keywords: ['blog', 'articles', 'tutorials', 'web development', 'Next.js', 'React', 'TypeScript'],
    openGraph: {
        title: 'Blog - Latest Articles & Tutorials',
        description:
            'Explore our comprehensive collection of articles, tutorials, and insights on modern web development.',
        type: 'website',
        url: '/blogs',
        images: [
            {
                url: '/og-blog.png',
                width: 1200,
                height: 630,
                alt: 'Blog - Latest Articles & Tutorials'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog - Latest Articles & Tutorials',
        description:
            'Explore our comprehensive collection of articles, tutorials, and insights on modern web development.',
        images: ['/og-blog.png']
    },
    alternates: {
        canonical: '/blogs'
    }
};

export default async function BlogsPage() {
    const posts = await getPosts();

    // Generate structured data
    const blogListingJsonLd = generateBlogListingJsonLd(posts);
    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blogs' }
    ]);

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingJsonLd) }}
            />
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <div className='container mx-auto px-4 py-8'>
                <div className='mb-12 text-center'>
                    <h1 className='mb-4 text-4xl font-bold tracking-tight md:text-5xl'>Blog</h1>
                    <p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
                        Discover insights, tutorials, and stories from our team
                    </p>
                </div>

                {posts.length === 0 ? (
                    <div className='py-12 text-center'>
                        <h2 className='mb-4 text-2xl font-semibold'>No posts yet</h2>
                        <p className='text-muted-foreground'>Check back soon for new content!</p>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {posts.map((post) => (
                            <BlogCard key={post._id} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
