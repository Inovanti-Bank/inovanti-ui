import { ComponentProps, ElementRef, forwardRef } from 'react'
import { PatternFormat } from 'react-number-format'
import { Spaces } from '../../../types/styles'
import {
  americanToBrazilianDate,
  isInBrazilianPattern,
} from '../../../utils/date'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'
import { InputContainer, Separator } from '../common.styles'
import { Input } from './styles'

export interface MaskInputProps extends ComponentProps<typeof PatternFormat> {
  label: string
  inputSize?: 'sm' | 'md'
  error?: string
  width?: Spaces
  gridAreaName?: string
}

export const MaskInput = forwardRef<
  ElementRef<typeof PatternFormat>,
  MaskInputProps
>(
  (
    {
      label,
      inputSize = 'md',
      error,
      gridAreaName,
      width = 'full',
      ...props
    }: MaskInputProps,
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
        <Text size="sm">{label}</Text>
        <Separator />
        <Input inputSize={inputSize} getInputRef={ref} {...props} />

        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </InputContainer>
    )
  },
)

MaskInput.displayName = 'MaskInput'
