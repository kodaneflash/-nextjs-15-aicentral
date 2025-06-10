import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read our latest blog posts about web development, React, Next.js, and more.'
};

export default function BlogPage() {
    return (
        <div className='container mx-auto px-4 py-16'>
            <div className='mx-auto max-w-4xl'>
                <header className='mb-12 text-center'>
                    <h1 className='mb-4 text-4xl font-bold'>Blog</h1>
                    <p className='text-muted-foreground text-lg'>
                        Insights, tutorials, and thoughts on modern web development
                    </p>
                </header>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {/* Placeholder blog posts */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <article
                            key={i}
                            className='group bg-card cursor-pointer rounded-lg border p-6 shadow-sm transition-all hover:shadow-md'>
                            <div className='bg-muted mb-4 h-48 rounded-lg' />
                            <h2 className='group-hover:text-primary mb-2 text-xl font-semibold'>
                                Sample Blog Post {i + 1}
                            </h2>
                            <p className='text-muted-foreground mb-4'>
                                This is a placeholder for a blog post excerpt. It would contain the first few lines of
                                the actual blog post content.
                            </p>
                            <div className='text-muted-foreground flex items-center justify-between text-sm'>
                                <span>Jan {i + 1}, 2024</span>
                                <span>5 min read</span>
                            </div>
                        </article>
                    ))}
                </div>

                <div className='mt-12 text-center'>
                    <p className='text-muted-foreground'>
                        Looking for more content? Check out our{' '}
                        <Link href='/articles' className='text-primary hover:underline'>
                            articles section
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}
