import { Eye, EyeSlash } from 'phosphor-react'
import { ComponentProps, ElementRef, forwardRef, useState } from 'react'
import { Spaces } from '../../../types/styles'
import { Input, Label } from '../common.styles'
import { PasswordInputContainer, SeePasswordButton } from './styles'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'

export interface PasswordInputProps extends ComponentProps<typeof Input> {
  label: string
  inputSize?: 'sm' | 'md'
  error?: string
  width?: Spaces
}

type PasswordType = 'password' | 'text'

export const PasswordInput = forwardRef<
  ElementRef<typeof Input>,
  PasswordInputProps
>(
  (
    {
      label,
      inputSize = 'md',
      width = 'full',
      error,
      ...props
    }: PasswordInputProps,
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
      <PasswordInputContainer width={width}>
        <Text size="sm" style={{ marginBottom: '8px' }}>{label}</Text>
        <Input
          type={inputPasswordType}
          inputSize={inputSize}
          ref={ref}
          {...props}
        />
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
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </PasswordInputContainer>
    )
  },
)

PasswordInput.displayName = 'PasswordInput'