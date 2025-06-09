import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Newsletter',
    description: 'Stay updated with our latest insights and articles. Newsletter coming soon.',
    openGraph: {
        title: 'Newsletter | Next.js 15 Starter',
        description: 'Stay updated with our latest insights and articles. Newsletter coming soon.'
    }
};

export default function NewsletterPage() {
    return (
        <main className='bg-background min-h-screen'>
            {/* Hero Section */}
            <section className='bg-gradient-to-b from-gray-900 to-gray-800 py-16 sm:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl text-center'>
                        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>Newsletter</h1>
                        <p className='mt-6 text-lg leading-8 text-gray-300'>
                            Stay updated with our latest insights, articles, and exclusive content delivered directly to
                            your inbox.
                        </p>
                    </div>
                </div>
            </section>

            {/* Coming Soon Content */}
            <section className='py-16 sm:py-24'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl text-center'>
                        <div className='mb-8'>
                            <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900'>
                                <svg
                                    className='h-8 w-8 text-blue-600 dark:text-blue-400'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    aria-hidden='true'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                                    />
                                </svg>
                            </div>
                            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
                                Coming Soon...
                            </h2>
                            <p className='mt-4 text-lg text-gray-600 dark:text-gray-400'>
                                We're working on something amazing! Our newsletter will feature:
                            </p>
                        </div>

                        <div className='mt-8'>
                            <ul className='mx-auto max-w-md space-y-4 text-left'>
                                <li className='flex items-start'>
                                    <div className='flex-shrink-0'>
                                        <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900'>
                                            <svg
                                                className='h-4 w-4 text-green-600 dark:text-green-400'
                                                fill='currentColor'
                                                viewBox='0 0 20 20'>
                                                <path
                                                    fillRule='evenodd'
                                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='ml-3'>
                                        <p className='text-gray-700 dark:text-gray-300'>
                                            Weekly insights on personal growth and business planning
                                        </p>
                                    </div>
                                </li>
                                <li className='flex items-start'>
                                    <div className='flex-shrink-0'>
                                        <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900'>
                                            <svg
                                                className='h-4 w-4 text-green-600 dark:text-green-400'
                                                fill='currentColor'
                                                viewBox='0 0 20 20'>
                                                <path
                                                    fillRule='evenodd'
                                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='ml-3'>
                                        <p className='text-gray-700 dark:text-gray-300'>
                                            Exclusive content and early access to new articles
                                        </p>
                                    </div>
                                </li>
                                <li className='flex items-start'>
                                    <div className='flex-shrink-0'>
                                        <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900'>
                                            <svg
                                                className='h-4 w-4 text-green-600 dark:text-green-400'
                                                fill='currentColor'
                                                viewBox='0 0 20 20'>
                                                <path
                                                    fillRule='evenodd'
                                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='ml-3'>
                                        <p className='text-gray-700 dark:text-gray-300'>
                                            Curated resources and actionable tips for your journey
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='mt-12'>
                            <p className='text-sm text-gray-500 dark:text-gray-400'>
                                Want to be notified when we launch? Check back soon or follow us for updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
