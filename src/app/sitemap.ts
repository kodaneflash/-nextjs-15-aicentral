import { MetadataRoute } from 'next';

import { getPosts } from '@/lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8
        }
    ];

    // Dynamic blog post routes
    try {
        const posts = await getPosts();

        const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
            url: `${baseUrl}/blogs/${post.slug}`,
            lastModified: new Date(post.publishedAt),
            changeFrequency: 'weekly' as const,
            priority: 0.6
        }));

        return [...staticRoutes, ...blogRoutes];
    } catch (error) {
        console.error('Error generating sitemap:', error);
        // Return static routes only if blog posts fail to load
        return staticRoutes;
    }
}
