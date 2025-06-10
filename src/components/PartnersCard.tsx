import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface PartnerLogo {
    id: string;
    content: ReactNode;
    alt?: string;
}

interface PartnersCardProps {
    title?: string;
    subtitle?: string;
    logos?: PartnerLogo[];
    className?: string;
}

export function PartnersCard({
    title = 'Join the best.',
    subtitle = 'Meet our partners.',
    logos = [],
    className
}: PartnersCardProps) {
    // Default logos if none provided
    const defaultLogos: PartnerLogo[] = [
        {
            id: 'typescript',
            content: (
                <svg
                    className='h-20 w-32 object-contain'
                    fill='rgb(0, 0, 0)'
                    height='256'
                    preserveAspectRatio='xMidYMid'
                    viewBox='0 0 256 256'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-label='TypeScript'>
                    <path
                        d='M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z'
                        fill='rgb(49, 120, 198)'
                    />
                    <path
                        d='M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z'
                        fill='rgb(255, 255, 255)'
                    />
                </svg>
            ),
            alt: 'TypeScript'
        },
        {
            id: 'bmw',
            content: (
                <svg
                    className='h-20 w-32 object-contain'
                    fill='rgb(0, 0, 0)'
                    height='800px'
                    viewBox='0 0 498.503 498.503'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-label='BMW'>
                    <path
                        d='M249.251 498.503c66.577 0 129.168-25.928 176.247-73.005 47.077-47.078 73.005-109.67 73.005-176.247 0-66.576-25.928-129.168-73.005-176.246C378.42 25.927 315.828 0 249.251 0 111.813 0 0 111.813 0 249.251c0 66.577 25.927 129.169 73.005 176.247 47.078 47.077 109.67 73.005 176.246 73.005z'
                        fill='rgb(0, 0, 0)'
                    />
                    <path
                        d='M8.624 249.251c0-64.272 25.03-124.699 70.479-170.148 45.449-45.45 105.875-70.479 170.148-70.479s124.7 25.029 170.148 70.479c45.449 45.449 70.479 105.875 70.479 170.148 0 132.683-107.945 240.628-240.627 240.628-64.273 0-124.699-25.03-170.148-70.479C33.654 373.95 8.624 313.524 8.624 249.251z'
                        fill='rgb(255, 255, 255)'
                    />
                    <path
                        d='M249.251 18.541c-127.416 0-230.71 103.294-230.71 230.71s103.294 230.711 230.71 230.711c127.416 0 230.71-103.295 230.71-230.711s-103.294-230.71-230.71-230.71z'
                        fill='rgb(0, 0, 0)'
                    />
                    <path
                        d='M249.251 396.621c-81.389 0-147.37-65.98-147.37-147.37 0-81.389 65.981-147.37 147.37-147.37 81.389 0 147.37 65.981 147.37 147.37 0 81.39-65.98 147.37-147.37 147.37z'
                        fill='rgb(255, 255, 255)'
                    />
                    <path
                        d='M111.362 249.251h137.889V111.362c-76.153 0-137.889 61.737-137.889 137.889zm137.889 0v137.89c76.153 0 137.889-61.736 137.889-137.89H249.251z'
                        fill='rgb(0, 0, 0)'
                    />
                    <path
                        d='M140.952 108.643c-4.885-4.748-12.436-6.179-19.525-1.784 1.354-3.509.801-7.09.082-9.066-3.054-5.569-4.12-6.266-6.637-8.378-8.148-6.837-16.723-1-22.856 6.309l-29.632 35.313 46.581 39.087 31.249-37.24c7.14-8.509 8.244-16.945.738-24.241zm116.018-16.78l15.997-42.401v42.401h12.158V31.137h-18.267l-16.615 43.479h.172L233.8 31.137h-18.266v60.726h12.157V49.462l15.998 42.401h13.281zm163.46 25.264l-22.89 32.407 35.486-16.847 9.396 11.603-55.854 27.075-11.027-13.727 21.969-32.123-.13-.161-35.989 14.81-11.135-13.64 38.097-49.004 9.396 11.603-23.857 31.208 36.458-15.652 10.08 12.448z'
                        fill='rgb(255, 255, 255)'
                    />
                    <path
                        d='M98.491 104.464c2.062-2.458 6.722-2.357 9.719.157 3.295 2.765 3.303 6.685 1.09 9.321l-17.597 20.971-11.01-9.239 17.798-21.21zm31.309 24.739l-18.553 22.11-11.634-9.762 18.703-22.29c2.112-2.517 6.821-3.25 9.997-.584 3.595 3.015 3.951 7.59 1.487 10.526z'
                        fill='rgb(0, 0, 0)'
                    />
                </svg>
            ),
            alt: 'BMW'
        },
        {
            id: 'nuxt',
            content: (
                <svg
                    className='h-20 w-32 object-contain'
                    fill='none'
                    height='113'
                    viewBox='0 0 109 113'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-label='Nuxt'>
                    <defs>
                        <linearGradient
                            id='gradient-a'
                            gradientUnits='userSpaceOnUse'
                            x1='53.974'
                            x2='94.163'
                            y1='54.974'
                            y2='71.829'>
                            <stop stopColor='#249361' />
                            <stop offset='1' stopColor='#3ECF8E' />
                        </linearGradient>
                        <linearGradient
                            id='gradient-b'
                            gradientUnits='userSpaceOnUse'
                            x1='36.156'
                            x2='54.484'
                            y1='30.578'
                            y2='65.081'>
                            <stop />
                            <stop offset='1' stopOpacity='0' />
                        </linearGradient>
                    </defs>
                    <path
                        d='M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z'
                        fill='url("#gradient-a")'
                    />
                    <path
                        d='M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z'
                        fill='url("#gradient-b")'
                        fillOpacity='.2'
                    />
                    <path
                        d='M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z'
                        fill='rgb(62, 207, 142)'
                    />
                </svg>
            ),
            alt: 'Nuxt'
        }
    ];

    const displayLogos = logos.length > 0 ? logos : defaultLogos;

    return (
        <section
            className={cn(
                'grid grid-cols-[413.328px_413.328px_413.336px] grid-rows-[19.75rem] gap-4 bg-[oklch(0.145_0_0)] text-[oklch(0.985_0_0)]',
                className
            )}>
            {/* Logos Section - spans 2 columns */}
            <div className='col-span-2'>
                <div className='relative flex items-center justify-center bg-[linear-gradient(to_right_bottom,_oklch(0.205_0_0)_0px,_oklab(0.205_0_0_/_0.95)_50%,_oklab(0.269_0_0_/_0.9)_100%)] p-1'>
                    <div className='flex flex-col items-center justify-center bg-[oklab(0.205_0_0_/_0.5)] px-4 py-16'>
                        <div className='flex gap-4'>
                            {displayLogos.map((logo) => (
                                <div key={logo.id} className='relative'>
                                    <div className='absolute top-0 bottom-0 left-0 flex items-center justify-center blur-[0px]'>
                                        {logo.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Text Section - spans 1 column */}
            <div className='col-span-1 text-6xl font-semibold text-transparent'>
                <div className='flex h-full items-center justify-center bg-[linear-gradient(to_right_bottom,_oklch(0.205_0_0)_0px,_oklab(0.205_0_0_/_0.95)_50%,_oklab(0.269_0_0_/_0.9)_100%)] p-1'>
                    <div className='flex h-full items-center justify-center bg-[oklab(0.205_0_0_/_0.2)] px-6 py-16'>
                        <div className='flex flex-col space-y-2'>
                            <span className='bg-[linear-gradient(to_top,_oklch(0.922_0_0)_0px,_oklab(0.922_0_0_/_0.95)_100%)] bg-clip-text leading-tight'>
                                {title}
                            </span>
                            <span className='bg-[linear-gradient(to_top,_oklch(0.922_0_0)_0px,_oklab(0.922_0_0_/_0.95)_100%)] bg-clip-text leading-tight'>
                                {subtitle}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
