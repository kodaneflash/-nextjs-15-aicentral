import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { calculateReadTimeFromPortableText, formatReadTime } from '@/lib/readTime';
import { getPostBySlug, getPosts } from '@/lib/sanity';
import { generateBlogPostJsonLd, generateBlogPostMetadata, generateBreadcrumbJsonLd } from '@/lib/seo';
import { BlogPost } from '@/types/blog';
import { PortableText } from '@portabletext/react';

import dayjs from 'dayjs';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post: BlogPost) => ({
        slug: post.slug
    }));
}

// Enhanced metadata generation using SEO utilities
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.'
        };
    }

    return generateBlogPostMetadata(post, slug);
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const readTimeMinutes = calculateReadTimeFromPortableText(post.body);
    const readTimeFormatted = formatReadTime(readTimeMinutes);

    // Generate structured data using SEO utilities
    const blogPostJsonLd = generateBlogPostJsonLd(post, slug);
    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blogs' },
        { name: post.title, url: `/blogs/${slug}` }
    ]);

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd) }} />
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <article className='container mx-auto max-w-4xl px-4 py-8'>
                {/* Header */}
                <header className='mb-8'>
                    {post.image && (
                        <div className='relative mb-8 h-96 w-full overflow-hidden rounded-lg'>
                            <Image
                                src={post.image}
                                alt={post.mainImage?.alt || post.title}
                                fill
                                className='object-cover'
                                priority
                            />
                        </div>
                    )}

                    <div className='space-y-4'>
                        <h1 className='text-4xl font-bold tracking-tight md:text-5xl'>{post.title}</h1>

                        {post.description && <p className='text-muted-foreground text-xl'>{post.description}</p>}

                        <div className='text-muted-foreground flex items-center space-x-4 text-sm'>
                            {post.author && (
                                <div className='flex items-center space-x-2'>
                                    {post.metadata?.avatar && (
                                        <Image
                                            src={post.metadata.avatar}
                                            alt={post.author.name}
                                            width={32}
                                            height={32}
                                            className='rounded-full'
                                        />
                                    )}
                                    <span>By {post.author.name}</span>
                                </div>
                            )}
                            <span>•</span>
                            <time dateTime={post.date}>{dayjs(post.date).format('MMMM D, YYYY')}</time>
                            <span>•</span>
                            <span>{readTimeFormatted}</span>
                        </div>

                        {post.tags && post.tags.length > 0 && (
                            <div className='flex flex-wrap gap-2'>
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className='bg-secondary text-secondary-foreground inline-block rounded-full px-3 py-1 text-sm'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </header>

                {/* Content */}
                <div className='prose prose-lg max-w-none'>
                    <PortableText
                        value={post.body}
                        components={{
                            types: {
                                image: ({ value }) => (
                                    <div className='relative my-8 h-96 w-full overflow-hidden rounded-lg'>
                                        <Image
                                            src={value.asset.url}
                                            alt={value.alt || ''}
                                            fill
                                            className='object-cover'
                                        />
                                    </div>
                                )
                            },
                            marks: {
                                link: ({ children, value }) => (
                                    <a
                                        href={value.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-primary hover:underline'>
                                        {children}
                                    </a>
                                )
                            }
                        }}
                    />
                </div>
            </article>
        </>
    );
}
