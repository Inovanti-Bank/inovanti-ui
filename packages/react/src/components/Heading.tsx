import { FontSizesType, FontWeightsType } from '@inovanti/tokens';
import { ElementType, HTMLAttributes, ReactNode, createElement, forwardRef } from 'react';
import { cn } from '../utils/cn';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType
  $size?: FontSizesType;
  $fontWeight?: FontWeightsType;
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