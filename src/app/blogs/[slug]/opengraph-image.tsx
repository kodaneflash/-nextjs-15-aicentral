import { ImageResponse } from 'next/og';

import { getPostBySlug } from '@/lib/sanity';

// Image metadata
export const size = {
    width: 1200,
    height: 630
};

export const contentType = 'image/png';

// Image generation
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 64,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontFamily: 'Inter, sans-serif'
                    }}>
                    Post Not Found
                </div>
            ),
            {
                ...size
            }
        );
    }

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    padding: '80px',
                    fontFamily: 'Inter, sans-serif'
                }}>
                {/* Header */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                    <div
                        style={{
                            fontSize: 32,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                        Next.js 15 Starter
                    </div>
                    {post.categories && post.categories[0] && (
                        <div
                            style={{
                                fontSize: 24,
                                color: 'rgba(255, 255, 255, 0.8)',
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                padding: '8px 16px',
                                borderRadius: '20px'
                            }}>
                            {post.categories[0].title}
                        </div>
                    )}
                </div>

                {/* Main Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 'bold',
                            color: 'white',
                            lineHeight: 1.1,
                            marginBottom: '24px',
                            maxWidth: '90%',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                        }}>
                        {post.title}
                    </div>

                    {post.description && (
                        <div
                            style={{
                                fontSize: 32,
                                color: 'rgba(255, 255, 255, 0.9)',
                                lineHeight: 1.3,
                                maxWidth: '90%',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical'
                            }}>
                            {post.description}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px'
                        }}>
                        {post.author && (
                            <div
                                style={{
                                    fontSize: 24,
                                    color: 'rgba(255, 255, 255, 0.8)'
                                }}>
                                By {post.author.name}
                            </div>
                        )}
                        {post.publishedAt && (
                            <div
                                style={{
                                    fontSize: 24,
                                    color: 'rgba(255, 255, 255, 0.6)'
                                }}>
                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        )}
                    </div>

                    {post.tags && post.tags.length > 0 && (
                        <div
                            style={{
                                display: 'flex',
                                gap: '8px',
                                maxWidth: '300px',
                                overflow: 'hidden'
                            }}>
                            {post.tags.slice(0, 3).map((tag, index) => (
                                <div
                                    key={index}
                                    style={{
                                        fontSize: 18,
                                        color: 'white',
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        padding: '6px 12px',
                                        borderRadius: '16px'
                                    }}>
                                    #{tag}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        ),
        {
            ...size
        }
    );
}
