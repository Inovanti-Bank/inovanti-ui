import { cn } from '@/utils/cn'
import { SpaceType, resolveSpace } from '@inovanti/tokens'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import Select from 'react-select'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import { DataObj } from './common'

export interface SearchSelectInputProps extends ComponentProps<typeof Select> {
  label?: string
  className?: string
  error?: string
  data?: DataObj[]
  $width?: SpaceType
  $gridArea?: string
}

export const SearchSelectInput = forwardRef<
  ElementRef<typeof Select>,
  SearchSelectInputProps
>(
  (
    {
      label,
      className = '',
      error,
      data,
      $width = '80',
      $gridArea,
      ...props
    }: SearchSelectInputProps,
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
        <Select
          ref={ref}
          {...props}
          unstyled
          classNames={{ 
            control: (state) => cn(
              'cursor-pointer bg-background text-gray-primary rounded-sm w-full px-3 py-2 border',
              state.isFocused ? 'border-secondary' : 'border-primary'
            ),
            placeholder: (_) => cn(
              'text-gray-tertiary text-center',
            ),
            menu: (_) => cn(
              'border border-primary rounded-sm mt-1 bg-background'
            ),
            option: (_) => cn(
              'cursor-pointer rounded-sm border-b border-primary',
              'text-gray-primary bg-background',
              'hover:bg-background/70 px-3 py-2',
              
            ),
           }}
          styles={{
            control: (baseStyles, _) => ({
              ...baseStyles,
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
            }),
            option: (baseStyles) => ({
              ...baseStyles,
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              width: 'max-content',
              minWidth: '100%',
              maxWidth: '200%',
              lineBreak: 'auto'
            }),
            
          }}
          options={data}
        />
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

SearchSelectInput.displayName = 'SearchSelectInput'
