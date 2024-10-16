
'use client'

import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import Select from 'react-select'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import { DataObj } from './common'

export interface MultiSelectInputProps extends ComponentProps<typeof Select> {
  label?: string
  className?: string
  containerClassName?: string
  labelClassName?: string
  alertClassName?: string
  error?: string
  data?: DataObj[]
  $width?: SpaceType
  $gridArea?: string
}

export const MultiSelectInput = forwardRef<
  ElementRef<typeof Select>,
  MultiSelectInputProps
>(
  (
    {
      label,
      className = '',
      containerClassName = '',
      labelClassName = '',
      alertClassName = '',
      error,
      data,
      $width = '80',
      $gridArea,
      ...props
    }: MultiSelectInputProps,
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
        <Select
          isMulti
          ref={ref}
          closeMenuOnSelect={false}
          unstyled
          classNames={{ 
            control: (state) => cn(
              'cursor-pointer rounded-sm w-full px-3 py-2 border disabled:cursor-not-allowed',
              'bg-white dark:bg-gray-850 opacity-95 text-black dark:text-white',
              state.isFocused ? 'border-quaternary outline-none opacity-100' : 'border-primary'
            ),
            placeholder: (_) => cn(
              'text-gray-400 text-center',
            ),
            menu: (_) => cn(
              'border border-primary rounded-sm mt-1 bg-white dark:bg-gray-850'
            ),
            option: (_) => cn(
              'rounded-sm border-b border-primary',
              'text-black dark:text-white bg-white dark:bg-gray-850 opacity-90',
              'hover:opacity-100 px-3 py-2',
            ),
          }}
          styles={{
            control: (baseStyles, _) => ({
              ...baseStyles,
            }),
            multiValue: (styles, { data }) => {
              let color = '#99999933'

              const dataColor = (data as DataObj)

              if (dataColor.color) {
                color = dataColor.color
              }
              return {
                ...styles,
                backgroundColor: color,
                paddingBlock: '0.125rem',
                paddingInline: '0.25rem',
                margin: '0.1rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center'
              };
            },
            placeholder: (baseStyles) => ({
              ...baseStyles,
            }),
            option: (baseStyles) => ({
              ...baseStyles,
              cursor: 'pointer'
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              width: 'max-content',
              minWidth: '100%',
              maxWidth: '200%',
              lineBreak: 'auto'
            }),
            
          }}
          className={className}
          {...props}
          options={data}
        />
        {error ? <FormAlert className={alertClassName}>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

MultiSelectInput.displayName = 'MultiSelectInput'