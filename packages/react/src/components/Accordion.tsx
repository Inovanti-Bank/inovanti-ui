'use client'

import * as PrimitiveAccordion from '@radix-ui/react-accordion';
import { forwardRef, ReactNode } from 'react';
import { cn } from '../utils/cn';
import { CaretDown } from '@phosphor-icons/react';

export type AccordionContainerProps = (PrimitiveAccordion.AccordionSingleProps |
  PrimitiveAccordion.AccordionMultipleProps) & {
    children: ReactNode;
    className?: string;
  }

export const AccordionContainer = forwardRef<HTMLDivElement, AccordionContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <PrimitiveAccordion.Root
        className={cn("rounded-md w-full my-4", className)}
        ref={ref}
        {...props}
      >
        {children}
      </PrimitiveAccordion.Root>
    )
  }
);

AccordionContainer.displayName = 'AccordionContainer';

export type AccordionItemProps = PrimitiveAccordion.AccordionItemProps & {
  children: ReactNode;
  className?: string;
};

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <PrimitiveAccordion.Item
        className={className}
        ref={ref}
        {...props}
      >
        {children}
      </PrimitiveAccordion.Item>
    );
  }
);

AccordionItem.displayName = 'AccordionItem';

export type AccordionTriggerProps = PrimitiveAccordion.AccordionTriggerProps & {
  children: ReactNode;
  className?: string;
  isFirst?: boolean;
  isLast?: boolean;
};

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, isFirst, isLast, ...props }, ref) => {
    return (
      <PrimitiveAccordion.Trigger
        className={cn(
          'group bg-gray-50 dark:bg-gray-850 py-2 px-4 w-full cursor-pointer flex items-center justify-between',
          isFirst && 'rounded-t-md',
          'data-[state=open]:rounded-b-none',
          isLast && 'data-[state=closed]:rounded-b-md',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </PrimitiveAccordion.Trigger>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

export type AccordionContentProps = PrimitiveAccordion.AccordionContentProps & {
  children: ReactNode;
  className?: string;
  isLast?: boolean;
};

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, isLast, ...props }, ref) => {
    return (
      <PrimitiveAccordion.Content
        className={cn(
          "px-5 py-2 border-gray-50 dark:border-gray-850",
          isLast ? "rounded-b-md border-x-2 border-b-2" :
            "border-x-2",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </PrimitiveAccordion.Content>
    );
  }
);

AccordionContent.displayName = 'AccordionContent';

export type AccordionArrowProps = {
  size?: number;
  weight?: 'bold' | 'duotone' | 'fill' | 'light' | 'regular' | 'thin';
  className?: string;
}

export const AccordionArrow = forwardRef<SVGSVGElement, AccordionArrowProps>(
  ({ size = 24, weight = 'bold', className }, ref) => {
    return (
      <CaretDown
        size={size}
        weight={weight}
        ref={ref}
        className={cn(
          "w-10 text-gray-900 dark:text-primary transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180",
          className
        )}
        aria-hidden
      />
    );
  }
);

AccordionArrow.displayName = 'AccordionArrow';