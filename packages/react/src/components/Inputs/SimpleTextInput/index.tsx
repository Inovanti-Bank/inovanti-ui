import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input } from '../common.styles'
import { InputContainer } from './styles'
import { Spaces } from '../../../types/styles'

export interface SimpleInputProps extends ComponentProps<typeof Input> {
  inputSize?: 'sm' | 'md'
  width?: Spaces
  gridAreaName?: string
}

export const SimpleTextInput = forwardRef<ElementRef<typeof Input>, SimpleInputProps>(
  (
    {
      inputSize = 'md',
      gridAreaName,
      width = 'full',
      ...props
    }: SimpleInputProps,
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
