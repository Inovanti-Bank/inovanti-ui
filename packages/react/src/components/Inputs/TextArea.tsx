import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import { baseInputStyles } from './BaseInput'

export interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  label?: string
  className?: string
  containerClassName?: string
  labelClassName?: string
  alertClassName?: string
  error?: string
  $width?: SpaceType
  $gridArea?: string
}
export const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(
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
    }: TextAreaProps,
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
        <textarea
          className={cn(baseInputStyles(className), 'resize-y min-h-20 whitespace-pre-wrap')}
          ref={ref}
          {...props}
        />
        {error ? <FormAlert className={alertClassName}>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

TextArea.displayName = 'TextArea'
