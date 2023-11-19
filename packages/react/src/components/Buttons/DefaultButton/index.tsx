import { Colors, Spaces } from '@/@types/styled'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { ButtonContainer } from './styles'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  children: React.ReactNode
  width?: Spaces
  color?: Colors
}

export const Button = forwardRef<
  ElementRef<typeof ButtonContainer>,
  ButtonProps
>(
  (
    { children, color = 'green300', width = 'full', ...props }: ButtonProps,
    ref,
  ) => {
    return (
      <ButtonContainer color={color} width={width} ref={ref} {...props}>
        {children}
      </ButtonContainer>
    )
  },
)

Button.displayName = 'Button'