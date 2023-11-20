import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, InputContainer } from '../common.styles'
import { Spaces } from '../../../types/styles'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'

export interface TextInputProps extends ComponentProps<typeof Input> {
  label: string
  inputSize?: 'sm' | 'md'
  error?: string
  width?: Spaces
  gridAreaName?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    {
      label,
      inputSize = 'md',
      gridAreaName,
      width = 'full',
      error,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    return (
      <InputContainer width={width} style={{ gridArea: gridAreaName }}>
        <Text size="sm">{label}</Text>
        <Input type="text" inputSize={inputSize} ref={ref} {...props} />
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </InputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'