import { NextResponse } from 'next/server';

import { getPosts } from '@/lib/sanity';

export async function GET() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    try {
        const posts = await getPosts();

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${posts
      .map(
          (post) => `
  <url>
    <loc>${baseUrl}/blogs/${post.slug}</loc>
    <lastmod>${new Date(post.publishedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    ${
        post.image
            ? `
    <image:image>
      <image:loc>${post.image}</image:loc>
      <image:title>${post.title}</image:title>
      <image:caption>${post.mainImage?.alt || post.title}</image:caption>
    </image:image>`
            : ''
    }
    <news:news>
      <news:publication>
        <news:name>Next.js 15 Starter Blog</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(post.publishedAt).toISOString()}</news:publication_date>
      <news:title>${post.title}</news:title>
      ${post.tags && post.tags.length > 0 ? `<news:keywords>${post.tags.join(', ')}</news:keywords>` : ''}
    </news:news>
  </url>`
      )
      .join('')}
</urlset>`;

        return new NextResponse(sitemap, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600, s-maxage=3600'
            }
        });
    } catch (error) {
        console.error('Error generating blog sitemap:', error);
        return new NextResponse('Error generating sitemap', { status: 500 });
    }
}
