import { Spaces } from '@/@types/styled'
import { AlertBlank, FormAlert } from '@/components/FormAlert'
import { Eye, EyeSlash } from 'phosphor-react'
import { ComponentProps, ElementRef, forwardRef, useState } from 'react'
import { Bar, Input, Label } from '../common.styles'
import { PasswordInputContainer, SeePasswordButton } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  label: string
  error?: string
  width?: Spaces
}

type PasswordType = 'password' | 'text'

export const PasswordInput = forwardRef<
  ElementRef<typeof Input>,
  TextInputProps
>(({ label, width = 'full', error, ...props }: TextInputProps, ref) => {
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
      <Input
        type={inputPasswordType}
        ref={ref}
        {...props}
        required
        autoComplete="off"
      />
      <SeePasswordButton
        type="button"
        onClick={() => handleTogglePasswordType(inputPasswordType)}
      >
        {inputPasswordType === 'password' ? (
          <EyeSlash size={24} />
        ) : (
          <Eye size={24} />
        )}
      </SeePasswordButton>
      <Bar className="bar" />
      <Label>{label}</Label>
      {error ? <FormAlert>{error}</FormAlert> : <AlertBlank />}
    </PasswordInputContainer>
  )
})

PasswordInput.displayName = 'PasswordInput'