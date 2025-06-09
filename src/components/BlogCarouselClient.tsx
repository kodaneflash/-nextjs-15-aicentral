'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { BlogPost } from '@/types/blog';

import { BlogCard } from './BlogCard';

interface BlogCarouselProps {
    posts: BlogPost[];
    title?: string;
    subtitle?: string;
    limit?: number;
    filterByTag?: string;
    className?: string;
}

export function BlogCarouselClient({
    posts,
    title = 'Latest from our blog',
    subtitle = 'Articles',
    limit = 3,
    filterByTag,
    className = ''
}: BlogCarouselProps) {
    // Filter posts by tag if specified
    let filteredPosts = filterByTag ? posts.filter((post) => post.tags?.includes(filterByTag)) : posts;

    // Apply post limit
    const limitedPosts = filteredPosts.slice(0, limit);

    return (
        <section className={`container flex flex-col items-center gap-6 py-24 sm:gap-7 ${className}`}>
            <div className='flex flex-col gap-3'>
                <span className='text-primary text-center font-bold uppercase'>{subtitle}</span>
                <h2 className='text-center text-3xl font-bold tracking-tight text-balance sm:text-4xl'>{title}</h2>
            </div>
            <Carousel
                opts={{
                    loop: true,
                    align: 'center',
                    breakpoints: {
                        '(min-width: 1024px)': {
                            align: 'start'
                        }
                    }
                }}
                className='mt-6 w-full px-4 xl:px-0'>
                <CarouselPrevious className='-left-6 size-7 xl:-left-12 xl:size-8' />
                <CarouselContent className='flex items-center justify-center pb-4 lg:justify-start'>
                    {limitedPosts.map((post) => (
                        <CarouselItem
                            key={post.slug}
                            className='flex basis-full justify-center sm:basis-auto md:min-w-[350px] lg:justify-start'>
                            <div className='h-full w-full max-w-[350px] px-2 lg:w-auto lg:max-w-none'>
                                <BlogCard post={post} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className='-right-6 size-7 xl:-right-12 xl:size-8' />
            </Carousel>
        </section>
    );
}

export default BlogCarouselClient;
