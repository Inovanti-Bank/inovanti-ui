import { Eye, EyeSlash } from 'phosphor-react'
import { ElementRef, forwardRef, useState } from 'react'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'
import { InputProps } from '../common'
import { Input, Separator } from '../common.styles'
import { PasswordInputContainer, SeePasswordButton } from './styles'

type PasswordType = 'password' | 'text'

export const PasswordInput = forwardRef<ElementRef<typeof Input>, InputProps>(
  (
    {
      label,
      inputSize = 'md',
      width = 'full',
      error,
      gridAreaName,
      ...props
    }: InputProps,
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
      <PasswordInputContainer width={width} style={{ gridArea: gridAreaName }}>
        <Text $size="sm">{label}</Text>
        <Separator />
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
