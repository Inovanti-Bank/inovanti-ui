'use client'

import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { NumericFormat } from 'react-number-format'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import { baseInputStyles } from './BaseInput'

export interface DecimalInputProps
  extends ComponentProps<typeof NumericFormat> {
  label?: string
  className?: string
  containerClassName?: string
  labelClassName?: string
  alertClassName?: string
  error?: string
  $width?: SpaceType
  $gridArea?: string
}

export const DecimalInput = forwardRef<
  ElementRef<typeof NumericFormat>,
  DecimalInputProps
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
    }: DecimalInputProps,
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
        <NumericFormat
          className={baseInputStyles(className)}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale={true}
          allowNegative={false}
          getInputRef={ref}
          {...props}
        />

        {error ? <FormAlert className={alertClassName}>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

DecimalInput.displayName = 'DecimalInput'
