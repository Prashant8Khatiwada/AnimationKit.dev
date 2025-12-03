'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Copy, Check, RefreshCw, Image as ImageIcon } from 'lucide-react';
import type { Animation } from '@/lib/animations';
import {
    Magnetic,
    Tilt3D,
    CursorFollow,
    HoverGlowEffect,
    ButtonRipple,
    ButtonGlow,
    ButtonHoverPop,
    ButtonShake,
    CardFlip,
    CardHoverLift,
    CardHoverGlow,
    IconPulse,
    IconSpin,
    IconBounce,
    LoaderWave,
    LoaderSpin,
    LoaderPulse
} from '@khatiwadaprashant/react-animation-kit';

interface AnimationCardProps {
    animation: Animation;
}

// Get animation variants based on animation type
const getAnimationVariants = (animationType: string) => {
    // Default variants
    const defaultVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const variants: Record<string, any> = {
        'fade-in': { initial: { opacity: 0 }, animate: { opacity: 1 } },
        'fade-in-up': { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
        'slide-in-left': { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
        'slide-in-right': { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
        'scale-in': { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } },
        'pop-in': { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, transition: { type: 'spring', stiffness: 300, damping: 15 } },
        'blur-in': { initial: { opacity: 0, filter: 'blur(10px)' }, animate: { opacity: 1, filter: 'blur(0px)' } },
        'rotate-in': { initial: { opacity: 0, rotate: -90 }, animate: { opacity: 1, rotate: 0 } },
        'flip-in-x': { initial: { opacity: 0, rotateX: 90 }, animate: { opacity: 1, rotateX: 0 } },
        'flip-in-y': { initial: { opacity: 0, rotateY: 90 }, animate: { opacity: 1, rotateY: 0 } },
        'drop-in': { initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { type: 'spring', bounce: 0.5 } },

        'fade-out': { initial: { opacity: 1 }, animate: { opacity: 0 } },
        'slide-out-right': { initial: { x: 0, opacity: 1 }, animate: { x: 30, opacity: 0 } },
        'scale-down': { initial: { scale: 1, opacity: 1 }, animate: { scale: 0, opacity: 0 } },
        'collapse-out': { initial: { height: 'auto', opacity: 1 }, animate: { height: 0, opacity: 0 } },
    };

    return variants[animationType] || defaultVariants;
};

export function AnimationCard({ animation }: AnimationCardProps) {
    const [copied, setCopied] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [key, setKey] = useState(0);

    const isInteractive =
        animation.category === 'Interactive' ||
        animation.category === 'Hover' ||
        animation.category === 'Buttons' ||
        animation.category === 'Cards' ||
        animation.previewType === 'interactive';

    const copyCode = () => {
        navigator.clipboard.writeText(animation.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const replay = () => {
        if (isInteractive) return;
        setIsPlaying(false);
        setTimeout(() => {
            setKey(prev => prev + 1);
            setIsPlaying(true);
        }, 50);
    };

    const animationVariants = getAnimationVariants(animation.id);

    const renderPreview = () => {
        // Handle specific interactive components directly
        if (animation.id === 'magnetic') {
            return (
                <Magnetic>
                    <Button size="lg" className="shadow-xl cursor-pointer">Hover Me</Button>
                </Magnetic>
            );
        }
        if (animation.id === 'tilt-3d') {
            return (
                <Tilt3D>
                    <div className="w-32 h-32 bg-linear-to-br from-primary to-accent rounded-xl shadow-xl flex items-center justify-center text-white font-bold cursor-pointer">
                        Hover Me
                    </div>
                </Tilt3D>
            );
        }
        if (animation.id === 'cursor-follow') {
            return (
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <CursorFollow>
                        <div className="w-8 h-8 bg-primary rounded-full blur-md opacity-50" />
                    </CursorFollow>
                    <span className="text-sm text-muted-foreground">Move cursor here</span>
                </div>
            );
        }
        if (animation.id === 'hover-glow-effect') {
            return (
                <HoverGlowEffect>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-border cursor-pointer">
                        Hover for Glow
                    </div>
                </HoverGlowEffect>
            );
        }
        if (animation.id === 'card-flip') {
            return (
                <CardFlip>
                    <div className="w-32 h-44 bg-linear-to-br from-primary to-accent rounded-xl shadow-xl flex items-center justify-center text-white font-bold cursor-pointer">
                        Front
                    </div>
                    <div className="w-32 h-44 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-border flex items-center justify-center font-bold cursor-pointer">
                        Back
                    </div>
                </CardFlip>
            );
        }
        if (animation.id === 'button-ripple') {
            return (
                <ButtonRipple>
                    <Button size="lg" className="shadow-lg">Click Me</Button>
                </ButtonRipple>
            );
        }
        if (animation.id === 'button-glow') {
            return (
                <ButtonGlow>
                    <Button size="lg" className="shadow-lg">Glowing</Button>
                </ButtonGlow>
            );
        }
        if (animation.id === 'button-hover-pop') {
            return (
                <ButtonHoverPop>
                    <Button size="lg" className="shadow-lg">Hover Pop</Button>
                </ButtonHoverPop>
            );
        }
        if (animation.id === 'button-shake') {
            return (
                <ButtonShake>
                    <Button size="lg" className="shadow-lg">Shake</Button>
                </ButtonShake>
            );
        }
        if (animation.id === 'card-hover-lift') {
            return (
                <CardHoverLift>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-border w-48 text-center cursor-pointer">
                        Hover Lift
                    </div>
                </CardHoverLift>
            );
        }
        if (animation.id === 'card-hover-glow') {
            return (
                <CardHoverGlow>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-border w-48 text-center cursor-pointer">
                        Hover Glow
                    </div>
                </CardHoverGlow>
            );
        }
        if (animation.id === 'icon-pulse') {
            return (
                <IconPulse>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <RefreshCw className="w-6 h-6" />
                    </div>
                </IconPulse>
            );
        }
        if (animation.id === 'icon-spin') {
            return (
                <IconSpin>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <RefreshCw className="w-6 h-6" />
                    </div>
                </IconSpin>
            );
        }
        if (animation.id === 'icon-bounce') {
            return (
                <IconBounce>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <RefreshCw className="w-6 h-6" />
                    </div>
                </IconBounce>
            );
        }
        if (animation.id === 'loader-wave') {
            return <LoaderWave />;
        }
        if (animation.id === 'loader-spin') {
            return <LoaderSpin />;
        }
        if (animation.id === 'loader-pulse') {
            return <LoaderPulse />;
        }

        switch (animation.previewType) {
            case 'text':
                return (
                    <motion.h3
                        key={key}
                        {...animationVariants}
                        className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent select-none"
                    >
                        Animated Text
                    </motion.h3>
                );
            case 'button':
                return (
                    <motion.button
                        key={key}
                        {...animationVariants}
                        className="px-6 py-3 rounded-lg bg-linear-to-r from-primary to-accent text-white font-semibold shadow-lg cursor-pointer active:scale-95 transition-transform"
                    >
                        Click Me
                    </motion.button>
                );
            case 'interactive':
                return (
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-border cursor-pointer hover:scale-105 transition-transform">
                        <span className="text-sm font-medium">Interactive Element</span>
                    </div>
                );
            case 'card':
                return (
                    <motion.div
                        key={key}
                        {...animationVariants}
                        className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-border w-48 text-center cursor-pointer"
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
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary"
                    >
                        <RefreshCw className="w-6 h-6" />
                    </motion.div>
                );
            case 'image':
                return (
                    <motion.div
                        key={key}
                        {...animationVariants}
                        className="w-40 h-40 bg-muted rounded-xl overflow-hidden relative flex items-center justify-center group cursor-pointer"
                    >
                        <ImageIcon className="w-10 h-10 text-muted-foreground/50 group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
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
            <div className="relative h-56 bg-linear-to-br from-muted/50 to-muted/10 border-b border-border flex items-center justify-center overflow-hidden p-4">
                {/* Grid background pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgb(var(--text-primary)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--text-primary)) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }} />

                {/* Animated Element */}
                <AnimatePresence mode="wait">
                    {isPlaying && renderPreview()}
                </AnimatePresence>

                {/* Replay Button - Only show for non-interactive animations */}
                {!isInteractive && (
                    <button
                        onClick={replay}
                        className="absolute bottom-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-primary/50 transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-sm z-10 cursor-pointer"
                        aria-label="Replay animation"
                    >
                        <RefreshCw className="w-4 h-4 text-primary" />
                    </button>
                )}
            </div>

            {/* Info Section */}
            <div className="p-5 flex flex-col grow space-y-4">
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground truncate pr-2" title={animation.name}>{animation.name}</h3>
                        <Badge variant="default" className="text-[10px] px-2 py-0.5 h-5 whitespace-nowrap">
                            {animation.category}
                        </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2" title={animation.description}>
                        {animation.description}
                    </p>
                </div>

                <div className="mt-auto space-y-3">
                    {/* Code Preview */}
                    <div className="bg-muted/50 rounded-lg p-3 border border-border/50 group-hover:border-primary/20 transition-colors">
                        <code className="text-xs font-mono text-primary break-all line-clamp-2">
                            {`<${animation.component} />`}
                        </code>
                    </div>

                    {/* Action Button */}
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={copyCode}
                        className="w-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-pointer"
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
