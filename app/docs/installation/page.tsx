'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Terminal, Package, CheckCircle } from 'lucide-react';

const installMethods = [
    {
        name: 'npm',
        command: 'npm install @khatiwadaprashant/react-animation-kit',
        icon: Package,
    },
    {
        name: 'yarn',
        command: 'yarn add @khatiwadaprashant/react-animation-kit',
        icon: Package,
    },
    {
        name: 'pnpm',
        command: 'pnpm add @khatiwadaprashant/react-animation-kit',
        icon: Package,
    },
];

export default function InstallationPage() {
    return (
        <div className="py-12 md:py-20">
            <div className="container-custom max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Installation</h1>
                    <p className="text-lg text-[rgb(var(--text-secondary))] mb-8">
                        Get started with AnimationKit in your React or Next.js project
                    </p>

                    {/* Requirements */}
                    <Card className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-[rgb(var(--success))] mr-2" />
                                <span>React 18.0 or higher</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-[rgb(var(--success))] mr-2" />
                                <span>Next.js 13+ (optional, for Next.js projects)</span>
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-[rgb(var(--success))] mr-2" />
                                <span>Framer Motion (peer dependency)</span>
                            </div>
                        </div>
                    </Card>

                    {/* Installation Methods */}
                    <h2 className="text-2xl font-bold mb-4">Choose Your Package Manager</h2>
                    <div className="space-y-4 mb-8">
                        {installMethods.map((method) => {
                            const Icon = method.icon;
                            return (
                                <Card key={method.name}>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center">
                                            <Icon className="w-5 h-5 text-[rgb(var(--primary-purple))] mr-2" />
                                            <Badge>{method.name}</Badge>
                                        </div>
                                    </div>
                                    <div className="bg-[rgb(var(--bg-secondary))] p-4 rounded-lg font-mono text-sm">
                                        {method.command}
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Peer Dependencies */}
                    <Card className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Install Peer Dependencies</h2>
                        <p className="text-[rgb(var(--text-secondary))] mb-4">
                            AnimationKit requires Framer Motion as a peer dependency. Install it if you haven't already:
                        </p>
                        <div className="bg-[rgb(var(--bg-secondary))] p-4 rounded-lg font-mono text-sm">
                            npm install framer-motion
                        </div>
                    </Card>

                    {/* Next.js Setup */}
                    <Card className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Next.js Setup</h2>
                        <p className="text-[rgb(var(--text-secondary))] mb-4">
                            For Next.js projects, no additional configuration is needed. AnimationKit works seamlessly with both Pages Router and App Router.
                        </p>
                        <div className="bg-[rgb(var(--info))]/10 border border-[rgb(var(--info))]/20 rounded-lg p-4">
                            <p className="text-sm">
                                <strong>💡 Tip:</strong> When using the App Router, make sure to add 'use client' directive to components that use animations.
                            </p>
                        </div>
                    </Card>

                    {/* Verification */}
                    <Card>
                        <h2 className="text-2xl font-bold mb-4">Verify Installation</h2>
                        <p className="text-[rgb(var(--text-secondary))] mb-4">
                            Test your installation with this simple example:
                        </p>
                        <pre className="bg-[rgb(var(--bg-secondary))] p-4 rounded-lg overflow-x-auto text-sm mb-4">
                            <code>{`import { FadeInUp } from '@khatiwadaprashant/react-animation-kit';

function App() {
  return (
    <FadeInUp>
      <h1>Hello, AnimationKit!</h1>
    </FadeInUp>
  );
}

export default App;`}</code>
                        </pre>
                        <div className="bg-[rgb(var(--success))]/10 border border-[rgb(var(--success))]/20 rounded-lg p-4">
                            <p className="text-sm">
                                <strong>✅ Success!</strong> If you see your content with a smooth fade-in animation, you're all set!
                            </p>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
