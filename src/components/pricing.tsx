'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { GradientHeading } from '@/components/ui/gradient-heading';
import { cn } from '@/lib/utils';

import { ArrowRight, Check, Sparkles } from 'lucide-react';

export interface PricingFeature {
    text: string;
    included: boolean;
}

export interface PricingPlan {
    name: string;
    price: number;
    currency?: string;
    period?: string;
    trialText?: string;
    features: PricingFeature[];
    buttonText: string;
    buttonHref?: string;
    onButtonClick?: () => void;
    isPopular?: boolean;
    buttonVariant?: 'default' | 'premium';
}

export interface PricingProps {
    title?: string;
    subtitle?: string;
    plans: PricingPlan[];
    className?: string;
    centeredLayout?: boolean;
    subtitleClassName?: string;
}

const PricingCard: React.FC<{
    plan: PricingPlan;
    className?: string;
}> = ({ plan, className }) => {
    const handleButtonClick = () => {
        if (plan.onButtonClick) {
            plan.onButtonClick();
        } else if (plan.buttonHref) {
            window.location.href = plan.buttonHref;
        }
    };

    return (
        <div
            className={cn(
                'bg-background/20 dark:bg-background/50 shadow-elevation-light dark:shadow-elevation-dark-three relative mx-auto flex max-w-md flex-col p-8 transition-all',
                className
            )}>
            {/* Popular Badge */}
            {plan.isPopular && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                    <div className='bg-muted text-muted-foreground shadow-elevation-light dark:shadow-elevation-dark flex items-center gap-1 px-4 py-1 text-sm font-medium'>
                        <Sparkles className='h-4 w-4' />
                        Most Popular
                    </div>
                </div>
            )}

            {/* Plan Header */}
            <div className='mb-8 text-center'>
                <h2 className='text-foreground mb-2 text-2xl font-medium'>{plan.name}</h2>
                {plan.trialText && <p className='text-foreground/80 text-sm'>{plan.trialText}</p>}
            </div>

            {/* Pricing */}
            <div className='mb-8 text-center'>
                <p className='text-foreground mb-2 text-5xl font-medium'>
                    {plan.currency || '$'}
                    {plan.price}
                </p>
                <p className='text-foreground/80'>/ {plan.period || 'month'}</p>
            </div>

            {/* Features */}
            <ul className='mx-auto mb-8 flex-grow space-y-4'>
                {plan.features.map((feature, index) => (
                    <li key={index} className='flex items-start'>
                        <Check
                            className={cn(
                                'mt-0.5 mr-3 h-5 w-5 flex-shrink-0',
                                feature.included ? 'text-primary' : 'text-muted-foreground/30'
                            )}
                        />
                        <span
                            className={cn(
                                'text-sm',
                                feature.included ? 'text-foreground/80' : 'text-muted-foreground/50 line-through'
                            )}>
                            {feature.text}
                        </span>
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <div className='mt-auto pt-8'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='rounded-full px-1 py-1'>
                        <div className='flex items-center justify-center gap-4'>
                            <div className='relative'>
                                {/* Premium gradient blur effect for popular plans */}
                                {plan.isPopular && plan.buttonVariant === 'premium' && (
                                    <div
                                        className='pointer-events-none absolute inset-0 h-full w-full scale-80 transform-gpu px-6 blur-xl md:px-12'
                                        style={{
                                            background:
                                                'conic-gradient(from 131.832deg at 50% 50%, rgb(227, 54, 128), rgb(58, 199, 242), rgb(74, 222, 128), rgb(249, 238, 128), rgb(236, 72, 153), rgb(244, 151, 207), rgb(68, 230, 245), rgb(227, 54, 128), rgb(68, 232, 246), rgb(88, 76, 218))'
                                        }}
                                    />
                                )}
                                <Button
                                    onClick={handleButtonClick}
                                    variant='secondary'
                                    className={cn(
                                        'text-primary shadow-elevation-light dark:shadow-elevation-dark bg-secondary dark:bg-background/80 hover:bg-secondary/80 dark:hover:bg-background/60 relative z-10 inline-flex w-full items-center justify-center px-6 py-3.5 text-xl tracking-tight transition-all duration-300 sm:w-auto md:px-9 md:py-4.5 md:text-2xl',
                                        plan.isPopular && 'h-16'
                                    )}>
                                    <span className='flex items-center gap-2'>
                                        {plan.buttonText}
                                        <ArrowRight className='size-5 md:size-6' />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Pricing: React.FC<PricingProps> = ({
    title = 'Pricing',
    subtitle = 'Choose the perfect plan for your needs. All plans include a 14-day free trial.',
    plans,
    className,
    centeredLayout = true,
    subtitleClassName
}) => {
    return (
        <div className={cn('w-full', className)}>
            <div className='from-card via-card/95 to-muted/90 shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark mx-auto max-w-7xl bg-gradient-to-br p-1 md:container'>
                <div className='bg-card/20 shadow-elevation-light dark:shadow-elevation-dark-three md:dark:shadow-elevation-dark px-3 py-12 pt-6 pb-2 sm:px-4 md:px-6 md:py-16'>
                    {/* Header */}
                    <div className={cn('mb-4 md:mb-16', centeredLayout ? 'text-center' : 'text-left md:text-center')}>
                        <div className='mb-4 leading-[1.5rem] md:leading-[1.5rem] lg:leading-[1.5rem]'>
                            <GradientHeading
                                variant='light'
                                size='xl'
                                weight='semi'
                                className='from-primary to-primary/90 dark:from-primary dark:to-primary/95 md:font-base bg-gradient-to-t bg-clip-text pb-3 text-5xl font-semibold tracking-tight text-transparent sm:text-6xl xl:text-[6rem]'>
                                {title}
                            </GradientHeading>
                        </div>
                        <p
                            className={cn(
                                'text-foreground/80 mx-auto max-w-2xl text-lg leading-relaxed xl:text-xl',
                                subtitleClassName
                            )}>
                            {subtitle}
                        </p>
                    </div>

                    {/* Plans Grid */}
                    <div className='mx-auto grid max-w-5xl gap-8 md:grid-cols-2'>
                        {plans.map((plan, index) => (
                            <PricingCard key={index} plan={plan} className={plan.isPopular ? 'md:scale-105' : ''} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Default export for convenience
export default Pricing;
