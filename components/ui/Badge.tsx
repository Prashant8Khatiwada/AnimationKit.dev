import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    children: React.ReactNode;
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
    const baseStyles = 'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full';

    const variants = {
        default: 'bg-[rgb(var(--primary-purple))]/10 text-[rgb(var(--primary-purple))]',
        success: 'bg-[rgb(var(--success))]/10 text-[rgb(var(--success))]',
        warning: 'bg-[rgb(var(--warning))]/10 text-[rgb(var(--warning))]',
        error: 'bg-[rgb(var(--error))]/10 text-[rgb(var(--error))]',
        info: 'bg-[rgb(var(--info))]/10 text-[rgb(var(--info))]',
    };

    return (
        <span className={cn(baseStyles, variants[variant], className)} {...props}>
            {children}
        </span>
    );
}
