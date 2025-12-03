'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Copy, Check, Play } from 'lucide-react';
import type { Animation } from '@/lib/animations';

interface AnimationCardProps {
    animation: Animation;
}

export function AnimationCard({ animation }: AnimationCardProps) {
    const [copied, setCopied] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const copyCode = () => {
        navigator.clipboard.writeText(animation.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const playAnimation = () => {
        setIsPlaying(true);
        setTimeout(() => setIsPlaying(false), 1000);
    };

    return (
        <Card className="group">
            {/* Preview Area */}
            <div className="relative h-48 bg-gradient-to-br from-[rgb(var(--bg-secondary))] to-[rgb(var(--bg-tertiary))] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                {/* Animated Demo Element */}
                <motion.div
                    key={isPlaying ? 'playing' : 'idle'}
                    initial={isPlaying ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-24 h-24 gradient-bg rounded-lg shadow-lg flex items-center justify-center"
                >
                    <span className="text-white font-bold text-2xl">A</span>
                </motion.div>

                {/* Play Button Overlay */}
                <button
                    onClick={playAnimation}
                    className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                    aria-label="Play animation"
                >
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-6 h-6 text-[rgb(var(--primary-purple))]" />
                    </div>
                </button>
            </div>

            {/* Info */}
            <div className="space-y-3">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-lg font-semibold mb-1">{animation.name}</h3>
                        <Badge variant="default">{animation.category}</Badge>
                    </div>
                </div>

                <p className="text-sm text-[rgb(var(--text-secondary))]">
                    {animation.description}
                </p>

                {/* Code Preview */}
                <div className="bg-[rgb(var(--bg-secondary))] rounded-lg p-3 border border-[rgb(var(--border-color))]">
                    <code className="text-xs font-mono text-[rgb(var(--text-primary))] break-all">
                        {`<${animation.component} />`}
                    </code>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={copyCode}
                        className="flex-1"
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4 mr-2" />
                                Copied!
                            </>
                        ) : (
                            <>
                                <Copy className="w-4 h-4 mr-2" />
                                Copy Code
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </Card>
    );
}
