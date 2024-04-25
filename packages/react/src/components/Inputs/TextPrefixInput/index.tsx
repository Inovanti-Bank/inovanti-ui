import { ComponentProps, ElementRef, ReactNode, forwardRef } from 'react'
import { Spaces } from '../../../types/styles'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'
import { Input, InputContainer, InputWithPrefixContainer, Prefix } from './styles'

export interface TextPrefixInputProps extends Omit<ComponentProps<typeof Input>, 'prefix'> {
  label: string
  inputSize?: 'sm' | 'md'
  error?: string
  width?: Spaces
  gridAreaName?: string
  prefix: string | ReactNode
}

export const TextPrefixInput = forwardRef<ElementRef<typeof Input>, TextPrefixInputProps>(
  (
    {
      label,
      inputSize = 'md',
      gridAreaName,
      width = 'full',
      error,
      prefix,
      ...props
    }: TextPrefixInputProps,
    ref,
  ) => {
    return (
      <InputContainer width={width} style={{ gridArea: gridAreaName }}>
        <Text $size="text-sm" className='mb-1' as="label">{label}</Text>
        <InputWithPrefixContainer inputSize={inputSize}>
        <Prefix>{prefix}</Prefix>
        <Input type="text" ref={ref} {...props} />
        </InputWithPrefixContainer>
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </InputContainer>
    )
  },
)

TextPrefixInput.displayName = 'TextPrefixInput'
