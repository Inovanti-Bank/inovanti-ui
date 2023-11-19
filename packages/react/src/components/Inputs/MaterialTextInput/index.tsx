import { AlertBlank, FormAlert } from '@/components/FormAlert'

import { ComponentProps, ElementRef, forwardRef } from 'react'
import { InputContainer } from './styles'
import { Bar, Input, Label } from '../common.styles'
import { Spaces } from '@/@types/styled'

export interface TextInputProps extends ComponentProps<typeof Input> {
  label: string
  error?: string
  width?: Spaces
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ label, width = 'full', error, ...props }: TextInputProps, ref) => {
    return (
      <InputContainer>
        <Input
          type="text"
          width={width}
          ref={ref}
          {...props}
          required
          autoComplete="off"
        />
        <Bar width={width} className="bar" />
        <Label>{label}</Label>
        {error ? <FormAlert>{error}</FormAlert> : <AlertBlank />}
      </InputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'