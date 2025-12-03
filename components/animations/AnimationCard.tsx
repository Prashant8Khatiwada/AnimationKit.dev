'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Copy, Check, RefreshCw } from 'lucide-react';
import type { Animation } from '@/lib/animations';

interface AnimationCardProps {
    animation: Animation;
}

// Magnetic Component for Preview
function MagneticPreview({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(position.x, springConfig);
    const springY = useSpring(position.y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        position.x.set(middleX * 0.5); // Sensitivity
        position.y.set(middleY * 0.5);
    };

    const handleMouseLeave = () => {
        position.x.set(0);
        position.y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
}

// Get animation variants based on animation type
const getAnimationVariants = (animationType: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            whileHover: { y: -8 },
        },
        'hover-scale': {
            initial: { scale: 1 },
            whileHover: { scale: 1.1 },
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
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
        },
        'card-flip': {
            initial: { rotateY: 0 },
            animate: { rotateY: 180 },
        },
        'button-ripple': {
            whileTap: { scale: 0.95 },
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

    const renderPreview = () => {
        switch (animation.previewType) {
            case 'text':
                return (
                    <motion.h3
                        key={key}
                        {...animationVariants}
                        className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent"
                    >
                        Animated Text
                    </motion.h3>
                );
            case 'button':
                if (animation.id === 'magnetic') {
                    return (
                        <MagneticPreview>
                            <Button size="lg" className="shadow-xl">Hover Me</Button>
                        </MagneticPreview>
                    );
                }
                return (
                    <motion.button
                        key={key}
                        {...animationVariants}
                        className="px-6 py-3 rounded-lg bg-linear-to-r from-primary to-accent text-white font-semibold shadow-lg"
                    >
                        Click Me
                    </motion.button>
                );
            case 'card':
                return (
                    <motion.div
                        key={key}
                        {...animationVariants}
                        className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-border w-48 text-center"
                    >
                        <span className="text-lg font-medium">Hover Card</span>
                    </motion.div>
                );
            case 'list':
                return (
                    <motion.div
                        key={key}
                        initial="initial"
                        animate="animate"
                        variants={{
                            initial: { opacity: 0 },
                            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        className="space-y-2 w-48"
                    >
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    initial: { opacity: 0, x: -20 },
                                    animate: { opacity: 1, x: 0 }
                                }}
                                className="h-10 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-border flex items-center px-4"
                            >
                                <div className="w-4 h-4 rounded-full bg-primary/20 mr-3" />
                                <div className="h-2 w-20 bg-muted rounded" />
                            </motion.div>
                        ))}
                    </motion.div>
                );
            case 'icon':
                return (
                    <motion.div
                        key={key}
                        {...animationVariants}
                        className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
                    />
                );
            case 'modal':
                return (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]" />
                        <motion.div
                            key={key}
                            {...animationVariants}
                            className="relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-2xl border border-border w-56"
                        >
                            <div className="h-4 w-3/4 bg-muted rounded mb-3" />
                            <div className="h-2 w-full bg-muted/50 rounded mb-2" />
                            <div className="h-2 w-5/6 bg-muted/50 rounded" />
                        </motion.div>
                    </div>
                );
            case 'custom':
                if (animation.id === 'skeleton') {
                    return (
                        <div className="w-48 space-y-3">
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="h-32 bg-muted rounded-xl"
                            />
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                                className="h-4 w-3/4 bg-muted rounded"
                            />
                        </div>
                    );
                }
                if (animation.id === 'card-flip') {
                    return (
                        <div className="perspective-1000">
                            <motion.div
                                key={key}
                                initial={{ rotateY: 0 }}
                                whileHover={{ rotateY: 180 }}
                                transition={{ duration: 0.6 }}
                                style={{ transformStyle: 'preserve-3d' }}
                                className="w-32 h-44 relative cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-primary to-accent rounded-xl shadow-xl flex items-center justify-center text-white font-bold backface-hidden">
                                    Front
                                </div>
                                <div
                                    className="absolute inset-0 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-border flex items-center justify-center font-bold backface-hidden"
                                    style={{ transform: 'rotateY(180deg)' }}
                                >
                                    Back
                                </div>
                            </motion.div>
                        </div>
                    );
                }
                return null;
            default: // 'box'
                return (
                    <motion.div
                        key={key}
                        {...animationVariants}
                        transition={animationVariants.transition || { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="w-20 h-20 rounded-xl bg-linear-to-br from-primary to-accent shadow-lg flex items-center justify-center"
                    >
                        <span className="text-white font-bold text-2xl">A</span>
                    </motion.div>
                );
        }
    };

    return (
        <Card className="group overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col h-full">
            {/* Preview Area */}
            <div className="relative h-56 bg-linear-to-br from-muted/50 to-muted/10 border-b border-border flex items-center justify-center overflow-hidden">
                {/* Grid background pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgb(var(--text-primary)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--text-primary)) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }} />

                {/* Animated Element */}
                <AnimatePresence mode="wait">
                    {isPlaying && renderPreview()}
                </AnimatePresence>

                {/* Replay Button */}
                <button
                    onClick={replay}
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-primary/50 transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-sm"
                    aria-label="Replay animation"
                >
                    <RefreshCw className="w-4 h-4 text-primary" />
                </button>
            </div>

            {/* Info Section */}
            <div className="p-5 flex flex-col grow space-y-4">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{animation.name}</h3>
                        <Badge variant="default" className="text-[10px] px-2 py-0.5 h-5">
                            {animation.category}
                        </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {animation.description}
                    </p>
                </div>

                <div className="mt-auto space-y-3">
                    {/* Code Preview */}
                    <div className="bg-muted/50 rounded-lg p-3 border border-border/50 group-hover:border-primary/20 transition-colors">
                        <code className="text-xs font-mono text-primary break-all">
                            {`<${animation.component} />`}
                        </code>
                    </div>

                    {/* Action Button */}
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={copyCode}
                        className="w-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
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
