import BlogCarousel from '@/components/BlogCarousel';
import { Hero } from '@/components/Hero';
import { SplitCard, SplitCardIcon, SplitCardIconGrid, SplitCardText, SplitCardTextLine } from '@/components/SplitCard';
import { InfiniteMovingCardsDemo } from '@/components/infinite-moving-cards-demo';

export default function Page() {
    return (
        <main className='min-h-screen'>
            {/* Hero Section */}
            <Hero />

            {/* Content Container */}
            <div className='flex flex-col items-center justify-center p-6 sm:p-12 md:p-24'>
                {/* Split Card - Full Width, Outside Container */}
                <div className='-mx-6 mt-16 flex w-screen justify-center sm:-mx-12 md:-mx-24'>
                    <SplitCard
                        leftContent={
                            <SplitCardIconGrid>
                                <SplitCardIcon>
                                    <div className='flex h-20 w-32 items-center justify-center rounded-lg bg-gray-300'>
                                        <span className='text-sm text-gray-600'>Logo 1</span>
                                    </div>
                                </SplitCardIcon>
                                <SplitCardIcon>
                                    <div className='flex h-20 w-32 items-center justify-center rounded-lg bg-gray-300'>
                                        <span className='text-sm text-gray-600'>Logo 2</span>
                                    </div>
                                </SplitCardIcon>
                                <SplitCardIcon>
                                    <div className='flex h-20 w-32 items-center justify-center rounded-lg bg-gray-300'>
                                        <span className='text-sm text-gray-600'>Logo 3</span>
                                    </div>
                                </SplitCardIcon>
                            </SplitCardIconGrid>
                        }
                        rightContent={
                            <SplitCardText>
                                <SplitCardTextLine>Your headline</SplitCardTextLine>
                                <SplitCardTextLine>goes here.</SplitCardTextLine>
                            </SplitCardText>
                        }
                    />
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
            </div>
        </main>
    );
}
