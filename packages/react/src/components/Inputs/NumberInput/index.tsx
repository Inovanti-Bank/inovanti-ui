import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Spaces } from '../../../types/styles'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'
import { Input, InputContainer } from '../common.styles'
import { InputProps } from '../common'


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
      <InputContainer width={width}  style={{ gridArea: gridAreaName }}>
        <Text size="sm">{label}</Text>
        <Input type="number" inputSize={inputSize} ref={ref} {...props} />
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </InputContainer>
    )
  },
)

NumberInput.displayName = 'NumberInput'