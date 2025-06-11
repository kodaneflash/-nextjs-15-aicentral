'use client';

import React, { FormEvent, useState } from 'react';

import { useNewsletterSubscription } from '@/hooks/useNewsletterSubscription';
import { cn } from '@/lib/utils';

import { BlurImage } from './ui/fullbackgroundimage';
import { AlertCircle, CheckCircle, Loader2, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface Logo {
    name: string;
    image: string;
}

interface HeroSectionProps {
    title: string;
    description: string;
    backgroundImage?: string;
    gradientFade?: boolean;
    logos?: Logo[];
    className?: string;
}

export function HeroSection({
    title,
    description,
    backgroundImage = 'https://assets.aceternity.com/pro/image-background.jpg',
    gradientFade = true,
    logos = [],
    className
}: HeroSectionProps) {
    const [email, setEmail] = useState('');
    const { subscribe, isLoading, isSuccess, isError, message, error, reset } = useNewsletterSubscription();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await subscribe(email);
        if (!isError) {
            setEmail(''); // Clear email on success
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (isError || isSuccess) {
            reset(); // Clear previous states when user starts typing
        }
    };

    return (
        <section
            className={cn('relative flex min-h-screen w-full flex-col items-center justify-center p-10', className)}
            role='banner'
            aria-label='Hero section'>
            {/* Background Layer */}
            <div className='absolute inset-0 h-full w-full bg-black' aria-hidden='true' />

            {/* Animated Background Image */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 0.3] }}
                transition={{ duration: 2 }}
                className='absolute inset-0 h-full w-full'
                aria-hidden='true'>
                <BlurImage
                    src={backgroundImage}
                    className={cn(
                        'pointer-events-none absolute inset-0 h-full w-full object-cover select-none',
                        gradientFade && '[mask-image:radial-gradient(200px_at_center,transparent,black)]'
                    )}
                    width={1000}
                    height={1000}
                    alt='Hero background'
                />
                <div className='absolute bottom-0 h-40 w-full bg-gradient-to-t from-black to-transparent' />
            </motion.div>

            {/* Content */}
            <div className='relative z-10 flex flex-col items-center text-center'>
                {/* Title */}
                <h1
                    className='max-w-5xl bg-gradient-to-b from-neutral-400 via-white to-white bg-clip-text text-3xl font-medium tracking-tight text-balance text-transparent md:text-7xl md:leading-tight'
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                {/* Description */}
                <p className='text-clean-subtext mt-2 max-w-2xl text-neutral-200 md:mt-6 md:text-xl'>{description}</p>

                {/* Email Subscription Form */}
                <div className='mt-8 w-full max-w-md'>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div className='relative'>
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4'>
                                <Mail className='h-5 w-5 text-neutral-400' aria-hidden='true' />
                            </div>
                            <input
                                type='email'
                                value={email}
                                onChange={handleEmailChange}
                                placeholder='Enter your email address'
                                required
                                disabled={isLoading}
                                className={cn(
                                    'w-full rounded-md border bg-white/10 py-3 pr-4 pl-12 text-white placeholder-neutral-300',
                                    'backdrop-blur-sm transition-all duration-200',
                                    'border-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent',
                                    'shadow-lg focus:shadow-xl',
                                    'disabled:cursor-not-allowed disabled:opacity-50',
                                    isError && 'border-red-400/50 focus:border-red-400/50 focus:ring-red-400/20',
                                    isSuccess && 'border-green-400/50 focus:border-green-400/50 focus:ring-green-400/20'
                                )}
                                aria-describedby={isError ? 'email-error' : isSuccess ? 'email-success' : undefined}
                            />
                        </div>

                        <button
                            type='submit'
                            disabled={isLoading || !email.trim()}
                            className={cn(
                                'w-full rounded-md px-6 py-3 font-medium transition-all duration-200',
                                'bg-white text-black shadow-lg hover:shadow-xl',
                                'hover:bg-neutral-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black',
                                'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white',
                                'flex items-center justify-center gap-2'
                            )}>
                            {isLoading ? (
                                <>
                                    <Loader2 className='h-4 w-4 animate-spin' />
                                    Subscribing...
                                </>
                            ) : (
                                'Subscribe to Newsletter'
                            )}
                        </button>
                    </form>

                    {/* Status Messages */}
                    {(isSuccess || isError) && (
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className='mt-4'>
                            {isSuccess && (
                                <div
                                    id='email-success'
                                    className='flex items-center gap-2 rounded-md border border-green-400/30 bg-green-500/20 p-3 text-sm text-green-300'>
                                    <CheckCircle className='h-4 w-4 flex-shrink-0' />
                                    <span>{message}</span>
                                </div>
                            )}
                            {isError && (
                                <div
                                    id='email-error'
                                    className='flex items-center gap-2 rounded-md border border-red-400/30 bg-red-500/20 p-3 text-sm text-red-300'>
                                    <AlertCircle className='h-4 w-4 flex-shrink-0' />
                                    <span>{error}</span>
                                </div>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
