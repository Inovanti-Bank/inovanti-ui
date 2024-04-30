import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { baseInputStyles } from './BaseInput'

export interface SimpleInputProps extends ComponentPropsWithoutRef<'input'> {
  className?: string
  $width?: SpaceType
  $gridArea?: string
}

export const SimpleTextInput = forwardRef<HTMLInputElement, SimpleInputProps>(
  (
    {
      className = '',
      $width = '80',
      $gridArea,
      ...props
    }: SimpleInputProps,
    ref,
  ) => {
    return (
      <div
        className={cn(
          'flex flex-col justify-start',
          `${resolveSpace($width)}`
        )}
        style={{ gridArea: $gridArea }}
      >
        <input
          className={baseInputStyles(className)}
          type="text"
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)

SimpleTextInput.displayName = 'SimpleTextInput'
