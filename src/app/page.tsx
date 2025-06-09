import BlogCarousel from '@/components/BlogCarousel';
import { InfiniteMovingCardsDemo } from '@/components/infinite-moving-cards-demo';

export default function Page() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24'>
            <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm'>
                <h1 className='text-4xl font-bold'>Welcome to Next.js 15</h1>
                <p className='mt-4 text-lg'>Start editing this page to build your app.</p>
            </div>

            {/* Infinite Moving Cards Testimonials Section */}
            <section className='mt-16 w-full'>
                <div className='mb-8 text-center'>
                    <h2 className='mb-4 text-3xl font-bold'>What People Are Saying</h2>
                    <p className='text-lg text-gray-600 dark:text-gray-400'>
                        Testimonials from satisfied customers and literary classics
                    </p>
                </div>
                <InfiniteMovingCardsDemo />
            </section>

            <BlogCarousel />
        </main>
    );
}
