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
            default: 'bg-background border border-border shadow-sm',
            glass: 'bg-background/50 backdrop-blur-lg border border-border/50',
        };

        const hoverStyles = hover ? 'hover:shadow-lg hover:-translate-y-1 hover:border-primary/30' : '';

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
