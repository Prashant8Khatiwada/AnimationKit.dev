import Link from 'next/link';
import { Github, Package, Twitter, Heart } from 'lucide-react';

const footerLinks = {
    product: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Animations', href: '/animations' },
        { name: 'Playground', href: '/playground' },
        { name: 'About', href: '/about' },
    ],
    resources: [
        { name: 'Getting Started', href: '/docs' },
        { name: 'Installation', href: '/docs/installation' },
        { name: 'Usage Guide', href: '/docs/usage' },
        { name: 'API Reference', href: '/docs/components' },
    ],
    community: [
        { name: 'GitHub', href: 'https://github.com/khatiwadaprashant/react-animation-kit' },
        { name: 'npm Package', href: 'https://www.npmjs.com/package/@khatiwadaprashant/react-animation-kit' },
        { name: 'Contributing', href: '/about#contributing' },
        { name: 'Changelog', href: '/about#changelog' },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-[rgb(var(--border-color))] bg-[rgb(var(--bg-primary))]">
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold gradient-text">AnimationKit</h3>
                        <p className="text-sm text-[rgb(var(--text-tertiary))]">
                            The lightweight React & Next.js animation library. 100+ beautiful animations, zero configuration.
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="https://github.com/khatiwadaprashant/react-animation-kit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.npmjs.com/package/@khatiwadaprashant/react-animation-kit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] transition-colors"
                                aria-label="npm"
                            >
                                <Package className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Community</h4>
                        <ul className="space-y-2">
                            {footerLinks.community.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="text-sm text-[rgb(var(--text-tertiary))] hover:text-[rgb(var(--text-primary))] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-[rgb(var(--border-color))] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-[rgb(var(--text-tertiary))]">
                        © {new Date().getFullYear()} AnimationKit. All rights reserved.
                    </p>
                    <p className="text-sm text-[rgb(var(--text-tertiary))] flex items-center">
                        Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> by the AnimationKit team
                    </p>
                </div>
            </div>
        </footer>
    );
}
