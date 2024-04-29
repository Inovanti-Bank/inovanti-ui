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
          'flex flex-row gap-1 p-6 rounded-md bg-slate-100 dark:bg-gray-900 border border-gray-150 text-black dark:text-white',
          className
        )}
      >
        {children}
      </Component>
    );
  }
);
