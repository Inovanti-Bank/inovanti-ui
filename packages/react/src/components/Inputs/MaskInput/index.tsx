import { AlertBlank, FormAlert } from '@/components/FormAlert'
import { americanToBrazilianDate, isInBrazilianPattern } from '@/utils/date'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { PatternFormat } from 'react-number-format'
import { InputContainer, Label, Widths } from '../common.styles'
import { Input } from './styles'

export interface TextInputProps extends ComponentProps<typeof PatternFormat> {
  label: string
  inputsize?: 'sm' | 'md'
  error?: string
  width?: Widths
  gridAreaName?: string
}

export const MaskInput = forwardRef<
  ElementRef<typeof PatternFormat>,
  TextInputProps
>(
  (
    {
      label,
      inputsize = 'md',
      error,
      gridAreaName,
      width = 'full',
      ...props
    }: TextInputProps,
    ref,
  ) => {
    if (props.format === '##/##/####') {
      if (
        typeof props.value === 'string' &&
        !isInBrazilianPattern(props.value)
      ) {
        props.value = americanToBrazilianDate(props.value)
      }
    }

    return (
      <InputContainer width={width} style={{ gridArea: gridAreaName }}>
        <Label>{label}</Label>
        <Input inputsize={inputsize} getInputRef={ref} {...props} />

        {error ? <FormAlert>{error}</FormAlert> : <AlertBlank />}
      </InputContainer>
    )
  },
)

MaskInput.displayName = 'MaskInput'