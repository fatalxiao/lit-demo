/**
 * @file layout.tsx
 */

// Styles
import '../styles/globals.css';

// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lit in Next.js App Router',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
