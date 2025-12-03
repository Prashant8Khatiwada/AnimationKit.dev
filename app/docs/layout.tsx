import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation',
    description: 'Complete documentation for AnimationKit - Learn how to use the library',
};

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
}
