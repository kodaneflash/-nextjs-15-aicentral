import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/blogs', '/blogs/*'],
                disallow: ['/studio', '/studio/*', '/api/*', '/_next/*', '/admin', '/admin/*', '/private', '/private/*']
            },
            {
                userAgent: 'GPTBot',
                disallow: ['/']
            },
            {
                userAgent: 'Google-Extended',
                disallow: ['/']
            },
            {
                userAgent: 'CCBot',
                disallow: ['/']
            },
            {
                userAgent: 'anthropic-ai',
                disallow: ['/']
            },
            {
                userAgent: 'Claude-Web',
                disallow: ['/']
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl
    };
}
