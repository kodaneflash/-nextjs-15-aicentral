import React from 'react';

import { brandColors } from '@/lib/brand-colors';

interface ComparisonCardProps {
    title: string;
    items: string[];
    variant: 'employee' | 'entrepreneur';
    icon: React.ReactNode;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, items, variant, icon }) => {
    const isEmployee = variant === 'employee';

    return (
        <div
            className={`flex flex-col rounded-2xl border ${
                isEmployee ? 'border-red-500/30' : 'border-green-500/30'
            } shadow-lg transition-all dark:shadow-xl`}>
            {/* Outer gradient wrapper */}
            <div
                className={`h-full rounded-2xl p-1 ${
                    isEmployee
                        ? 'bg-[linear-gradient(to_right_bottom,_oklch(0.745_0.135_12.175_/_0.1)_0px,_oklch(0.745_0.135_12.175_/_0.15)_50%,_oklch(0.745_0.135_12.175_/_0.2)_100%)]'
                        : 'bg-[linear-gradient(to_right_bottom,_oklch(0.803_0.135_142.495_/_0.1)_0px,_oklch(0.803_0.135_142.495_/_0.15)_50%,_oklch(0.803_0.135_142.495_/_0.2)_100%)]'
                }`}>
                {/* Inner content area */}
                <div
                    className={`flex h-full flex-col rounded-xl p-8 ${
                        isEmployee
                            ? 'bg-[oklch(0.745_0.135_12.175_/_0.05)] backdrop-blur-sm'
                            : 'bg-[oklch(0.803_0.135_142.495_/_0.05)] backdrop-blur-sm'
                    }`}>
                    <div className='mb-6 flex items-center justify-between'>
                        <h3
                            className={`text-xl font-semibold ${isEmployee ? brandColors.engineer.text : brandColors.entrepreneur.text}`}>
                            {title}
                        </h3>
                        {icon}
                    </div>

                    <ul className='space-y-4'>
                        {items.map((item, index) => (
                            <li key={index} className='flex items-start gap-3'>
                                <span
                                    className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                                        isEmployee ? 'bg-red-400' : 'bg-green-400'
                                    }`}
                                />
                                <span className='leading-relaxed text-gray-300'>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const XIcon: React.FC = () => (
    <svg className='h-8 w-8' fill='none' viewBox='0 0 67 67' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='33.5' cy='33.5' r='27.5' fill='rgb(252, 165, 165)' stroke='rgb(252, 165, 165)' strokeWidth='2' />
        <path
            d='M41.5 25L25 41.5M25 25l16.5 16.5'
            stroke='rgb(127, 29, 29)'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

const CheckIcon: React.FC = () => (
    <svg className='h-8 w-8' fill='none' viewBox='0 0 67 67' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='33.5' cy='33.5' r='27.5' fill='rgb(134, 239, 172)' stroke='rgb(134, 239, 172)' strokeWidth='2' />
        <path
            d='M25 33.5l5.5 5.5L42 27.5'
            stroke='rgb(20, 83, 45)'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);

export const CodingComparison: React.FC = () => {
    const employeeItems = [
        'Invert binary trees',
        "Master 47 sorting algorithms you'll never implement",
        'Memorize Big O notation to impress your interviewer',
        'Read documentation longer than The Lord of the Rings',
        'Write complex code when a simple AI prompt would do'
    ];

    const entrepreneurItems = ['Learn only the fundamentals', 'Use AI to code for you', 'Keep learning on the fly'];

    return (
        <section className='px-6 py-24 text-white md:py-32 lg:py-48'>
            <div className='mx-auto max-w-6xl text-center'>
                <h2 className='font-noto-sans mx-auto mb-16 max-w-4xl text-5xl leading-[60px] font-extrabold md:mb-20 md:text-[48px]'>
                    Coding courses are designed for{' '}
                    <span className={`${brandColors.engineer.text} italic`}>software engineers</span>, not{' '}
                    <span className={`${brandColors.entrepreneur.text} italic`}>entrepreneurs</span>
                </h2>

                <div className='mx-auto grid max-w-5xl gap-8 md:grid-cols-2'>
                    <ComparisonCard
                        title='Coding as an employee'
                        items={employeeItems}
                        variant='employee'
                        icon={<XIcon />}
                    />

                    <ComparisonCard
                        title='Coding as an entrepreneur'
                        items={entrepreneurItems}
                        variant='entrepreneur'
                        icon={<CheckIcon />}
                    />
                </div>
            </div>
        </section>
    );
};
