import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'AnimationKit - The Lightweight React & Next.js Animation Library',
    template: '%s | AnimationKit',
  },
  description:
    'AnimationKit is a lightweight, performant React and Next.js animation library with 100+ beautiful animations. Zero configuration, fully customizable, and accessibility-first.',
  keywords: [
    'react',
    'nextjs',
    'animation',
    'framer-motion',
    'animation library',
    'react animations',
    'nextjs animations',
    'web animations',
    'ui animations',
  ],
  authors: [{ name: 'AnimationKit Team' }],
  creator: 'AnimationKit',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://animationkit.dev',
    title: 'AnimationKit - The Lightweight React & Next.js Animation Library',
    description:
      'AnimationKit is a lightweight, performant React and Next.js animation library with 100+ beautiful animations.',
    siteName: 'AnimationKit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnimationKit - The Lightweight React & Next.js Animation Library',
    description:
      'AnimationKit is a lightweight, performant React and Next.js animation library with 100+ beautiful animations.',
    creator: '@animationkit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
