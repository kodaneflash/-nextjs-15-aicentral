interface HeroProps {
    className?: string;
}

export function Hero({ className = '' }: HeroProps) {
    return (
        <section className={`text-white ${className}`} style={{ background: 'oklch(0.145 0 0)' }}>
            <div className='px-4 pt-16 sm:px-6 md:px-8 lg:pt-20'>
                <div className='mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2'>
                    <div className='relative'>
                        <div className='relative p-0.5' style={{ background: 'rgb(24,24,24)' }}>
                            <div className='relative p-0.5' style={{ background: 'rgb(5,5,5)' }}>
                                <div className='relative p-0.5' style={{ background: 'rgb(29,29,29)' }}>
                                    <div
                                        className='flex h-[46.72rem] flex-col justify-between px-6 py-12 sm:px-8'
                                        style={{ background: 'rgb(17,17,17)' }}>
                                        <div>
                                            <div className='px-2 pt-8 font-light sm:pt-12 md:pt-16'>
                                                <div>
                                                    <div className='inline-block py-1 text-4xl tracking-wide sm:py-2 sm:text-5xl lg:text-6xl xl:text-7xl'>
                                                        <div className='flex flex-wrap justify-start'>
                                                            {['V', 'i', 'b', 'e'].map((letter, index) => (
                                                                <span
                                                                    key={index}
                                                                    className='cursor-pointer text-center'>
                                                                    <span>{letter}</span>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className='inline-block py-1 text-3xl leading-tight tracking-wide sm:py-2 sm:text-4xl lg:text-5xl xl:text-6xl'>
                                                        <div className='flex flex-wrap justify-start'>
                                                            {['M', 'a', 'r', 'k', 'e', 't', 'i', 'n', 'g'].map(
                                                                (letter, index) => (
                                                                    <span
                                                                        key={index}
                                                                        className='cursor-pointer text-center'>
                                                                        <span>{letter}</span>
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className='pb-6 text-base leading-relaxed font-light text-zinc-300 sm:text-lg lg:text-xl'>
                                                Get your brand to the next level with our Vibe Marketing platform.
                                            </p>

                                            <div className='flex flex-col gap-4 px-2 sm:flex-row sm:justify-start sm:gap-6 lg:gap-8'>
                                                <div className='relative'>
                                                    <div
                                                        className='absolute top-0 bottom-0 left-0 px-8 blur-xl sm:px-10 lg:px-12'
                                                        style={{
                                                            background:
                                                                'conic-gradient(from 352.08deg at 50% 50%, rgb(227, 54, 128), rgb(58, 199, 242), rgb(74, 222, 128), rgb(249, 238, 128), rgb(236, 72, 153), rgb(244, 151, 207), rgb(68, 230, 245), rgb(227, 54, 128), rgb(68, 232, 246), rgb(88, 76, 218))'
                                                        }}
                                                    />
                                                    <button
                                                        className='relative inline-flex h-12 w-full items-center justify-center px-6 py-3 text-center text-lg sm:h-14 sm:w-56 sm:text-xl lg:h-16 lg:w-64 lg:px-9 lg:py-5 lg:text-2xl'
                                                        style={{
                                                            color: 'oklch(0.922 0 0)',
                                                            background: 'oklab(0.145 0 0 / 0.8)'
                                                        }}>
                                                        <span className='flex items-center gap-2'>
                                                            Enter the vibe
                                                            <svg
                                                                className='h-5 w-5 sm:h-6 sm:w-6'
                                                                fill='none'
                                                                height='24'
                                                                stroke='currentColor'
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                                viewBox='0 0 24 24'
                                                                xmlns='http://www.w3.org/2000/svg'>
                                                                <path d='M5 12h14' stroke='oklch(0.922 0 0)' />
                                                                <path d='m12 5 7 7-7 7' stroke='oklch(0.922 0 0)' />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </div>

                                                <button
                                                    className='inline-flex h-12 w-full items-center justify-center px-6 py-3 text-center text-lg sm:h-14 sm:w-44 sm:text-xl lg:h-16 lg:w-48 lg:px-9 lg:py-5 lg:text-2xl'
                                                    style={{ background: 'oklab(0.269 0 0 / 0.3)' }}>
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>

                                        <div className='text-zinc-500'>
                                            <p className='inline-block text-sm sm:text-base'>
                                                <span className='inline-block text-stone-300'>W</span>
                                                <span className='inline-block text-zinc-300'>e</span>
                                                <span className='inline-block text-gray-200'>l</span>
                                                <span className='inline-block text-zinc-100'>c</span>
                                                <span className='inline-block text-zinc-50'>o</span>
                                                <span className='inline-block text-white'>m</span>
                                                <span className='inline-block text-white'>e</span>
                                                <span className='inline-block text-zinc-100'> </span>
                                                <span className='inline-block text-zinc-200'>t</span>
                                                <span className='inline-block text-stone-300'>o</span>
                                                <span className='inline-block text-zinc-400'> </span>
                                                <span className='inline-block text-neutral-400'>t</span>
                                                <span className='inline-block text-zinc-500'>h</span>
                                                <span className='inline-block'>e</span>
                                                <span className='inline-block'> </span>
                                                <span className='inline-block'>F</span>
                                                <span className='inline-block'>u</span>
                                                <span className='inline-block'>t</span>
                                                <span className='inline-block'>u</span>
                                                <span className='inline-block'>r</span>
                                                <span className='inline-block'>e</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='relative p-0.5' style={{ background: 'rgb(24,24,24)' }}>
                            <div className='relative p-0.5' style={{ background: 'rgb(5,5,5)' }}>
                                <div className='relative p-0.5' style={{ background: 'rgb(29,29,29)' }}>
                                    <div className='h-[46.72rem] w-full overflow-hidden'>
                                        <img
                                            className='h-full w-full object-cover'
                                            src='https://cult-polar-starter.vercel.app/place-3.png'
                                            alt='Futuristic person with reflective sunglasses representing the future of marketing'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
