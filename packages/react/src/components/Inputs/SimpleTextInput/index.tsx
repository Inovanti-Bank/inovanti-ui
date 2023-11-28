import { ElementRef, forwardRef } from 'react'
import { InputProps } from '../common'
import { Input } from '../common.styles'
import { InputContainer } from './styles'

export const SimpleTextInput = forwardRef<ElementRef<typeof Input>, InputProps>(
  (
    {
      inputSize = 'md',
      gridAreaName,
      width = 'full',
      ...props
    }: InputProps,
    ref,
  ) => {
    return (
      <InputContainer width={width} style={{ gridArea: gridAreaName }}>
        <Input type="text" inputSize={inputSize} ref={ref} {...props} />
      </InputContainer>
    )
  },
)

SimpleTextInput.displayName = 'SimpleTextInput'
