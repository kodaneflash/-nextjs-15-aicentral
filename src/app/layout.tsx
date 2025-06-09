import type { ReactNode } from 'react';

import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

// Enhanced metadata configuration for better SEO
export const metadata: Metadata = {
    title: {
        default: 'Next.js 15 Starter - Modern Web Development',
        template: '%s | Next.js 15 Starter'
    },
    description:
        'A modern web development blog powered by Next.js 15, featuring insights, tutorials, and best practices for modern web development.',
    keywords: ['Next.js', 'React', 'TypeScript', 'Web Development', 'Blog', 'Tutorials'],
    authors: [{ name: 'Your Name' }],
    creator: 'Your Name',
    publisher: 'Next.js 15 Starter',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        title: 'AI Central - Learn AI Coding & Begin your Soloprenuer Journey',
        description:
            'A modern web development blog powered by Next.js 15, featuring insights, tutorials, and best practices.',
        siteName: 'Next.js 15 Starter',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Next.js 15 Starter - Modern Web Development'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Next.js 15 Starter - Modern Web Development',
        description:
            'A modern web development blog powered by Next.js 15, featuring insights, tutorials, and best practices.',
        images: ['/og-image.png'],
        creator: '@yourtwitterhandle'
    },
    robots: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    }
};

// Separate viewport export as required by Next.js 15
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ]
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}>
                <ThemeProvider attribute='class'>{children}</ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
