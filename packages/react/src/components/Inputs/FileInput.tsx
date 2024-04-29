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
        `${resolveSpace($width)}`
      )}>
      <div
        className={cn(
          'w-full cursor-pointer text-center flex flex-row text-sm border-[0.7px] rounded-sm',
          'font-bold',
          'transition-[0.2s]',
          'border border-primary',
          'focus:border-secondary focus:outline-none focus:opacity-100',
          'bg-background opacity-95',
          'text-gray-primary',
          className,
          
        )}
        style={{ gridArea: $gridArea }}
      >
        <label className='cursor-pointer w-full min-h-[100%] py-3 px-0'>
          {label}
          <BaseInput
            type="file"
            style={{ display: 'none' }}
            ref={ref}
            {...props}
          />
        </label>
        
        </div>
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

FileInput.displayName = 'FileInput'
