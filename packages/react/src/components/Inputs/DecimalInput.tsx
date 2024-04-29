import { ComponentProps, ElementRef, forwardRef } from 'react'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import { cn } from '@/utils/cn'
import { NumericFormat } from 'react-number-format'
import { baseInputStyles } from './BaseInput'

export interface DecimalInputProps
  extends ComponentProps<typeof NumericFormat> {
  label?: string
  className?: string
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
      error,
      $width = '64',
      $gridArea,
      ...props
    }: DecimalInputProps,
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

        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

DecimalInput.displayName = 'DecimalInput'
