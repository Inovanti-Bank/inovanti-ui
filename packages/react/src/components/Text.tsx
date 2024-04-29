'use client'

import { FontSizesType, FontWeightsType } from '@inovanti/tokens';
import { ElementType, HTMLAttributes, ReactNode, createElement, forwardRef } from 'react';
import { cn } from '../utils/cn';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: ElementType
  $size?: FontSizesType;
  $fontWeight?: FontWeightsType;
  children: ReactNode;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, children, as = 'p', $size = 'text-base', $fontWeight = 'font-medium', ...rest }, ref) => {
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

Text.displayName = 'Text';