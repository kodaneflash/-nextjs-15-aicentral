import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface SplitCardProps {
    leftContent?: ReactNode;
    rightContent?: ReactNode;
    leftContentClassName?: string;
    rightContentClassName?: string;
    className?: string;
    variant?: 'default' | 'compact';
}

export function SplitCard({
    leftContent,
    rightContent,
    leftContentClassName,
    rightContentClassName,
    className,
    variant = 'default'
}: SplitCardProps) {
    const gridCols =
        variant === 'compact' ? 'grid-cols-1 md:grid-cols-[2fr_1fr]' : 'grid-cols-[413.328px_413.328px_413.336px]';

    const gridRows = variant === 'compact' ? 'auto' : 'grid-rows-[19.75rem]';

    return (
        <section
            className={cn('grid gap-4 bg-[oklch(0.145_0_0)] text-[oklch(0.985_0_0)]', gridCols, gridRows, className)}>
            {/* Left Section - Primary Content Area */}
            <div className={cn('col-span-2', variant === 'compact' && 'col-span-1')}>
                <div className='relative flex h-full items-center justify-center bg-[linear-gradient(to_right_bottom,_oklch(0.205_0_0)_0px,_oklab(0.205_0_0_/_0.95)_50%,_oklab(0.269_0_0_/_0.9)_100%)] p-1'>
                    <div
                        className={cn(
                            'flex h-full w-full items-center justify-center bg-[oklab(0.205_0_0_/_0.5)] px-4 py-16',
                            leftContentClassName
                        )}>
                        {leftContent}
                    </div>
                </div>
            </div>

            {/* Right Section - Secondary Content Area */}
            <div className='col-span-1'>
                <div className='flex h-full items-center justify-center bg-[linear-gradient(to_right_bottom,_oklch(0.205_0_0)_0px,_oklab(0.205_0_0_/_0.95)_50%,_oklab(0.269_0_0_/_0.9)_100%)] p-1'>
                    <div
                        className={cn(
                            'flex h-full w-full items-center justify-center bg-[oklab(0.205_0_0_/_0.2)] px-6 py-16',
                            rightContentClassName
                        )}>
                        {rightContent}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Optional: Pre-styled content components for common use cases
export function SplitCardText({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn('flex flex-col space-y-2 text-6xl font-semibold text-transparent', className)}>
            {children}
        </div>
    );
}

export function SplitCardTextLine({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <span
            className={cn(
                'bg-[linear-gradient(to_top,_oklch(0.922_0_0)_0px,_oklab(0.922_0_0_/_0.95)_100%)] bg-clip-text leading-tight',
                className
            )}>
            {children}
        </span>
    );
}

export function SplitCardIconGrid({ children, className }: { children: ReactNode; className?: string }) {
    return <div className={cn('flex flex-wrap justify-center gap-4', className)}>{children}</div>;
}

export function SplitCardIcon({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <div className={cn('relative', className)}>
            <div className='absolute top-0 bottom-0 left-0 flex items-center justify-center blur-[0px]'>{children}</div>
        </div>
    );
}
