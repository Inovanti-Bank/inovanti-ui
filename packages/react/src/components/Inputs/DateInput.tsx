'use client'

import { cn } from '@/utils/cn'
import { resolveSpace } from '@inovanti/tokens'
import { ElementRef, forwardRef } from 'react'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import { BaseInput } from './BaseInput'
import { InputProps } from './common'

export const DateInput = forwardRef<ElementRef<typeof BaseInput>, InputProps>(
  (
    {
      label,
      className = '',
      containerClassName = '',
      labelClassName = '',
      alertClassName = '',
      error,
      $width = '80',
      $gridArea,
      ...props
    }: InputProps,
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
        <BaseInput
          className={`dark ${className}`}
          type="date"
          ref={ref}
          {...props}
        />
        {error ?
          <FormAlert className={alertClassName}>{error}</FormAlert> :
          <FormAlertBlank />
        }
      </div>
    )
  },
)

DateInput.displayName = 'DateInput'
