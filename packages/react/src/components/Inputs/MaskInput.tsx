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
  containerClassName?: string
  labelClassName?: string
  alertClassName?: string
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
      containerClassName,
      labelClassName,
      alertClassName,
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
          `${resolveSpace($width)}`, containerClassName
        )}
        style={{ gridArea: $gridArea }}
      >
        {label &&
          <Text $size="text-sm" className={cn('mb-1', labelClassName)} as="label">{label}</Text>
        }
        <PatternFormat
          className={baseInputStyles(className)}
          getInputRef={ref}
          {...props}
        />

        {error ? <FormAlert className={alertClassName}>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

MaskInput.displayName = 'MaskInput'
