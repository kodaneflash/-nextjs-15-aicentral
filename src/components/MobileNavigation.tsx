'use client';

import { useState } from 'react';

import Link from 'next/link';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { LogIn, Menu, Moon, Sun, X } from 'lucide-react';

interface MobileNavigationProps {
    className?: string;
}

export function MobileNavigation({ className }: MobileNavigationProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className={cn('w-full text-[oklch(0.985_0_0)]', className)}>
            <div className='mx-auto max-w-7xl px-6 pt-4'>
                <div className='flex h-16 items-center justify-between rounded-lg border border-[oklch(0.3_0_0)] bg-[oklch(0.205_0_0)] px-4'>
                    {/* Left side - Logo and main navigation */}
                    <div className='flex items-center gap-8'>
                        {/* Logo */}
                        <Link
                            href='/'
                            className='flex items-center gap-3 transition-opacity hover:opacity-80'
                            aria-label='AI Central - Home'
                            onClick={closeMenu}>
                            <div className='flex items-center justify-center'>
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
                            <span className='text-sm font-medium'>AI Central</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className='hidden items-center md:flex' role='navigation'>
                            <ul className='flex items-center gap-1'>
                                <li>
                                    <Link
                                        href='/articles'
                                        className='rounded-md px-3 py-2 text-sm text-[oklch(0.708_0_0)] transition-colors hover:bg-[oklch(0.3_0_0_/_0.1)] hover:text-[oklch(0.985_0_0)]'>
                                        Articles
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Right side - Auth and theme toggle */}
                    <div className='flex items-center gap-2'>
                        {/* Login Button - Desktop */}
                        <Link href='/auth/login' className='hidden sm:block'>
                            <Button
                                variant='outline'
                                size='sm'
                                className='gap-2 border-[#424242] bg-[oklab(1_0_/_0.045)] text-xs font-medium text-[oklch(0.985_0_0)] hover:bg-[oklab(1_0_/_0.08)]'>
                                <span>Login</span>
                                <LogIn className='h-4 w-4' />
                            </Button>
                        </Link>

                        {/* Theme Toggle - Desktop */}
                        <Button
                            variant='outline'
                            size='icon'
                            onClick={toggleTheme}
                            className='hidden h-9 w-9 border-[#424242] bg-[oklab(1_0_/_0.045)] text-[oklch(0.985_0_0)] hover:bg-[oklab(1_0_/_0.08)] sm:flex'>
                            <Sun className='h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
                            <Moon className='absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
                        </Button>

                        {/* Mobile menu button */}
                        <Button
                            variant='outline'
                            size='icon'
                            onClick={toggleMenu}
                            className='border-[#424242] bg-[oklab(1_0_/_0.045)] text-[oklch(0.985_0_0)] hover:bg-[oklab(1_0_/_0.08)] md:hidden'>
                            {isOpen ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className='mx-auto max-w-7xl px-6'>
                <div
                    className={cn(
                        'mt-2 overflow-hidden rounded-lg border border-[oklch(0.3_0_0)] bg-[oklch(0.205_0_0)] transition-all duration-200 md:hidden',
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}>
                    <nav className='px-4 py-4' role='navigation' aria-label='Mobile navigation'>
                        <ul className='space-y-1'>
                            <li>
                                <Link
                                    href='/articles'
                                    className='block rounded-md px-3 py-3 text-sm text-[oklch(0.708_0_0)] transition-colors hover:bg-[oklch(0.3_0_0_/_0.1)] hover:text-[oklch(0.985_0_0)]'
                                    onClick={closeMenu}>
                                    Articles
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile Auth and Theme Controls */}
                        <div className='mt-4 flex items-center gap-2 border-t border-[oklch(0.3_0_0)] pt-4'>
                            <Link href='/auth/login' className='flex-1' onClick={closeMenu}>
                                <Button
                                    variant='outline'
                                    size='sm'
                                    className='w-full gap-2 border-[#424242] bg-[oklab(1_0_/_0.045)] text-xs font-medium text-[oklch(0.985_0_0)] hover:bg-[oklab(1_0_/_0.08)]'>
                                    <span>Login</span>
                                    <LogIn className='h-4 w-4' />
                                </Button>
                            </Link>

                            <Button
                                variant='outline'
                                size='icon'
                                onClick={toggleTheme}
                                className='h-9 w-9 border-[#424242] bg-[oklab(1_0_/_0.045)] text-[oklch(0.985_0_0)] hover:bg-[oklab(1_0_/_0.08)]'>
                                <Sun className='h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
                                <Moon className='absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
                            </Button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
