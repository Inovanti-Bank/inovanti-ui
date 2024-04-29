'use client'

import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { PatternFormat } from 'react-number-format'
import {
    americanToBrazilianDate,
    isInBrazilianPattern,
} from '../../utils/date'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import { baseInputStyles } from './BaseInput'

export interface MaskInputProps extends ComponentProps<typeof PatternFormat> {
  label?: string
  className?: string
  error?: string
  $width?: SpaceType
  $gridArea?: string
}

export const MaskInput = forwardRef<
  ElementRef<typeof PatternFormat>,
  MaskInputProps
>(
  (
    {
      label,
      className,
      error,
      $width = '80',
      $gridArea,
      ...props
    }: MaskInputProps,
    ref,
  ) => {
    if (props.format === '##/##/####') {
      if (
        typeof props.value === 'string' &&
        !isInBrazilianPattern(props.value)
      ) {
        props.value = americanToBrazilianDate(props.value)
      }
    }

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
        <PatternFormat
          className={baseInputStyles(className)}
          getInputRef={ref}
          {...props}
        />

        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

MaskInput.displayName = 'MaskInput'
