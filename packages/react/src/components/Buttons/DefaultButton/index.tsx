import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { ButtonContainer } from './styles'
import { Colors, Spaces } from '../../../types/styles'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  children: React.ReactNode
  width?: Spaces
  color?: Colors
  $size?: 'sm' | 'md' | 'normal'
}

export const Button = forwardRef<
  ElementRef<typeof ButtonContainer>,
  ButtonProps
>(
  (
    { children, color = 'primary450', width = 'full', $size, ...props }: ButtonProps,
    ref,
  ) => {
    return (
      <ButtonContainer color={color} width={width} ref={ref} $size={$size} {...props}>
        {children}
      </ButtonContainer>
    )
  },
)

Button.displayName = 'Button'
