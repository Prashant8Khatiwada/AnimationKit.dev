'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code, Package, Github, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useState } from 'react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance with minimal bundle size. Only load what you need.',
  },
  {
    icon: Sparkles,
    title: '100+ Animations',
    description: 'Comprehensive library of entrance, exit, hover, and interactive animations.',
  },
  {
    icon: Code,
    title: 'Zero Config',
    description: 'Works out of the box. No complex setup or configuration required.',
  },
  {
    icon: Package,
    title: 'Fully Modular',
    description: 'Import only the animations you need. Tree-shakeable and optimized.',
  },
];

const stats = [
  { label: 'Animations', value: '100+' },
  { label: 'Bundle Size', value: '<10KB' },
  { label: 'Downloads', value: '10K+' },
  { label: 'GitHub Stars', value: '500+' },
];

const codeExample = `import { FadeInUp, SlideIn } from '@khatiwadaprashant/react-animation-kit';

function App() {
  return (
    <div>
      <FadeInUp duration={0.6}>
        <h1>Welcome to AnimationKit</h1>
      </FadeInUp>
      
      <SlideIn direction="left" delay={0.2}>
        <p>Beautiful animations made simple</p>
      </SlideIn>
    </div>
  );
}`;

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const copyInstallCommand = () => {
    navigator.clipboard.writeText('npm install @khatiwadaprashant/react-animation-kit');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(var(--primary-purple))]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgb(var(--accent-cyan))]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-block mb-6"
            >
              <Badge className="text-sm px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                100+ Beautiful Animations
              </Badge>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            >
              <span className="gradient-text">AnimationKit</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-[rgb(var(--text-secondary))] mb-8 max-w-2xl mx-auto"
            >
              The lightweight React & Next.js animation library
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-[rgb(var(--text-tertiary))] mb-12 max-w-2xl mx-auto"
            >
              Beautiful, performant animations with zero configuration. Built for modern React applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link href="/docs">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/animations">
                <Button variant="secondary" size="lg">
                  View Animations
                </Button>
              </Link>
            </motion.div>

            {/* Install Command */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-[rgb(var(--bg-secondary))] border border-[rgb(var(--border-color))] rounded-lg p-4 flex items-center justify-between">
                <code className="text-sm md:text-base font-mono text-[rgb(var(--text-primary))]">
                  npm install @khatiwadaprashant/react-animation-kit
                </code>
                <button
                  onClick={copyInstallCommand}
                  className="ml-4 p-2 hover:bg-[rgb(var(--bg-tertiary))] rounded transition-colors"
                  aria-label="Copy install command"
                >
                  {copied ? (
                    <Check className="h-5 w-5 text-[rgb(var(--success))]" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-[rgb(var(--border-color))] bg-[rgb(var(--bg-secondary))]/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[rgb(var(--text-tertiary))]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why AnimationKit?
            </h2>
            <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
              Everything you need to add beautiful animations to your React applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full">
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-[rgb(var(--text-secondary))]">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-20 md:py-32 bg-[rgb(var(--bg-secondary))]/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple & Intuitive API
              </h2>
              <p className="text-lg text-[rgb(var(--text-secondary))] mb-6">
                Get started in seconds with our easy-to-use component API. No complex configuration needed.
              </p>
              <Link href="/docs">
                <Button>
                  Read Documentation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <pre className="bg-[rgb(var(--bg-primary))] border border-[rgb(var(--border-color))] rounded-lg p-6 overflow-x-auto">
                <code className="text-sm font-mono">{codeExample}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-[rgb(var(--text-secondary))] mb-8">
              Join thousands of developers using AnimationKit to create beautiful, animated experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/docs">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="https://github.com/khatiwadaprashant/react-animation-kit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
