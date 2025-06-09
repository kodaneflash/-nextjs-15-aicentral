'use client';

import Image from 'next/image';
import Link from 'next/link';

import { calculateReadTimeFromPortableText, formatReadTime } from '@/lib/readTime';
import { cn } from '@/lib/utils';
import { BlogPost } from '@/types/blog';

import dayjs from 'dayjs';

export function BlogCard({ post }: { post: BlogPost }) {
    // Ensure the image path is correct, use placeholder if not available
    const imagePath = post.image || '/placeholder.svg';

    // Calculate read time based on the Portable Text content
    const readTimeMinutes = calculateReadTimeFromPortableText(post.body);
    const readTimeFormatted = formatReadTime(readTimeMinutes);

    // Get author name from metadata or use a default
    const authorName = post.metadata?.author || 'Guest Author';

    // Get author avatar from metadata or use a default
    const authorAvatar = post.metadata?.avatar || '/images/circleavatar.webp';

    return (
        <div className='group/card w-full sm:max-w-xs md:max-w-sm lg:max-w-md'>
            <Link href={`/blogs/${post.slug}`} className='block'>
                <div
                    className={cn(
                        'card relative mx-auto flex h-96 w-full cursor-pointer flex-col justify-between overflow-hidden rounded-md p-4 shadow-xl sm:h-80 md:h-96',
                        post.image ? 'bg-cover' : 'bg-gray-800'
                    )}
                    style={post.image ? { backgroundImage: `url(${imagePath})` } : {}}>
                    {/* Only use the Image component if we need a fallback */}
                    {!post.image && (
                        <div className='absolute inset-0 z-0 h-full w-full'>
                            <Image
                                src='/placeholder.svg'
                                alt={post.title}
                                fill
                                className='object-cover'
                                priority={false}
                                sizes='(max-width: 768px) 100vw, 30vw'
                            />
                        </div>
                    )}

                    {/* Overlay effect */}
                    <div className='absolute top-0 left-0 h-full w-full opacity-60 transition duration-300 group-hover/card:bg-black'></div>

                    {/* Header section with author avatar and read time */}
                    <div className='z-10 flex flex-row items-center space-x-4'>
                        <Image
                            height={40}
                            width={40}
                            alt='Author Avatar'
                            src={authorAvatar}
                            className='h-10 w-10 rounded-full border-2 border-white object-cover'
                        />
                        <div className='flex flex-col'>
                            <p className='relative z-10 text-base font-normal text-gray-50'>{authorName}</p>
                            <p className='text-sm text-gray-400'>{readTimeFormatted}</p>
                        </div>
                    </div>

                    {/* Content section with title, description and date */}
                    <div className='text content'>
                        <h1 className='relative z-10 line-clamp-2 text-xl font-bold text-gray-50 md:text-2xl'>
                            {post.title}
                        </h1>
                        <p className='relative z-10 my-4 line-clamp-3 text-sm font-normal text-gray-50'>
                            {post.description || 'Read more about this post'}
                        </p>
                        <p className='relative z-10 text-xs text-gray-400'>{dayjs(post.date).format('MMMM D, YYYY')}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
