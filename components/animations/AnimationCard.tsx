'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Copy, Check, Play } from 'lucide-react';
import type { Animation } from '@/lib/animations';

interface AnimationCardProps {
    animation: Animation;
}

// Get animation variants based on animation type
const getAnimationVariants = (animationType: string) => {
    const variants: Record<string, any> = {
        'fade-in-up': {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
        },
        'slide-in-left': {
            initial: { opacity: 0, x: -30 },
            animate: { opacity: 1, x: 0 },
        },
        'slide-in-right': {
            initial: { opacity: 0, x: 30 },
            animate: { opacity: 1, x: 0 },
        },
        'scale-in': {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
        },
        'bounce-in': {
            initial: { opacity: 0, scale: 0.3 },
            animate: { opacity: 1, scale: 1 },
            transition: { type: 'spring', bounce: 0.5, duration: 0.6 },
        },
        'fade-out': {
            initial: { opacity: 1 },
            animate: { opacity: 0 },
        },
        'slide-out-right': {
            initial: { opacity: 1, x: 0 },
            animate: { opacity: 0, x: 30 },
        },
        'hover-lift': {
            initial: { y: 0 },
            animate: { y: -8 },
        },
        'hover-scale': {
            initial: { scale: 1 },
            animate: { scale: 1.1 },
        },
        'pulse': {
            initial: { scale: 1 },
            animate: { scale: [1, 1.05, 1] },
            transition: { repeat: Infinity, duration: 2 },
        },
        'rotate': {
            initial: { rotate: 0 },
            animate: { rotate: 360 },
            transition: { repeat: Infinity, duration: 3, ease: 'linear' },
        },
        'stagger-children': {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
        },
        'card-flip': {
            initial: { rotateY: 0 },
            animate: { rotateY: 180 },
        },
        'button-ripple': {
            initial: { scale: 0.8, opacity: 0.5 },
            animate: { scale: 1, opacity: 1 },
        },
        'spinner': {
            initial: { rotate: 0 },
            animate: { rotate: 360 },
            transition: { repeat: Infinity, duration: 1, ease: 'linear' },
        },
        'skeleton': {
            initial: { opacity: 0.5 },
            animate: { opacity: [0.5, 1, 0.5] },
            transition: { repeat: Infinity, duration: 1.5 },
        },
        'page-fade': {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
        },
        'modal-slide': {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
        },
    };

    return variants[animationType] || variants['fade-in-up'];
};

export function AnimationCard({ animation }: AnimationCardProps) {
    const [copied, setCopied] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [key, setKey] = useState(0);

    const copyCode = () => {
        navigator.clipboard.writeText(animation.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const replay = () => {
        setIsPlaying(false);
        setTimeout(() => {
            setKey(prev => prev + 1);
            setIsPlaying(true);
        }, 50);
    };

    const animationVariants = getAnimationVariants(animation.id);

    return (
        <Card className="group overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            {/* Preview Area with actual animation */}
            <div className="relative h-48 bg-gradient-to-br from-muted/30 to-muted/10 rounded-t-lg flex items-center justify-center overflow-hidden">
                {/* Grid background pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgb(var(--text-primary)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--text-primary)) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }} />

                {/* Animated Demo Element */}
                <AnimatePresence mode="wait">
                    {isPlaying && (
                        <motion.div
                            key={key}
                            {...animationVariants}
                            transition={animationVariants.transition || { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            className="relative z-10"
                        >
                            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg flex items-center justify-center">
                                <span className="text-white font-bold text-2xl">A</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Replay Button */}
                <button
                    onClick={replay}
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-primary/50 transition-all duration-200 opacity-0 group-hover:opacity-100"
                    aria-label="Replay animation"
                >
                    <Play className="w-4 h-4 text-primary" />
                </button>
            </div>

            {/* Info Section */}
            <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1.5">{animation.name}</h3>
                        <Badge variant="default" className="text-xs">
                            {animation.category}
                        </Badge>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                    {animation.description}
                </p>

                {/* Code Preview */}
                <div className="bg-muted/50 rounded-lg p-3 border border-border/50">
                    <code className="text-xs font-mono text-accent break-all">
                        {`<${animation.component} />`}
                    </code>
                </div>

                {/* Action Button */}
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={copyCode}
                    className="w-full"
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
        </Card>
    );
}
