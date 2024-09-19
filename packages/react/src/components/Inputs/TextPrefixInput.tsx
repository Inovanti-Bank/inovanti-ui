import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'

export interface TextPrefixInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'prefix'> {
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

export const TextPrefixInput = forwardRef<HTMLInputElement, TextPrefixInputProps>(
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
    }: TextPrefixInputProps,
    ref,
  ) => {
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
          <input
            className={cn(
              'w-full cursor-text bg-transparent focus:outline-none',
              'disabled:cursor-not-allowed',
              'placeholder:text-gray-400 dark:placeholder:text-gray-400'
            )}
            type="text"
            ref={ref}
            {...props}
          />
        </div>
        {error ? <FormAlert className={alertClassName}>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

TextPrefixInput.displayName = 'TextPrefixInput'
