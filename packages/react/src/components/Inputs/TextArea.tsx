import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import { baseInputStyles } from './BaseInput'

export interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  label?: string
  className?: string
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
      error,
      $width = '96',
      $gridArea,
      ...props
    }: TextAreaProps,
    ref,
  ) => {
    return (
      <div className={cn(
          'flex flex-col justify-start mb-4',
          `${resolveSpace($width)}`
        )} style={{ gridArea: $gridArea }}>
        <Text $size="text-sm" className='mb-1' as="label">{label}</Text>
        <textarea
          className={cn(baseInputStyles(className), 'resize-y min-h-20 whitespace-pre-wrap')}
          ref={ref}
          {...props}
        />
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

TextArea.displayName = 'TextArea'
