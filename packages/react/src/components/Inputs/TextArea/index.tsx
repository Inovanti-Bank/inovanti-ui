import { ComponentProps, ElementRef, forwardRef } from 'react'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'
import { InputContainer } from '../common.styles'
import { TextAreaInput } from './styles'
import { Spaces } from '../../../types/styles'

export interface TextAreaInputProps
  extends ComponentProps<typeof TextAreaInput> {
  label: string
  inputSize?: 'sm' | 'md'
  error?: string
  width?: Spaces
  gridAreaName?: string
}

export const TextArea = forwardRef<
  ElementRef<typeof TextAreaInput>,
  TextAreaInputProps
>(
  (
    {
      label,
      inputSize = 'md',
      gridAreaName,
      width = 'full',
      error,
      ...props
    }: TextAreaInputProps,
    ref,
  ) => {
    return (
      <InputContainer width={width} style={{ gridArea: gridAreaName }}>
        <Text size="sm">{label}</Text>
        <TextAreaInput inputSize={inputSize} ref={ref} {...props} />
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </InputContainer>
    )
  },
)

TextArea.displayName = 'TextArea'
