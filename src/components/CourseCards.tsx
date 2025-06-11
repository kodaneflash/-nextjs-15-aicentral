'use client';

import { ArrowRight } from 'lucide-react';

interface CourseCard {
    id: string;
    title: string;
    description: string;
    buttonText: string;
    videoUrl: string;
    buttonHref?: string;
    onButtonClick?: () => void;
}

interface CourseCardsProps {
    courses: CourseCard[];
    className?: string;
}

export function CourseCards({ courses, className = '' }: CourseCardsProps) {
    return (
        <div className={`bg-black text-white ${className}`}>
            <div className='space-y-8'>
                {courses.map((course, index) => (
                    <CourseCardItem key={course.id} course={course} isFirst={index === 0} />
                ))}
            </div>
        </div>
    );
}

interface CourseCardItemProps {
    course: CourseCard;
    isFirst?: boolean;
}

function CourseCardItem({ course, isFirst = false }: CourseCardItemProps) {
    const handleButtonClick = () => {
        if (course.onButtonClick) {
            course.onButtonClick();
        } else if (course.buttonHref) {
            window.open(course.buttonHref, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div
            className={`overflow-hidden rounded-3xl border-2 border-solid border-gray-800 bg-neutral-900 ${
                !isFirst ? 'mt-8' : ''
            }`}>
            <div className='grid grid-cols-1 grid-rows-[31.25rem] lg:grid-cols-2'>
                {/* Content Section */}
                <div className='flex flex-col justify-center p-8 md:p-12'>
                    <h3
                        className='mb-5 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl'
                        dangerouslySetInnerHTML={{ __html: course.title }}
                    />
                    <p
                        className='mb-6 text-lg leading-relaxed text-white/70 sm:text-xl'
                        dangerouslySetInnerHTML={{ __html: course.description }}
                    />
                    <button
                        onClick={handleButtonClick}
                        className='mt-2 inline-flex h-auto min-h-[2.25rem] w-fit cursor-pointer items-center justify-center rounded-full bg-white px-8 py-3 text-center font-medium text-black transition-all duration-200 hover:scale-105 hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900 focus:outline-none'
                        aria-label={`${course.buttonText} for ${course.title.replace(/<br\s*\/?>/gi, ' ')}`}>
                        <span className='mr-2'>{course.buttonText}</span>
                        <ArrowRight className='h-4 w-4' aria-hidden='true' />
                    </button>
                </div>

                {/* Video Section */}
                <div className='relative min-h-[25rem] overflow-hidden md:min-h-[31.25rem]'>
                    <div className='h-full w-full'>
                        <video
                            className='h-full w-full object-cover'
                            src={course.videoUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-label={`Preview video for ${course.title.replace(/<br\s*\/?>/gi, ' ')}`}>
                            <source src={course.videoUrl} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                        <div
                            className='pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/90'
                            aria-hidden='true'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export individual CourseCardItem for more granular usage
export { CourseCardItem };

// Export the interface for external usage
export type { CourseCard, CourseCardsProps };
