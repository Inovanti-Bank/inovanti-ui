import { ElementRef, forwardRef } from 'react'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import { InputProps } from './common'
import { cn } from '@/utils/cn'
import { resolveSpace } from '@inovanti/tokens'
import { BaseInput } from './BaseInput'

export const TextInput = forwardRef<ElementRef<typeof BaseInput>, InputProps>(
  (
    {
      label,
      className = '',
      error,
      $width = '96',
      $gridArea,
      ...props
    }: InputProps,
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
        <BaseInput
          className={className}
          type="text"
          ref={ref}
          {...props}
        />
        {error ?
          <FormAlert>{error}</FormAlert> :
          <FormAlertBlank />
        }
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
