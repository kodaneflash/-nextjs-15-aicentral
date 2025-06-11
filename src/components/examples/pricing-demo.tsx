import React from 'react';

import { Pricing } from '../pricing';
import type { PricingFeature, PricingPlan } from '../pricing';

// Sample pricing data that matches the original design
const samplePlans: PricingPlan[] = [
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

// Alternative data showing more customization options
const alternativePlans: PricingPlan[] = [
    {
        name: 'Starter',
        price: 0,
        currency: '$',
        period: 'month',
        trialText: 'Free forever',
        features: [
            { text: 'Up to 3 projects', included: true },
            { text: 'Basic support', included: true },
            { text: 'Community access', included: true },
            { text: 'Advanced features', included: false },
            { text: 'Priority support', included: false }
        ],
        buttonText: 'Get Started',
        onButtonClick: () => alert('Starter plan selected!'),
        isPopular: false,
        buttonVariant: 'default'
    },
    {
        name: 'Professional',
        price: 29,
        currency: '$',
        period: 'month',
        trialText: '30-day free trial',
        features: [
            { text: 'Unlimited projects', included: true },
            { text: 'Priority support', included: true },
            { text: 'Advanced analytics', included: true },
            { text: 'Team collaboration', included: true },
            { text: 'Custom integrations', included: true },
            { text: 'White-label options', included: true }
        ],
        buttonText: 'Go Professional',
        onButtonClick: () => alert('Professional plan selected!'),
        isPopular: true,
        buttonVariant: 'premium'
    },
    {
        name: 'Enterprise',
        price: 99,
        currency: '$',
        period: 'month',
        trialText: 'Custom setup included',
        features: [
            { text: 'Everything in Professional', included: true },
            { text: 'Dedicated account manager', included: true },
            { text: 'Custom SLA', included: true },
            { text: 'On-premise deployment', included: true },
            { text: 'Advanced security', included: true },
            { text: '24/7 phone support', included: true }
        ],
        buttonText: 'Contact Sales',
        onButtonClick: () => alert('Enterprise contact form!'),
        isPopular: false,
        buttonVariant: 'default'
    }
];

export const PricingDemo: React.FC = () => {
    return (
        <div className='space-y-16 py-8'>
            {/* Original Design Recreation */}
            <section>
                <h2 className='text-foreground mb-8 text-center text-3xl font-bold'>Original Design Recreation</h2>
                <Pricing
                    plans={samplePlans}
                    title='Pricing'
                    subtitle='Choose the perfect plan for your needs. All plans include a 14-day free trial.'
                />
            </section>

            {/* Alternative Configuration */}
            <section>
                <h2 className='text-foreground mb-8 text-center text-3xl font-bold'>
                    Alternative Configuration (3-Tier)
                </h2>
                <div className='mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3'>
                    {alternativePlans.map((plan, index) => (
                        <PricingCard key={index} plan={plan} />
                    ))}
                </div>
            </section>

            {/* Custom Title and Subtitle */}
            <section>
                <h2 className='text-foreground mb-8 text-center text-3xl font-bold'>Custom Title & Subtitle</h2>
                <Pricing
                    plans={samplePlans.slice(0, 2)}
                    title='Choose Your Plan'
                    subtitle='Start your journey with our flexible pricing options. No hidden fees, cancel anytime.'
                    centeredLayout={false}
                />
            </section>
        </div>
    );
};

// Individual card component for more flexible layouts
const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
    const handleButtonClick = () => {
        if (plan.onButtonClick) {
            plan.onButtonClick();
        } else if (plan.buttonHref) {
            window.location.href = plan.buttonHref;
        }
    };

    return (
        <div className='bg-background/20 dark:bg-background/50 shadow-elevation-light dark:shadow-elevation-dark-three relative flex flex-col p-8 transition-all'>
            {/* Popular Badge */}
            {plan.isPopular && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                    <div className='bg-muted text-muted-foreground flex items-center gap-1 px-4 py-1 text-sm font-medium'>
                        <span>Most Popular</span>
                    </div>
                </div>
            )}

            {/* Plan Details */}
            <div className='mb-6 text-center'>
                <h3 className='text-foreground mb-2 text-2xl font-medium'>{plan.name}</h3>
                {plan.trialText && <p className='text-foreground/80 text-sm'>{plan.trialText}</p>}
            </div>

            <div className='mb-6 text-center'>
                <p className='text-foreground text-4xl font-medium'>
                    {plan.currency}
                    {plan.price}
                </p>
                <p className='text-foreground/80'>/ {plan.period}</p>
            </div>

            {/* Features */}
            <ul className='mb-8 flex-grow space-y-3'>
                {plan.features.map((feature: PricingFeature, index: number) => (
                    <li key={index} className='flex items-start text-sm'>
                        <span className={`mr-2 ${feature.included ? 'text-green-500' : 'text-red-500'}`}>
                            {feature.included ? '✓' : '✗'}
                        </span>
                        <span className={feature.included ? 'text-foreground/80' : 'text-foreground/50 line-through'}>
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button
                onClick={handleButtonClick}
                className={`w-full rounded-md px-6 py-3 font-medium transition-colors ${
                    plan.isPopular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}>
                {plan.buttonText}
            </button>
        </div>
    );
};

export default PricingDemo;
