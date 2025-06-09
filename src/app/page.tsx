import BlogCarousel from '@/components/BlogCarousel';

export default function Page() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-24'>
            <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm'>
                <h1 className='text-4xl font-bold'>Welcome to Next.js 15</h1>
                <p className='mt-4 text-lg'>Start editing this page to build your app.</p>
            </div>
            <BlogCarousel />
        </main>
    );
}
