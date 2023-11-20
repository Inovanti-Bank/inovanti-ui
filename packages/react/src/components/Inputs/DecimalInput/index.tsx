import { ComponentProps, ElementRef, forwardRef } from 'react'
import { NumericFormat } from 'react-number-format'
import { Spaces } from '../../../types/styles'
import { Text } from '../../Text'
import { InputContainer } from '../common.styles'
import { Input } from './styles'
import { FormAlert, FormAlertBlank } from '../../FormAlert'

export interface DecimalInputProps extends ComponentProps<typeof NumericFormat> {
  label: string
  inputSize?: 'sm' | 'md'
  error?: string
  width?: Spaces
  gridAreaName?: string
}

export const DecimalInput = forwardRef<
  ElementRef<typeof NumericFormat>,
  DecimalInputProps
>(
  (
    {
      label,
      inputSize = 'md',
      gridAreaName,
      error,
      width = 'full',
      ...props
    }: DecimalInputProps,
    ref,
  ) => {
    return (
      <InputContainer width={width} style={{ gridArea: gridAreaName }}>
        <Text size="sm">{label}</Text>
        <Input
          inputSize={inputSize}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale={true}
          allowNegative={false}
          getInputRef={ref}
          {...props}
        />

        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </InputContainer>
    )
  },
)

DecimalInput.displayName = 'DecimalInput'