import BlogCarousel from '@/components/BlogCarousel';
import { Hero } from '@/components/Hero';
import { InfiniteMovingCardsDemo } from '@/components/infinite-moving-cards-demo';

export default function Page() {
    return (
        <main className='min-h-screen'>
            {/* Hero Section */}
            <Hero />

            {/* Content Container */}
            <div className='flex flex-col items-center justify-center p-6 sm:p-12 md:p-24'>
                {/* Infinite Moving Cards Testimonials Section */}
                <section className='mt-16 w-full'>
                    <div className='mb-8 text-center'>
                        <h2 className='mb-4 text-3xl font-bold'>What People Are Saying</h2>
                        <p className='text-lg text-gray-600 dark:text-gray-400'>
                            Incididunt consectetur amet aliqua velit tempor deserunt labore culpa nulla ipsum incididunt
                            labore.
                        </p>
                    </div>
                    <InfiniteMovingCardsDemo />
                </section>

                <BlogCarousel />
            </div>
        </main>
    );
}
