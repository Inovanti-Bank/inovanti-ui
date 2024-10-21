'use client'

import { ElementType, forwardRef, ReactNode, Ref } from 'react';
import { cn } from '../utils/cn';
export interface BoxProps {
  as?: ElementType;
  className?: string;
  children: ReactNode
}

export const Box = forwardRef(
  ({ as: Component = 'div', className, children }: BoxProps, ref: Ref<HTMLDivElement>) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'flex flex-row flex-wrap gap-1 py-3 px-6 rounded-md border',
          'bg-gray-50 text-gray-950 border-gray-150',
          'dark:bg-gray-850 dark:text-gray-50 dark:border-gray-900',
          className
        )}
      >
        {children}
      </Component>
    );
  }
);
