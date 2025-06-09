import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog CMS Studio',
    description: 'Content management for the blog',
    robots: 'noindex'
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return <div style={{ margin: 0, height: '100vh' }}>{children}</div>;
}
