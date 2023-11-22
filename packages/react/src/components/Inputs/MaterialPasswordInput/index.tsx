import { Eye, EyeSlash } from 'phosphor-react'
import { ComponentProps, ElementRef, forwardRef, useState } from 'react'
import {
  PasswordInputContainer,
  SeePasswordButton,
  Bar,
  Input,
  Label,
} from './styles'
import { Spaces } from '../../../types/styles'
import { FormAlert, FormAlertBlank } from '../../FormAlert'

export interface MaterialPasswordInputProps
  extends ComponentProps<typeof Input> {
  label: string
  error?: string
  width?: Spaces
}

type PasswordType = 'password' | 'text'

export const MaterialPasswordInput = forwardRef<
  ElementRef<typeof Input>,
  MaterialPasswordInputProps
>(
  (
    { label, width = 'full', error, ...props }: MaterialPasswordInputProps,
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
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </PasswordInputContainer>
    )
  },
)

MaterialPasswordInput.displayName = 'MaterialPasswordInput'
