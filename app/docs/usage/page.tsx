'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function UsagePage() {
    return (
        <div className="py-12 md:py-20">
            <div className="container-custom max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Usage Guide</h1>
                    <p className="text-lg text-[rgb(var(--text-secondary))] mb-8">
                        Learn how to use AnimationKit components in your React applications
                    </p>

                    {/* Basic Usage */}
                    <Card className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Basic Usage</h2>
                        <p className="text-[rgb(var(--text-secondary))] mb-4">
                            Import any animation component and wrap your content:
                        </p>
                        <pre className="bg-[rgb(var(--bg-secondary))] p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`import { FadeInUp, SlideIn } from '@khatiwadaprashant/react-animation-kit';

function MyComponent() {
  return (
    <div>
      <FadeInUp>
        <h1>This fades in from below</h1>
      </FadeInUp>
      
      <SlideIn direction="left">
        <p>This slides in from the left</p>
      </SlideIn>
    </div>
  );
}`}</code>
                        </pre>
                    </Card>

                    {/* Props */}
                    <Card className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Common Props</h2>
                        <p className="text-[rgb(var(--text-secondary))] mb-4">
                            Most animation components accept these common props:
                        </p>
                        <div className="space-y-4">
                            <div className="border-l-4 border-[rgb(var(--primary-purple))] pl-4">
                                <div className="flex items-center mb-2">
                                    <code className="font-mono text-sm mr-2">duration</code>
                                    <Badge variant="info">number</Badge>
                                </div>
                                <p className="text-sm text-[rgb(var(--text-secondary))]">
                                    Animation duration in seconds (default: 0.5)
                                </p>
                            </div>
                            <div className="border-l-4 border-[rgb(var(--primary-purple))] pl-4">
                                <div className="flex items-center mb-2">
                                    <code className="font-mono text-sm mr-2">delay</code>
                                    <Badge variant="info">number</Badge>
                                </div>
                                <p className="text-sm text-[rgb(var(--text-secondary))]">
                                    Delay before animation starts in seconds (default: 0)
                                </p>
                            </div>
                            <div className="border-l-4 border-[rgb(var(--primary-purple))] pl-4">
                                <div className="flex items-center mb-2">
                                    <code className="font-mono text-sm mr-2">easing</code>
                                    <Badge variant="info">string</Badge>
                                </div>
                                <p className="text-sm text-[rgb(var(--text-secondary))]">
                                    Easing function (e.g., &quot;easeOut&quot;, &quot;easeInOut&quot;)
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Examples */}
                    <Card className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Examples</h2>

                        <h3 className="text-xl font-semibold mb-3">Customizing Duration and Delay</h3>
                        <pre className="bg-[rgb(var(--bg-secondary))] p-4 rounded-lg overflow-x-auto text-sm mb-6">
                            <code>{`<FadeInUp duration={0.8} delay={0.2}>
  <div>Custom timing</div>
</FadeInUp>`}</code>
                        </pre>

                        <h3 className="text-xl font-semibold mb-3">Staggered Animations</h3>
                        <pre className="bg-[rgb(var(--bg-secondary))] p-4 rounded-lg overflow-x-auto text-sm mb-6">
                            <code>{`<StaggerChildren staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggerChildren>`}</code>
                        </pre>

                        <h3 className="text-xl font-semibold mb-3">Hover Animations</h3>
                        <pre className="bg-[rgb(var(--bg-secondary))] p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`<HoverLift>
  <button>Hover me!</button>
</HoverLift>`}</code>
                        </pre>
                    </Card>

                    {/* Next.js Specific */}
                    <Card className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Next.js App Router</h2>
                        <p className="text-[rgb(var(--text-secondary))] mb-4">
                            When using Next.js App Router, add the &apos;use client&apos; directive:
                        </p>
                        <pre className="bg-[rgb(var(--bg-secondary))] p-4 rounded-lg overflow-x-auto text-sm">
                            <code>{`'use client';

import { FadeInUp } from '@khatiwadaprashant/react-animation-kit';

export default function MyPage() {
  return (
    <FadeInUp>
      <h1>Client Component with Animation</h1>
    </FadeInUp>
  );
}`}</code>
                        </pre>
                    </Card>

                    {/* Best Practices */}
                    <Card>
                        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-[rgb(var(--primary-purple))] mr-2">•</span>
                                <span>Use animations sparingly - too many can overwhelm users</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[rgb(var(--primary-purple))] mr-2">•</span>
                                <span>Keep durations short (0.3-0.6s) for better UX</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[rgb(var(--primary-purple))] mr-2">•</span>
                                <span>Respect user preferences with prefers-reduced-motion</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[rgb(var(--primary-purple))] mr-2">•</span>
                                <span>Test animations on different devices and browsers</span>
                            </li>
                        </ul>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
