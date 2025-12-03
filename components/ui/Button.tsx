import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg';

        const variants = {
            primary: 'gradient-bg text-white hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-[rgb(var(--primary-purple))]',
            secondary: 'bg-transparent border-2 border-[rgb(var(--primary-purple))] text-[rgb(var(--primary-purple))] hover:bg-[rgb(var(--primary-purple))]/10',
            ghost: 'bg-transparent text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-secondary))]',
            outline: 'bg-transparent border border-[rgb(var(--border-color))] text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-secondary))]',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
