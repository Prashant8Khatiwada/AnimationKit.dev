'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    ArrowRight,
    Package,
    Code,
    Sparkles,
    Zap,
    BookOpen,
    Settings,
    Accessibility,
    TrendingUp
} from 'lucide-react';

const docSections = [
    {
        icon: Package,
        title: 'Installation',
        description: 'Get started with AnimationKit in your project',
        href: '/docs/installation',
    },
    {
        icon: Code,
        title: 'Usage Guide',
        description: 'Learn how to use animations in your components',
        href: '/docs/usage',
    },
    {
        icon: BookOpen,
        title: 'Component API',
        description: 'Complete reference for all animation components',
        href: '/docs/components',
    },
    {
        icon: Settings,
        title: 'Customization',
        description: 'Customize animations to match your design',
        href: '/docs/customization',
    },
    {
        icon: TrendingUp,
        title: 'Performance',
        description: 'Best practices for optimal performance',
        href: '/docs/performance',
    },
    {
        icon: Accessibility,
        title: 'Accessibility',
        description: 'Making animations accessible to everyone',
        href: '/docs/accessibility',
    },
];

const quickStart = `# Install the package
npm install @khatiwadaprashant/react-animation-kit

# Import and use
import { FadeInUp } from '@khatiwadaprashant/react-animation-kit';

function App() {
  return (
    <FadeInUp>
      <h1>Hello, AnimationKit!</h1>
    </FadeInUp>
  );
}`;

export default function DocsPage() {
    return (
        <div className="py-12 md:py-20">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Documentation
                    </h1>
                    <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
                        Everything you need to know about using AnimationKit in your React and Next.js projects
                    </p>
                </motion.div>

                {/* Quick Start */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="mb-16"
                >
                    <Card className="max-w-3xl mx-auto">
                        <div className="flex items-center mb-4">
                            <Zap className="w-6 h-6 text-[rgb(var(--primary-purple))] mr-2" />
                            <h2 className="text-2xl font-bold">Quick Start</h2>
                        </div>
                        <pre className="bg-[rgb(var(--bg-secondary))] p-4 rounded-lg overflow-x-auto mb-4">
                            <code className="text-sm font-mono">{quickStart}</code>
                        </pre>
                        <Link href="/docs/installation">
                            <Button>
                                View Full Installation Guide
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </Card>
                </motion.div>

                {/* Features */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <Card className="text-center">
                            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">100+ Animations</h3>
                            <p className="text-[rgb(var(--text-secondary))]">
                                Comprehensive library covering all animation needs
                            </p>
                        </Card>
                        <Card className="text-center">
                            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Zero Config</h3>
                            <p className="text-[rgb(var(--text-secondary))]">
                                Works out of the box with sensible defaults
                            </p>
                        </Card>
                        <Card className="text-center">
                            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-4">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
                            <p className="text-[rgb(var(--text-secondary))]">
                                Full TypeScript support with type definitions
                            </p>
                        </Card>
                    </div>
                </motion.div>

                {/* Documentation Sections */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-8">Explore the Docs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {docSections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                                >
                                    <Link href={section.href}>
                                        <Card className="h-full group cursor-pointer">
                                            <div className="w-12 h-12 rounded-lg bg-[rgb(var(--primary-purple))]/10 flex items-center justify-center mb-4 group-hover:bg-[rgb(var(--primary-purple))]/20 transition-colors">
                                                <Icon className="w-6 h-6 text-[rgb(var(--primary-purple))]" />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-[rgb(var(--primary-purple))] transition-colors">
                                                {section.title}
                                            </h3>
                                            <p className="text-[rgb(var(--text-secondary))] mb-4">
                                                {section.description}
                                            </p>
                                            <div className="flex items-center text-[rgb(var(--primary-purple))] font-medium">
                                                Learn more
                                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </Card>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Help Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-16"
                >
                    <Card className="max-w-3xl mx-auto text-center bg-linear-to-br from-[rgb(var(--primary-purple))]/10 to-[rgb(var(--accent-cyan))]/10 border-[rgb(var(--primary-purple))]/20">
                        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                        <p className="text-[rgb(var(--text-secondary))] mb-6">
                            Can&apos;t find what you&apos;re looking for? Check out our GitHub repository or join our community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/khatiwadaprashant/react-animation-kit"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="secondary">
                                    View on GitHub
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <Link href="/playground">
                                <Button>
                                    Try Playground
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
