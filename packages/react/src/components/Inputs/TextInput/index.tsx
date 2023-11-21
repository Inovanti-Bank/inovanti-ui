import { ElementRef, forwardRef } from 'react'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'
import { InputProps } from '../common'
import { Input, InputContainer } from '../common.styles'

export const TextInput = forwardRef<ElementRef<typeof Input>, InputProps>(
  (
    {
      label,
      inputSize = 'md',
      gridAreaName,
      width = 'full',
      error,
      ...props
    }: InputProps,
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