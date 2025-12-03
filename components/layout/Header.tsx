'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Github, Package } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
    { name: 'Docs', href: '/docs' },
    { name: 'Animations', href: '/animations' },
    { name: 'Playground', href: '/playground' },
    { name: 'About', href: '/about' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[rgb(var(--border-color))] bg-[rgb(var(--bg-primary))]/80 backdrop-blur-lg">
            <nav className="container-custom flex items-center justify-between py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <Image
                        src="/branding/logo-icon.svg"
                        alt="AnimationKit"
                        width={32}
                        height={32}
                        className="transition-transform group-hover:scale-110"
                    />
                    <span className="text-xl font-bold gradient-text hidden sm:inline-block">
                        AnimationKit
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-2">
                    {/* GitHub Link */}
                    <a
                        href="https://github.com/khatiwadaprashant/react-animation-kit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost p-2 rounded-lg"
                        aria-label="GitHub"
                    >
                        <Github className="h-5 w-5" />
                    </a>

                    {/* npm Link */}
                    <a
                        href="https://www.npmjs.com/package/@khatiwadaprashant/react-animation-kit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost p-2 rounded-lg"
                        aria-label="npm"
                    >
                        <Package className="h-5 w-5" />
                    </a>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden btn-ghost p-2 rounded-lg"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-[rgb(var(--border-color))] bg-[rgb(var(--bg-primary))]">
                    <div className="container-custom py-4 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2 rounded-lg text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-secondary))] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
