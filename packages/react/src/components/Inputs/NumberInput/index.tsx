import { AlertBlank, FormAlert } from '@/components/FormAlert'

import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, InputContainer, Label, Widths } from '../common.styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  label: string
  inputsize?: 'sm' | 'md'
  error?: string
  width?: Widths
}

export const NumberInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    {
      label,
      inputsize = 'md',
      error,
      width = 'full',
      ...props
    }: TextInputProps,
    ref,
  ) => {
    return (
      <InputContainer width={width}>
        <Label>{label}</Label>
        <Input type="number" inputsize={inputsize} ref={ref} {...props} />
        {error ? <FormAlert>{error}</FormAlert> : <AlertBlank />}
      </InputContainer>
    )
  },
)

NumberInput.displayName = 'NumberInput'