'use client';

import React from 'react';

import { TestimonialsSection } from './blocks/testimonials-with-marquee';
import type { TestimonialAuthor } from './ui/testimonial-card';

interface TestimonialData {
    author: TestimonialAuthor;
    text: string;
    href?: string;
}

interface TestimonialsDemoProps {
    title?: string;
    description?: string;
    testimonials?: TestimonialData[];
    className?: string;
}

export function TestimonialsDemo({
    title = 'What People Are Saying',
    description = 'Discover what our community has to say about their experience with our platform.',
    testimonials = defaultTestimonials,
    className
}: TestimonialsDemoProps) {
    return (
        <TestimonialsSection
            title={title}
            description={description}
            testimonials={testimonials}
            className={className}
        />
    );
}

const defaultTestimonials: TestimonialData[] = [
    {
        author: {
            name: 'Sarah Chen',
            handle: '@sarahchen',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b108?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
        },
        text: 'This platform has completely transformed how I approach coding. The AI-powered suggestions are incredibly accurate and save me hours of work every day.',
        href: '#'
    },
    {
        author: {
            name: 'Marcus Rodriguez',
            handle: '@marcusdev',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
        },
        text: "I've been using this for 6 months now, and the learning curve was surprisingly gentle. The community support is outstanding.",
        href: '#'
    },
    {
        author: {
            name: 'Emily Johnson',
            handle: '@emilyjohnson',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
        },
        text: "The best investment I've made for my development workflow. The production-ready code it generates is impressive.",
        href: '#'
    },
    {
        author: {
            name: 'David Kim',
            handle: '@davidkim',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
        },
        text: "What sets this apart is the attention to detail and the continuous improvements. It's like having a senior developer mentoring you.",
        href: '#'
    },
    {
        author: {
            name: 'Lisa Wang',
            handle: '@lisawang',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
        },
        text: 'From prototype to production, this platform has streamlined our entire development process. Highly recommended!',
        href: '#'
    },
    {
        author: {
            name: 'Alex Thompson',
            handle: '@alexthompson',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
        },
        text: "The code quality and best practices implementation is phenomenal. It's helped me become a better developer.",
        href: '#'
    },
    {
        author: {
            name: 'Priya Patel',
            handle: '@priyapatel',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
        },
        text: 'I love how it adapts to different frameworks and coding styles. The learning experience has been incredible.',
        href: '#'
    },
    {
        author: {
            name: 'James Miller',
            handle: '@jamesmiller',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
        },
        text: 'This has revolutionized my coding workflow. The AI suggestions are spot-on and the documentation is excellent.',
        href: '#'
    }
];

export type { TestimonialData };
