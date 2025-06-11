import BlogCarousel from '@/components/BlogCarousel';
import { CodingComparison } from '@/components/CodingComparison';
import { type CourseCard, CourseCards } from '@/components/CourseCards';
import { Hero } from '@/components/Hero';
import { InfiniteMovingCardsDemo } from '@/components/infinite-moving-cards-demo';
import { Pricing } from '@/components/pricing';
import type { PricingPlan } from '@/components/pricing';

// Course data
const courses: CourseCard[] = [
    {
        id: 'ai-coding-basics',
        title: 'AI coding<br />Beyond basics',
        description: 'The ultimate Vibe Coding Guideline<br />to bring ideas to production',
        buttonText: 'Enroll now',
        videoUrl: 'https://www.aibuilderclub.com/3_learning/course1.mp4',
        buttonHref: '#'
    },
    {
        id: 'production-agent',
        title: 'Build<br />Production<br />Agent',
        description: 'No framework, just build from scratch',
        buttonText: 'Get Started',
        videoUrl: 'https://www.aibuilderclub.com/3_learning/course2.mp4',
        buttonHref: '#'
    }
];

// Pricing plans data
const pricingPlans: PricingPlan[] = [
    {
        name: 'Base',
        price: 8,
        currency: '$',
        period: 'month',
        trialText: '14-day free trial',
        features: [
            { text: 'Unlimited Usage', included: true },
            { text: 'Unlimited Workspace Members', included: true },
            { text: 'Email Support', included: true },
            { text: 'Basic Analytics', included: true },
            { text: 'Community Access', included: true }
        ],
        buttonText: 'Get Base access',
        buttonHref: '/auth/sign-up?plan=base',
        isPopular: false,
        buttonVariant: 'default'
    },
    {
        name: 'Plus',
        price: 12,
        currency: '$',
        period: 'month',
        trialText: '14-day free trial',
        features: [
            { text: 'Everything in Base, and:', included: true },
            { text: 'Early Access to New Features', included: true },
            { text: '24/7 Support + Slack Access', included: true },
            { text: 'Advanced Analytics', included: true },
            { text: 'Priority Feature Requests', included: true },
            { text: 'Custom Integrations', included: true }
        ],
        buttonText: 'Get Pro access',
        buttonHref: '/auth/sign-up?plan=plus',
        isPopular: true,
        buttonVariant: 'premium'
    }
];

export default function Page() {
    return (
        <main className='min-h-screen'>
            {/* Hero Section */}
            <Hero />

            {/* Coding Comparison Section */}
            <CodingComparison />

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

                {/* Course Cards Section */}
                <section className='mt-16 w-full'>
                    <div className='mb-8 text-center'>
                        <h2 className='mb-4 text-3xl font-bold'>Featured Courses</h2>
                        <p className='text-lg text-gray-600 dark:text-gray-400'>
                            Discover our premium courses designed to take your skills to the next level.
                        </p>
                    </div>
                    <CourseCards courses={courses} />
                </section>

                {/* Pricing Section */}
                <section className='mt-16 w-full'>
                    <Pricing
                        plans={pricingPlans}
                        title='Pricing'
                        subtitle='Choose the perfect plan for your needs. All plans include a 14-day free trial.'
                    />
                </section>

                <BlogCarousel />
            </div>
        </main>
    );
}
