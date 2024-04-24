import { Eye, EyeSlash } from 'phosphor-react'
import { ComponentProps, ElementRef, ReactNode, forwardRef, useState } from 'react'
import { Spaces } from '../../../types/styles'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'
import { Separator } from '../common.styles'
import { Input, InputContainer, InputWithPrefixContainer, PasswordContainer, Prefix, SeePasswordButton } from './styles'

type PasswordType = 'password' | 'text'

export interface PasswordPrefixInputProps extends Omit<ComponentProps<typeof Input>, 'prefix'> {
  label: string
  inputSize?: 'sm' | 'md'
  error?: string
  width?: Spaces
  gridAreaName?: string
  prefix: string | ReactNode
}

export const PasswordPrefixInput = forwardRef<ElementRef<typeof Input>, PasswordPrefixInputProps>(
  (
    {
      label,
      inputSize = 'md',
      gridAreaName,
      width = 'full',
      error,
      prefix,
      ...props
    }: PasswordPrefixInputProps,
    ref,
  ) => {

    const [inputPasswordType, setInputPasswordType] =
      useState<PasswordType>('password')

    const handleTogglePasswordType = (type: PasswordType) => {
      switch (type) {
        case 'password':
          setInputPasswordType('text')
          return
        case 'text':
        default:
          setInputPasswordType('password')
      }
    }

    return (
      <InputContainer width={width} style={{ gridArea: gridAreaName }}>
        <Text $size="sm">{label}</Text>
        <Separator />
        <InputWithPrefixContainer inputSize={inputSize}>
          <Prefix>{prefix}</Prefix>
          <PasswordContainer>
            <Input type={inputPasswordType} ref={ref} {...props} />
            <SeePasswordButton
              type="button"
              onClick={() => handleTogglePasswordType(inputPasswordType)}
            >
              {inputPasswordType === 'password' ? (
                <EyeSlash size={inputSize === 'md' ? 24 : 16} />
              ) : (
                <Eye size={inputSize === 'md' ? 24 : 16} />
              )}
            </SeePasswordButton>
          </PasswordContainer>
        </InputWithPrefixContainer>
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </InputContainer>
    )
  },
)

PasswordPrefixInput.displayName = 'PasswordPrefixInput'
