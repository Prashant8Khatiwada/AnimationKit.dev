'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { AnimationCard } from '@/components/animations/AnimationCard';
import { animations, categories, getAnimationsByCategory, searchAnimations } from '@/lib/animations';
import type { Category } from '@/lib/animations';

export default function AnimationsPage() {
    const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredAnimations = searchQuery
        ? searchAnimations(searchQuery)
        : selectedCategory === 'All'
            ? animations
            : getAnimationsByCategory(selectedCategory);

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
                        Animation Showcase
                    </h1>
                    <p className="text-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
                        Explore our complete library of {animations.length}+ beautiful animations
                    </p>
                </motion.div>

                {/* Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[rgb(var(--text-tertiary))]" />
                        <input
                            type="text"
                            placeholder="Search animations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input pl-12 w-full"
                        />
                    </div>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex flex-wrap gap-2 justify-center">
                        <button
                            onClick={() => {
                                setSelectedCategory('All');
                                setSearchQuery('');
                            }}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === 'All'
                                    ? 'gradient-bg text-white shadow-md'
                                    : 'bg-[rgb(var(--bg-secondary))] text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-tertiary))]'
                                }`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setSearchQuery('');
                                }}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === category
                                        ? 'gradient-bg text-white shadow-md'
                                        : 'bg-[rgb(var(--bg-secondary))] text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-tertiary))]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="mb-6 text-center text-[rgb(var(--text-tertiary))]"
                >
                    {filteredAnimations.length} animation{filteredAnimations.length !== 1 ? 's' : ''} found
                </motion.div>

                {/* Animations Grid */}
                {filteredAnimations.length > 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredAnimations.map((animation, index) => (
                            <motion.div
                                key={animation.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                            >
                                <AnimationCard animation={animation} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-lg text-[rgb(var(--text-secondary))]">
                            No animations found matching your search.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
