import { Eye, EyeSlash } from 'phosphor-react'
import { ElementRef, forwardRef, useState } from 'react'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import { InputProps } from './common'
import { cn } from '@/utils/cn'
import { resolveSpace } from '@inovanti/tokens'
import { BaseInput } from './BaseInput'

type PasswordType = 'password' | 'text'

export const PasswordInput = forwardRef<ElementRef<typeof BaseInput>, InputProps>(
  (
    {
      label,
      className,
      error,
      $width = '64',
      $gridArea,
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
      <div
        className={cn(
          'flex flex-col justify-start mb-6 relative',
          `${resolveSpace($width)}`
        )}
        style={{ gridArea: $gridArea }}
      >
        {label &&
          <Text $size="text-sm" className='mb-1' as="label">{label}</Text>
        }
        <BaseInput
          className={className}
          type={inputPasswordType}
          ref={ref}
          {...props}
        />
        <button
          className={cn(
            'absolute right-4 top-8',
            'cursor-pointer rounded-sm',
            'pt-[1px] pr-[3px] pb-[0px] pl-[2px]',
            'border-[0.5px] border-transparent',
            'text-gray-tertiary',
            'focus:border-gray-tertiary'
          )}
          type='button'
          onClick={() => handleTogglePasswordType(inputPasswordType)}
        >
          {inputPasswordType === 'password' ? (
            <EyeSlash size={24} />
          ) : (
            <Eye size={24} />
          )}
        </button>
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

PasswordInput.displayName = 'PasswordInput'
