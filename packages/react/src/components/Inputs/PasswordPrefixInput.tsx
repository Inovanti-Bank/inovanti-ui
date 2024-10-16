import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import { Eye } from '@phosphor-icons/react/dist/ssr/Eye'
import { EyeSlash } from '@phosphor-icons/react/dist/ssr/EyeSlash'
import { ComponentPropsWithoutRef, ReactNode, forwardRef, useState } from 'react'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import './Input.css'

type PasswordType = 'password' | 'text'

export interface PasswordPrefixInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'prefix'> {
  label?: string
  className?: string
  containerClassName?: string
  labelClassName?: string
  alertClassName?: string
  error?: string
  $width?: SpaceType
  $gridArea?: string
  prefix: string | ReactNode
}

export const PasswordPrefixInput = forwardRef<HTMLInputElement, PasswordPrefixInputProps>(
  (
    {
      label,
      className = '',
      containerClassName = '',
      labelClassName = '',
      alertClassName = '',
      error,
      prefix,
      $width = '80',
      $gridArea,
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
      <div
        className={cn(
          'flex flex-col justify-start mb-4',
          `${resolveSpace($width)}`, containerClassName
        )}
        style={{ gridArea: $gridArea }}
      >
        {label &&
          <Text $size="text-sm" className={cn('mb-1', labelClassName)} as="label">{label}</Text>
        }
        <div className={cn(
          'input-with-prefix flex items-center w-full text-base',
          'bg-white dark:bg-gray-850 opacity-95 text-black dark:text-white',
          'rounded-sm px-3 py-2',
          'border border-primary',
          className
        )}>
          <span className='text-gray-secondary'>{prefix}</span>
          <div className='flex-1 relative w-full h-full'>
            <input
              className='w-full h-full cursor-text bg-transparent focus:outline-none disabled:cursor-not-allowed placeholder:text-gray-400 dark:placeholder:text-gray-400'
              type={inputPasswordType}
              ref={ref}
              {...props}
            />
            <button
              className={cn(
                'absolute right-0.5 -top-0.5',
                'cursor-pointer rounded-sm',
                'pt-[1px] pr-[3px] pb-[0px] pl-[2px]',
                'border-[0.5px] border-transparent',
                'text-gray-tertiary',
                'focus:border-gray-tertiary'
              )}
              type="button"
              onClick={() => handleTogglePasswordType(inputPasswordType)}
            >
              {inputPasswordType === 'password' ? (
                <EyeSlash size={24} />
              ) : (
                <Eye size={24} />
              )}
            </button>
          </div>
        </div>
        {error ? <FormAlert className={alertClassName}>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

PasswordPrefixInput.displayName = 'PasswordPrefixInput'
