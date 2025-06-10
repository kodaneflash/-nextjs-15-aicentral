'use client';

import Link from 'next/link';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { LogIn, Moon, Sun } from 'lucide-react';

interface NavigationProps {
    className?: string;
}

export function Navigation({ className }: NavigationProps) {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header
            className={cn(
                'w-full border-b border-[oklch(0.3_0_0)] bg-[oklch(0.205_0_0)] text-[oklch(0.985_0_0)]',
                className
            )}>
            <div className='container mx-auto px-4'>
                <div className='flex h-16 items-center justify-between'>
                    {/* Left side - Logo and main navigation */}
                    <div className='flex items-center gap-8'>
                        {/* Logo */}
                        <Link
                            href='/'
                            className='flex items-center gap-3 transition-opacity hover:opacity-80'
                            aria-label='AI Central - Home'>
                            <div className='flex items-center justify-center'>
                                <div className='relative'>
                                    {/* Complex layered logo design */}
                                    <div className='rounded-sm bg-gradient-to-br from-[oklab(0.718_0.198783_-0.0359065_/_0.1)] via-[oklab(0.718_0.198783_-0.0359065_/_0.2)] to-[oklab(0.718_0.198783_-0.0359065_/_0.3)] p-1'>
                                        <div className='rounded-sm bg-[oklab(0.718_0.198783_-0.0359065_/_0.3)] p-1'>
                                            <div className='rounded-sm bg-[oklch(0.205_0_0)] p-1'>
                                                <div className='rounded-sm bg-[oklab(0.718_0.198783_-0.0359065_/_0.5)] p-1'>
                                                    <div className='h-3 w-3 rounded-sm bg-[oklch(0.205_0_0)]' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className='text-sm font-medium'>AI Central</span>
                        </Link>

                        {/* Main Navigation */}
                        <nav className='hidden items-center md:flex' role='navigation' aria-label='Main navigation'>
                            <ul className='flex items-center gap-1'>
                                <li>
                                    <Link
                                        href='/blog'
                                        className='rounded-md px-3 py-2 text-sm text-[oklch(0.708_0_0)] transition-colors hover:bg-[oklch(0.3_0_0_/_0.1)] hover:text-[oklch(0.985_0_0)]'>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/about'
                                        className='rounded-md px-3 py-2 text-sm text-[oklch(0.708_0_0)] transition-colors hover:bg-[oklch(0.3_0_0_/_0.1)] hover:text-[oklch(0.985_0_0)]'>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/pricing'
                                        className='rounded-md px-3 py-2 text-sm text-[oklch(0.708_0_0)] transition-colors hover:bg-[oklch(0.3_0_0_/_0.1)] hover:text-[oklch(0.985_0_0)]'>
                                        Pricing
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Right side - Auth and theme toggle */}
                    <div className='flex items-center gap-2'>
                        {/* Login Button */}
                        <Link href='/auth/login'>
                            <Button
                                variant='outline'
                                size='sm'
                                className='gap-2 border-[oklch(1_0.15)] bg-[oklab(1_0_/_0.045)] text-xs font-medium text-[oklch(0.985_0_0)] hover:bg-[oklab(1_0_/_0.08)]'>
                                <span>Login</span>
                                <LogIn className='h-4 w-4' />
                            </Button>
                        </Link>

                        {/* Theme Toggle */}
                        <Button
                            variant='outline'
                            size='icon'
                            onClick={toggleTheme}
                            className='h-9 w-9 border-[oklch(1_0.15)] bg-[oklab(1_0_/_0.045)] text-[oklch(0.985_0_0)] hover:bg-[oklab(1_0_/_0.08)]'
                            aria-label='Toggle theme'>
                            <Sun className='h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
                            <Moon className='absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
                        </Button>

                        {/* Mobile menu button */}
                        <Button
                            variant='outline'
                            size='icon'
                            className='border-[oklch(1_0.15)] bg-[oklab(1_0_/_0.045)] text-[oklch(0.985_0_0)] hover:bg-[oklab(1_0_/_0.08)] md:hidden'
                            aria-label='Open menu'>
                            <svg
                                className='h-4 w-4'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation Menu (hidden by default, would need mobile menu state) */}
                <nav
                    className='border-t border-[oklch(0.3_0_0)] py-4 md:hidden'
                    role='navigation'
                    aria-label='Mobile navigation'>
                    <ul className='space-y-2'>
                        <li>
                            <Link
                                href='/blog'
                                className='block rounded-md px-3 py-2 text-sm text-[oklch(0.708_0_0)] transition-colors hover:bg-[oklch(0.3_0_0_/_0.1)] hover:text-[oklch(0.985_0_0)]'>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/about'
                                className='block rounded-md px-3 py-2 text-sm text-[oklch(0.708_0_0)] transition-colors hover:bg-[oklch(0.3_0_0_/_0.1)] hover:text-[oklch(0.985_0_0)]'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/pricing'
                                className='block rounded-md px-3 py-2 text-sm text-[oklch(0.708_0_0)] transition-colors hover:bg-[oklch(0.3_0_0_/_0.1)] hover:text-[oklch(0.985_0_0)]'>
                                Pricing
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
