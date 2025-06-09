'use client';

import { useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { calculateReadTimeFromPortableText, formatReadTime } from '@/lib/readTime';
import { cn } from '@/lib/utils';
import { BlogPost } from '@/types/blog';

import dayjs from 'dayjs';
import { Search, X } from 'lucide-react';

interface ArticlesClientProps {
    posts: BlogPost[];
}

export function ArticlesClient({ posts }: ArticlesClientProps) {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter posts based on search query
    const filteredPosts = useMemo(() => {
        if (!searchQuery.trim()) return posts;

        const query = searchQuery.toLowerCase();
        return posts.filter(
            (post) =>
                post.title.toLowerCase().includes(query) ||
                post.excerpt?.toLowerCase().includes(query) ||
                post.content?.toLowerCase().includes(query) ||
                post.tags?.some((tag) => tag.toLowerCase().includes(query))
        );
    }, [posts, searchQuery]);

    // Group posts by categories
    const categorizedPosts = useMemo(() => {
        const categories: Record<string, BlogPost[]> = {};

        filteredPosts.forEach((post) => {
            if (post.categories && post.categories.length > 0) {
                post.categories.forEach((category) => {
                    if (!categories[category.title]) {
                        categories[category.title] = [];
                    }
                    categories[category.title].push(post);
                });
            } else {
                // Posts without categories go to "Uncategorized"
                if (!categories['Uncategorized']) {
                    categories['Uncategorized'] = [];
                }
                categories['Uncategorized'].push(post);
            }
        });

        return categories;
    }, [filteredPosts]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Search is already live, but this handles form submission
    };

    const clearSearch = () => {
        setSearchQuery('');
    };

    const ArticleCard = ({ post }: { post: BlogPost }) => {
        const imagePath = post.image || '/placeholder.svg';
        const readTimeMinutes = calculateReadTimeFromPortableText(post.body);
        const readTimeFormatted = formatReadTime(readTimeMinutes);
        const authorName = post.metadata?.author || 'Guest Author';

        return (
            <article className='group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600'>
                <Link href={`/blogs/${post.slug}`} className='block'>
                    {/* Image */}
                    <div className='relative h-48 w-full overflow-hidden'>
                        <Image
                            src={imagePath}
                            alt={post.mainImage?.alt || post.title}
                            fill
                            className='object-cover transition-transform duration-300 group-hover:scale-105'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                    </div>

                    {/* Content */}
                    <div className='flex flex-1 flex-col p-6'>
                        {/* Categories */}
                        {post.categories && post.categories.length > 0 && (
                            <div className='mb-3 flex flex-wrap gap-2'>
                                {post.categories.map((category, index) => (
                                    <span
                                        key={index}
                                        className='inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
                                        {category.title}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Title */}
                        <h3 className='mb-3 line-clamp-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400'>
                            {post.title}
                        </h3>

                        {/* Excerpt */}
                        {post.excerpt && (
                            <p className='mb-4 line-clamp-3 flex-1 leading-relaxed text-gray-600 dark:text-gray-300'>
                                {post.excerpt}
                            </p>
                        )}

                        {/* Meta */}
                        <div className='mt-auto flex items-center justify-between text-sm text-gray-500 dark:text-gray-400'>
                            <div className='flex items-center space-x-2'>
                                <span className='font-medium'>{authorName}</span>
                                <span>•</span>
                                <span>{readTimeFormatted}</span>
                            </div>
                            <time dateTime={post.publishedAt} className='font-medium'>
                                {dayjs(post.publishedAt).format('MMM D, YYYY')}
                            </time>
                        </div>
                    </div>
                </Link>
            </article>
        );
    };

    return (
        <div className='min-h-screen'>
            {/* Enhanced Search Section */}
            <section className='bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 sm:py-20'>
                <div className='mx-auto max-w-4xl px-6 lg:px-8'>
                    <div className='mb-12 text-center'>
                        <h1 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl'>
                            Articles
                        </h1>
                        <p className='mx-auto max-w-2xl text-lg text-blue-100 sm:text-xl'>
                            Discover insights and knowledge across various topics
                        </p>
                    </div>

                    <form onSubmit={handleSearch} className='space-y-6'>
                        <div className='relative'>
                            <label
                                htmlFor='search-articles'
                                className='mb-3 block text-center text-sm font-medium text-blue-100'>
                                Search for articles by title, content, or tags
                            </label>
                            <div className='relative mx-auto max-w-2xl'>
                                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6'>
                                    <Search className='h-6 w-6 text-gray-400' aria-hidden='true' />
                                </div>
                                <input
                                    id='search-articles'
                                    type='text'
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder='Search for an article...'
                                    className='block w-full rounded-2xl border-0 bg-white/10 py-6 pr-16 pl-16 text-lg text-white placeholder-gray-300 shadow-xl ring-1 ring-white/20 backdrop-blur-sm transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent'
                                />
                                {searchQuery && (
                                    <button
                                        type='button'
                                        onClick={clearSearch}
                                        className='absolute inset-y-0 right-0 flex items-center pr-6 text-gray-400 transition-colors hover:text-white'>
                                        <X className='h-5 w-5' aria-hidden='true' />
                                        <span className='sr-only'>Clear search</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <button
                                type='submit'
                                className='inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700 hover:shadow-xl focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none'>
                                <Search className='h-5 w-5' />
                                Search Articles
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Articles Content */}
            <div className='mx-auto max-w-7xl px-6 py-16 lg:px-8'>
                {/* Results Summary */}
                {searchQuery && (
                    <div className='mb-12 text-center'>
                        <p className='text-lg text-gray-600 dark:text-gray-400'>
                            {filteredPosts.length === 0
                                ? 'No articles found'
                                : `Found ${filteredPosts.length} article${filteredPosts.length === 1 ? '' : 's'}`}
                            {searchQuery && (
                                <>
                                    {' '}
                                    for{' '}
                                    <span className='font-semibold text-blue-600 dark:text-blue-400'>
                                        "{searchQuery}"
                                    </span>
                                </>
                            )}
                        </p>
                    </div>
                )}

                {/* No Results */}
                {filteredPosts.length === 0 ? (
                    <div className='py-16 text-center'>
                        <div className='mx-auto max-w-md'>
                            <Search className='mx-auto mb-4 h-12 w-12 text-gray-400' />
                            <h3 className='mb-2 text-xl font-semibold text-gray-900 dark:text-white'>
                                No articles found
                            </h3>
                            <p className='mb-6 text-gray-600 dark:text-gray-400'>
                                {searchQuery
                                    ? 'Try adjusting your search terms or browse all articles.'
                                    : 'No articles have been published yet.'}
                            </p>
                            {searchQuery && (
                                <button
                                    onClick={clearSearch}
                                    className='inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'>
                                    <X className='h-4 w-4' />
                                    Clear search
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    /* Categorized Articles */
                    <div className='space-y-16'>
                        {Object.entries(categorizedPosts).map(([categoryName, categoryPosts]) => (
                            <section key={categoryName} className='group'>
                                <div className='mb-8 flex items-center'>
                                    <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>{categoryName}</h2>
                                    <div className='ml-4 h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600'></div>
                                    <span className='ml-4 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400'>
                                        {categoryPosts.length} article{categoryPosts.length === 1 ? '' : 's'}
                                    </span>
                                </div>
                                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                                    {categoryPosts.map((post) => (
                                        <ArticleCard key={post._id} post={post} />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
