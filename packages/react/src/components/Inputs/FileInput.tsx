'use client'

import { cn } from '@/utils/cn'
import { resolveSpace } from '@inovanti/tokens'
import { ElementRef, forwardRef } from 'react'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { BaseInput } from './BaseInput'
import { InputProps } from './common'

export const FileInput = forwardRef<ElementRef<typeof BaseInput>, InputProps>(
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
      <div className={cn(
        'flex flex-col justify-start mb-4',
        `${resolveSpace($width)}`, containerClassName
      )}>
      <div
        className={cn(
          'w-full cursor-pointer text-center flex flex-row text-sm border rounded-sm',
          'transition-[0.2s]',
          'border border-primary',
          'focus:border-quaternary focus:outline-none focus:opacity-100',
          'bg-white dark:bg-gray-850 opacity-95',
          'text-black dark:text-white',
          className,
          
        )}
        style={{ gridArea: $gridArea }}
      >
          <label className={cn('cursor-pointer w-full min-h-[100%] py-3 px-0', labelClassName)}>
          {label}
          <BaseInput
            type="file"
            style={{ display: 'none' }}
            ref={ref}
            {...props}
          />
        </label>
        
        </div>
        {error ? <FormAlert className={alertClassName}>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

FileInput.displayName = 'FileInput'
