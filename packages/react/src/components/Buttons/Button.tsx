'use client'

import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import './button.css'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode
    className?: string
    $width?: SpaceType
}

export const buttonStyles = cn(
  'button cursor-pointer flex flex-row gap-2 justify-center items-center rounded-sm p-2 font-semibold',
  'disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-700',
  'border border-transparent focus:border-primary',
  'bg-primary',
  'text-accent')

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    { children, className, $width = 'fit', ...props }: ButtonProps,
    ref,
    ) => {
    
    return (
        <button
            className={cn(
                `${resolveSpace($width)}`,
                buttonStyles,
                className
            )}
            ref={ref}
            {...props}
        >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
