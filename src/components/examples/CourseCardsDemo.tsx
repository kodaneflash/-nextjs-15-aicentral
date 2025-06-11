import React from 'react';

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
                isEmployee ? 'border-red-500/30 bg-red-950/20' : 'border-green-500/30 bg-green-950/20'
            } p-6 sm:p-8`}>
            <div className='mb-6 flex items-center justify-between'>
                <h3 className={`text-lg font-semibold sm:text-xl ${isEmployee ? 'text-red-400' : 'text-green-400'}`}>
                    {title}
                </h3>
                {icon}
            </div>

            <ul className='space-y-3 sm:space-y-4'>
                {items.map((item, index) => (
                    <li key={index} className='flex items-start gap-2 sm:gap-3'>
                        <span
                            className={`mt-[0.375rem] h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                                isEmployee ? 'bg-red-400' : 'bg-green-400'
                            }`}
                        />
                        <span className='text-sm leading-relaxed text-gray-300 sm:text-base'>{item}</span>
                    </li>
                ))}
            </ul>
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

export function CourseCardsDemo() {
    const employeeItems = [
        'Invert binary trees',
        "Master 47 sorting algorithms you'll never implement",
        'Memorize Big O notation to impress your interviewer',
        'Read documentation longer than The Lord of the Rings',
        'Write complex code when a simple AI prompt would do'
    ];

    const entrepreneurItems = ['Learn only the fundamentals', 'Use AI to code for you', 'Keep learning on the fly'];

    return (
        <div className='bg-black px-4 py-8 sm:px-6 sm:py-16'>
            <div className='mx-auto max-w-md space-y-6 sm:max-w-2xl sm:space-y-8'>
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
    );
}

// Alternative usage with custom click handlers (kept for backward compatibility)
export function CourseCardsDemoWithHandlers() {
    return <CourseCardsDemo />;
}

export default CourseCardsDemo;
