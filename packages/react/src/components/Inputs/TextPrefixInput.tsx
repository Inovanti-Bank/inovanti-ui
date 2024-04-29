import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'

export interface TextPrefixInputProps extends Omit<ComponentPropsWithoutRef<'input'>, 'prefix'> {
  label?: string
  className?: string
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
          `${resolveSpace($width)}`
        )}
        style={{ gridArea: $gridArea }}
      >
        {label &&
          <Text $size="text-sm" className='mb-1' as="label">{label}</Text>
        }
        <div className={cn(
          'input-with-prefix flex items-center w-full text-base bg-background text-gray-primary',
          'rounded-sm px-3 py-2',
          'border border-primary',
          className
        )}>
        <span className='text-gray-secondary'>{prefix}</span>
          <input
            className='w-full cursor-text bg-transparent focus:outline-none disabled:cursor-not-allowed placeholder:text-gray-tertiary'
            type="text"
            ref={ref}
            {...props}
          />
        </div>
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

TextPrefixInput.displayName = 'TextPrefixInput'
