import BlogCarousel from '@/components/BlogCarousel';
import { CodingComparison } from '@/components/CodingComparison';
import { ContentSection } from '@/components/ContentSection';
import { type CourseCard, CourseCards } from '@/components/CourseCards';
import { HeroSection } from '@/components/HeroSection';
import { Pricing } from '@/components/pricing';
import type { PricingPlan } from '@/components/pricing';
import { TestimonialsDemo } from '@/components/testimonials-demo';

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
            <HeroSection
                title='Become a smarter AI builder in 10 minutes per week.'
                description='Join 62k+ readers of AI Central Weekly and receive one actionable email each week to help you master AI coding, AI agents, and launch a SaaS from zero, focusing only on the essentials every entrepreneur should know.'
                logos={[
                    {
                        name: 'TypeScript',
                        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                    },
                    {
                        name: 'React',
                        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                    },
                    {
                        name: 'Next.js',
                        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                    },
                    {
                        name: 'Node.js',
                        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                    }
                ]}
            />

            {/* Coding Comparison Section */}
            <CodingComparison />

            {/* Content Container */}
            <div className='flex flex-col items-center justify-center p-6 sm:p-12 md:p-24'>
                {/* Content Section */}
                <ContentSection />

                {/* Testimonials with Marquee Section */}
                <TestimonialsDemo />

                {/* Course Cards Section */}
                <section id='courses' className='mt-16 w-full'>
                    <div className='mb-8 text-center'>
                        <h2 className='mb-4 text-3xl font-bold'>Featured Courses</h2>
                        <p className='text-clean-subtext'>
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
                        subtitleClassName='text-clean-subtext'
                    />
                </section>

                <BlogCarousel />
            </div>
        </main>
    );
}
