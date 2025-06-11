import type { ReactNode } from 'react';

import type { Metadata, Viewport } from 'next';
import { Noto_Sans } from 'next/font/google';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import { MobileNavigation } from '@/components/MobileNavigation';

const notoSans = Noto_Sans({
    subsets: ['latin'],
    variable: '--font-noto-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap'
});

// Enhanced metadata configuration for better SEO
export const metadata: Metadata = {
    title: {
        default: 'AI Central - Learn AI Coding & Begin Your Solopreneur Journey',
        template: '%s | AI Central'
    },
    description:
        'Everything you need to build your SaaS or any online business—even as a complete beginner. AI Central helps you learn AI coding and AI agents by focusing on the basics that every entrepreneur should know.',
    keywords: [
        'AI coding',
        'AI agents',
        'SaaS development',
        'solopreneur',
        'entrepreneur',
        'full-stack examples',
        'AI templates',
        'business building',
        'AI learning',
        'startup tools'
    ],
    authors: [{ name: 'AI Central' }],
    creator: 'AI Central',
    publisher: 'AI Central',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aicentr.al'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        title: 'AI Central - Learn AI Coding & Begin Your Solopreneur Journey',
        description:
            'Everything you need to build your SaaS or any online business—even as a complete beginner. Full-stack examples, ready-to-use templates, and easy lessons that let AI do the hard work.',
        siteName: 'AI Central',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'AI Central - Learn AI Coding & Begin Your Solopreneur Journey'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Central - Learn AI Coding & Begin Your Solopreneur Journey',
        description:
            'Everything you need to build your SaaS or any online business—even as a complete beginner. Join our community of builders and create useful products faster than ever.',
        images: ['/og-image.png'],
        creator: '@aicentral'
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
            <body className={`${notoSans.variable} font-sans antialiased`}>
                <ThemeProvider attribute='class'>
                    <MobileNavigation />
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
