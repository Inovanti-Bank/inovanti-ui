import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Spaces } from '../../../types/styles'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import {} from '../common.styles'
import { Bar, Input, InputContainer, Label } from './styles'

export interface MaterialTextInputProps extends ComponentProps<typeof Input> {
  label: string
  error?: string
  width?: Spaces
}

export const MaterialTextInput = forwardRef<
  ElementRef<typeof Input>,
  MaterialTextInputProps
>(({ label, width = 'full', error, ...props }: MaterialTextInputProps, ref) => {
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
      {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
    </InputContainer>
  )
})

MaterialTextInput.displayName = 'MaterialTextInput'
