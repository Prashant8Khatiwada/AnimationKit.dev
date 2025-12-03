import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass';
    hover?: boolean;
    children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
        const baseStyles = 'rounded-xl p-6 transition-all duration-300';

        const variants = {
            default: 'bg-[rgb(var(--bg-elevated))] border border-[rgb(var(--border-color))] shadow-md',
            glass: 'bg-white/10 backdrop-blur-lg border border-white/20',
        };

        const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

        return (
            <div
                ref={ref}
                className={cn(baseStyles, variants[variant], hoverStyles, className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export { Card };
