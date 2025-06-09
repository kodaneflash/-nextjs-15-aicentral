import { Metadata } from 'next';

import { BlogCard } from '@/components/BlogCard';
import { getPosts } from '@/lib/sanity';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read our latest blog posts and articles'
};

export default async function BlogsPage() {
    const posts = await getPosts();

    return (
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
    );
}
