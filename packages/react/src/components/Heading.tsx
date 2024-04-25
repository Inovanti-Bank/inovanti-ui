import { FontSizesType, FontWeightsType } from '@inovanti/tokens';
import { ElementType, HTMLAttributes, ReactNode, createElement, forwardRef } from 'react';
import { cn } from '../utils/cn';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType
  $size?: FontSizesType; // "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl" | "text-6xl" | "text-7xl" | "text-8xl" | "text-9xl"
  $fontWeight?: FontWeightsType; // "font-thin" | "font-extralight" | "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold" | "font-black"
  children: ReactNode;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, as = 'h2', $size = 'text-lg', $fontWeight = 'font-semibold', ...rest }, ref) => {
    return createElement(as, {
      ref: ref,
      className: cn(
          `${$size} ${$fontWeight} m-0 text-black dark:text-white`,
          className
      ),
      ...rest
    }, children )
  }
);

Heading.displayName = 'Heading';