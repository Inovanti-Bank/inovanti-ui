import { AlertBlank, FormAlert } from '@/components/FormAlert'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { NumericFormat } from 'react-number-format'
import { InputContainer, Label, Widths } from '../common.styles'
import { Input } from './styles'

export interface TextInputProps extends ComponentProps<typeof NumericFormat> {
  label: string
  inputsize?: 'sm' | 'md'
  error?: string
  width?: Widths
  gridAreaName?: string
}

export const DecimalInput = forwardRef<
  ElementRef<typeof NumericFormat>,
  TextInputProps
>(
  (
    {
      label,
      inputsize = 'md',
      gridAreaName,
      error,
      width = 'full',
      ...props
    }: TextInputProps,
    ref,
  ) => {
    return (
      <InputContainer width={width} style={{ gridArea: gridAreaName }}>
        <Label>{label}</Label>
        <Input
          inputsize={inputsize}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale={true}
          allowNegative={false}
          getInputRef={ref}
          {...props}
        />

        {error ? <FormAlert>{error}</FormAlert> : <AlertBlank />}
      </InputContainer>
    )
  },
)

DecimalInput.displayName = 'DecimalInput'