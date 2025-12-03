import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    children: React.ReactNode;
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
    const baseStyles = 'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-md';

    const variants = {
        default: 'bg-primary/10 text-primary border border-primary/20',
        success: 'bg-secondary/10 text-secondary border border-secondary/20',
        warning: 'bg-orange-500/10 text-orange-600 border border-orange-500/20',
        error: 'bg-red-500/10 text-red-600 border border-red-500/20',
        info: 'bg-blue-500/10 text-blue-600 border border-blue-500/20',
    };

    return (
        <span className={cn(baseStyles, variants[variant], className)} {...props}>
            {children}
        </span>
    );
}
