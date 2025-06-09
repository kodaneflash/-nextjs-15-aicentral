import type { Metadata } from 'next';

import { fetchPosts } from '@/lib/sanity';
import { BlogPost } from '@/types/blog';

import { ArticlesClient } from './ArticlesClient';

export const metadata: Metadata = {
    title: 'Articles',
    description: 'Explore our collection of articles on personal growth, business planning, and more.',
    openGraph: {
        title: 'Articles | Next.js 15 Starter',
        description: 'Explore our collection of articles on personal growth, business planning, and more.'
    }
};

export default async function ArticlesPage() {
    const posts: BlogPost[] = await fetchPosts();

    return (
        <main className='bg-background min-h-screen'>
            <ArticlesClient posts={posts} />
        </main>
    );
}
