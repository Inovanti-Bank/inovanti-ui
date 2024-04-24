import { ElementRef, forwardRef } from 'react'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'
import { InputProps } from '../common'
import { Input, InputContainer, Separator } from '../common.styles'

export const NumberInput = forwardRef<ElementRef<typeof Input>, InputProps>(
  (
    {
      label,
      inputSize = 'md',
      error,
      width = 'full',
      gridAreaName,
      ...props
    }: InputProps,
    ref,
  ) => {
    return (
      <InputContainer width={width} style={{ gridArea: gridAreaName }}>
        <Text $size="sm">{label}</Text>
        <Separator />
        <Input type="number" inputSize={inputSize} ref={ref} {...props} />
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </InputContainer>
    )
  },
)

NumberInput.displayName = 'NumberInput'
