'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Copy, Check, RotateCcw } from 'lucide-react';

const animationTypes = [
    'fadeIn',
    'slideInUp',
    'slideInDown',
    'slideInLeft',
    'slideInRight',
    'scaleIn',
    'bounceIn',
    'rotateIn',
];

const easingFunctions = [
    { label: 'Linear', value: 'linear' },
    { label: 'Ease', value: 'ease' },
    { label: 'Ease In', value: 'easeIn' },
    { label: 'Ease Out', value: 'easeOut' },
    { label: 'Ease In Out', value: 'easeInOut' },
];

const elementTypes = [
    { label: 'Box', value: 'box' },
    { label: 'Button', value: 'button' },
    { label: 'Card', value: 'card' },
    { label: 'Text', value: 'text' },
];

export default function PlaygroundPage() {
    const [animationType, setAnimationType] = useState('fadeIn');
    const [duration, setDuration] = useState(0.5);
    const [delay, setDelay] = useState(0);
    const [easing, setEasing] = useState('easeOut');
    const [elementType, setElementType] = useState('box');
    const [key, setKey] = useState(0);
    const [copied, setCopied] = useState(false);

    const replay = () => {
        setKey((prev) => prev + 1);
    };

    const getAnimationProps = () => {
        const baseProps: any = {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration, delay, ease: easing },
        };

        switch (animationType) {
            case 'slideInUp':
                baseProps.initial = { opacity: 0, y: 50 };
                baseProps.animate = { opacity: 1, y: 0 };
                break;
            case 'slideInDown':
                baseProps.initial = { opacity: 0, y: -50 };
                baseProps.animate = { opacity: 1, y: 0 };
                break;
            case 'slideInLeft':
                baseProps.initial = { opacity: 0, x: -50 };
                baseProps.animate = { opacity: 1, x: 0 };
                break;
            case 'slideInRight':
                baseProps.initial = { opacity: 0, x: 50 };
                baseProps.animate = { opacity: 1, x: 0 };
                break;
            case 'scaleIn':
                baseProps.initial = { opacity: 0, scale: 0.8 };
                baseProps.animate = { opacity: 1, scale: 1 };
                break;
            case 'bounceIn':
                baseProps.initial = { opacity: 0, scale: 0.3 };
                baseProps.animate = { opacity: 1, scale: 1 };
                baseProps.transition = { ...baseProps.transition, type: 'spring', bounce: 0.5 };
                break;
            case 'rotateIn':
                baseProps.initial = { opacity: 0, rotate: -180 };
                baseProps.animate = { opacity: 1, rotate: 0 };
                break;
        }

        return baseProps;
    };

    const generateCode = () => {
        const props = getAnimationProps();
        return `<motion.div
  initial={${JSON.stringify(props.initial)}}
  animate={${JSON.stringify(props.animate)}}
  transition={${JSON.stringify(props.transition)}}
>
  Your content here
</motion.div>`;
    };

    const copyCode = () => {
        navigator.clipboard.writeText(generateCode());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const renderElement = () => {
        const animProps = getAnimationProps();

        switch (elementType) {
            case 'button':
                return (
                    <motion.button
                        key={key}
                        {...animProps}
                        className="btn-primary"
                    >
                        Animated Button
                    </motion.button>
                );
            case 'card':
                return (
                    <motion.div key={key} {...animProps}>
                        <Card className="w-64">
                            <h3 className="text-xl font-bold mb-2">Animated Card</h3>
                            <p className="text-[rgb(var(--text-secondary))]">
                                This is an example card with animation.
                            </p>
                        </Card>
                    </motion.div>
                );
            case 'text':
                return (
                    <motion.div key={key} {...animProps}>
                        <h2 className="text-3xl font-bold gradient-text">
                            Animated Text
                        </h2>
                    </motion.div>
                );
            default:
                return (
                    <motion.div
                        key={key}
                        {...animProps}
                        className="w-32 h-32 gradient-bg rounded-lg shadow-xl flex items-center justify-center"
                    >
                        <span className="text-white font-bold text-4xl">A</span>
                    </motion.div>
                );
        }
    };

    return (
        <div className="py-12 md:py-20">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Animation Playground
                    </h1>
                    <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
                        Experiment with different animations and properties in real-time
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Controls Panel */}
                    <div className="space-y-6">
                        <Card>
                            <h2 className="text-2xl font-bold mb-6">Controls</h2>

                            {/* Animation Type */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Animation Type
                                </label>
                                <select
                                    value={animationType}
                                    onChange={(e) => setAnimationType(e.target.value)}
                                    className="input"
                                >
                                    {animationTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Element Type */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Element Type
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {elementTypes.map((type) => (
                                        <button
                                            key={type.value}
                                            onClick={() => setElementType(type.value)}
                                            className={`px-4 py-2 rounded-lg font-medium transition-all ${elementType === type.value
                                                    ? 'gradient-bg text-white'
                                                    : 'bg-[rgb(var(--bg-secondary))] hover:bg-[rgb(var(--bg-tertiary))]'
                                                }`}
                                        >
                                            {type.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Duration */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Duration: {duration}s
                                </label>
                                <input
                                    type="range"
                                    min="0.1"
                                    max="2"
                                    step="0.1"
                                    value={duration}
                                    onChange={(e) => setDuration(parseFloat(e.target.value))}
                                    className="w-full"
                                />
                            </div>

                            {/* Delay */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Delay: {delay}s
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="2"
                                    step="0.1"
                                    value={delay}
                                    onChange={(e) => setDelay(parseFloat(e.target.value))}
                                    className="w-full"
                                />
                            </div>

                            {/* Easing */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-2">
                                    Easing Function
                                </label>
                                <select
                                    value={easing}
                                    onChange={(e) => setEasing(e.target.value)}
                                    className="input"
                                >
                                    {easingFunctions.map((func) => (
                                        <option key={func.value} value={func.value}>
                                            {func.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Replay Button */}
                            <Button onClick={replay} variant="secondary" className="w-full">
                                <RotateCcw className="w-4 h-4 mr-2" />
                                Replay Animation
                            </Button>
                        </Card>

                        {/* Code Output */}
                        <Card>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold">Generated Code</h3>
                                <Button onClick={copyCode} size="sm" variant="ghost">
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4 mr-2" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4 mr-2" />
                                            Copy
                                        </>
                                    )}
                                </Button>
                            </div>
                            <pre className="bg-[rgb(var(--bg-secondary))] p-4 rounded-lg overflow-x-auto text-sm">
                                <code>{generateCode()}</code>
                            </pre>
                        </Card>
                    </div>

                    {/* Preview Panel */}
                    <div>
                        <Card className="sticky top-24">
                            <h2 className="text-2xl font-bold mb-6">Preview</h2>
                            <div className="min-h-[400px] bg-gradient-to-br from-[rgb(var(--bg-secondary))] to-[rgb(var(--bg-tertiary))] rounded-lg flex items-center justify-center p-8">
                                {renderElement()}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
