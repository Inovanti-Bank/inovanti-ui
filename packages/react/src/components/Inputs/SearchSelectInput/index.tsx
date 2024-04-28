import { ComponentProps, ElementRef, forwardRef } from 'react'
import Select from 'react-select'
import { useTheme } from 'styled-components'
import { Spaces } from '../../../types/styles'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'
import { DataObj } from '../common'
import { cn } from '@/utils/cn'
import { resolveSpace } from '@inovanti/tokens'

export interface SearchSelectInputProps extends ComponentProps<typeof Select> {
  label?: string
  className?: string
  error?: string
  data?: DataObj[]
  $width?: Spaces
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
      $width = '64',
      $gridArea,
      ...props
    }: SearchSelectInputProps,
    ref,
  ) => {
    const theme = useTheme()
    return (
      <div
        className={cn(
          'flex flex-col justify-start mb-4',
          `${resolveSpace($width)}`
        )}
        style={{ gridArea: $gridArea }}
      >
        <Text $size="text-sm" className='mb-1' as="label">{label}</Text>
        <Select
          ref={ref}
          {...props}
          menuIsOpen
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
              'border border-primary rounded-sm mt-3 bg-background w-max'
            ),
            option: (_) => cn(
              'cursor-pointer rounded-sm w-max border-b border-primary m-1',
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
          }}
          options={data}
        />
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </div>
    )
  },
)

SearchSelectInput.displayName = 'SearchSelectInput'
