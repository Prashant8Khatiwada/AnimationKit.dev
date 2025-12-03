'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Heart, Github } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="py-12 md:py-20">
            <div className="container-custom max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About AnimationKit</h1>
                    <p className="text-lg text-[rgb(var(--text-secondary))] mb-8">
                        Learn about the philosophy behind AnimationKit and how to contribute
                    </p>

                    {/* Philosophy */}
                    <Card className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
                        <div className="space-y-4 text-[rgb(var(--text-secondary))]">
                            <p>
                                AnimationKit was built with a simple goal: make beautiful animations accessible to every React developer, regardless of their experience level.
                            </p>
                            <p>
                                We believe that animations should be:
                            </p>
                            <ul className="space-y-2 ml-6">
                                <li className="flex items-start">
                                    <span className="text-[rgb(var(--primary-purple))] mr-2">•</span>
                                    <span><strong>Simple</strong> - Easy to use with minimal configuration</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[rgb(var(--primary-purple))] mr-2">•</span>
                                    <span><strong>Performant</strong> - Optimized for 60fps on all devices</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[rgb(var(--primary-purple))] mr-2">•</span>
                                    <span><strong>Accessible</strong> - Respect user preferences and accessibility needs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[rgb(var(--primary-purple))] mr-2">•</span>
                                    <span><strong>Customizable</strong> - Flexible enough for any design system</span>
                                </li>
                            </ul>
                        </div>
                    </Card>

                    {/* Design Principles */}
                    <Card className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Design Principles</h2>
                        <div className="space-y-4">
                            <div className="border-l-4 border-[rgb(var(--primary-purple))] pl-4">
                                <h3 className="font-semibold mb-2">Purposeful Motion</h3>
                                <p className="text-sm text-[rgb(var(--text-secondary))]">
                                    Every animation serves a purpose - guiding attention, providing feedback, or enhancing the user experience.
                                </p>
                            </div>
                            <div className="border-l-4 border-[rgb(var(--accent-cyan))] pl-4">
                                <h3 className="font-semibold mb-2">Natural Easing</h3>
                                <p className="text-sm text-[rgb(var(--text-secondary))]">
                                    We use physics-based easing curves that feel natural and organic, not robotic.
                                </p>
                            </div>
                            <div className="border-l-4 border-[rgb(var(--primary-purple))] pl-4">
                                <h3 className="font-semibold mb-2">Performance First</h3>
                                <p className="text-sm text-[rgb(var(--text-secondary))]">
                                    All animations are optimized to use GPU-accelerated properties for smooth 60fps performance.
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Contributing */}
                    <Card className="mb-8" id="contributing">
                        <h2 className="text-2xl font-bold mb-4">Contributing</h2>
                        <p className="text-[rgb(var(--text-secondary))] mb-4">
                            AnimationKit is open source and we welcome contributions from the community!
                        </p>
                        <div className="space-y-4 mb-6">
                            <div>
                                <h3 className="font-semibold mb-2">Ways to Contribute</h3>
                                <ul className="space-y-2 ml-6 text-[rgb(var(--text-secondary))]">
                                    <li>🐛 Report bugs and issues</li>
                                    <li>💡 Suggest new animations or features</li>
                                    <li>📝 Improve documentation</li>
                                    <li>🎨 Create new animation components</li>
                                    <li>⭐ Star the repository on GitHub</li>
                                </ul>
                            </div>
                        </div>
                        <a
                            href="https://github.com/khatiwadaprashant/react-animation-kit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button>
                                <Github className="w-4 h-4 mr-2" />
                                View on GitHub
                            </Button>
                        </a>
                    </Card>

                    {/* Roadmap */}
                    <Card className="mb-8" id="roadmap">
                        <h2 className="text-2xl font-bold mb-4">Roadmap</h2>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <Badge variant="success" className="mr-3 mt-1">Done</Badge>
                                <div>
                                    <p className="font-semibold">Core Animation Library</p>
                                    <p className="text-sm text-[rgb(var(--text-secondary))]">100+ animations across all categories</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Badge variant="info" className="mr-3 mt-1">In Progress</Badge>
                                <div>
                                    <p className="font-semibold">Advanced Animations</p>
                                    <p className="text-sm text-[rgb(var(--text-secondary))]">3D transforms, complex sequences, and more</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Badge variant="warning" className="mr-3 mt-1">Planned</Badge>
                                <div>
                                    <p className="font-semibold">Animation Builder</p>
                                    <p className="text-sm text-[rgb(var(--text-secondary))]">Visual tool to create custom animations</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Badge variant="default" className="mr-3 mt-1">Future</Badge>
                                <div>
                                    <p className="font-semibold">Vue & Svelte Support</p>
                                    <p className="text-sm text-[rgb(var(--text-secondary))]">Expand to other frameworks</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Team */}
                    <Card className="text-center bg-gradient-to-br from-[rgb(var(--primary-purple))]/10 to-[rgb(var(--accent-cyan))]/10 border-[rgb(var(--primary-purple))]/20">
                        <div className="flex items-center justify-center mb-4">
                            <Heart className="w-8 h-8 text-red-500 fill-current" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Built with Love</h2>
                        <p className="text-[rgb(var(--text-secondary))] mb-6">
                            AnimationKit is maintained by passionate developers who believe in making the web more beautiful, one animation at a time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://github.com/khatiwadaprashant/react-animation-kit"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="secondary">
                                    <Github className="w-4 h-4 mr-2" />
                                    Star on GitHub
                                </Button>
                            </a>
                            <Link href="/playground">
                                <Button>
                                    Try Playground
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
