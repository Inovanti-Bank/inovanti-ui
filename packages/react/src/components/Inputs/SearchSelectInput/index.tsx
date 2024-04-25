import { ComponentProps, ElementRef, forwardRef } from 'react'
import Select from 'react-select'
import { useTheme } from 'styled-components'
import { Spaces } from '../../../types/styles'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'
import { DataObj } from '../common'
import { Separator } from '../common.styles'
import { SearchSelectContainer } from './styles'

export interface SearchSelectInputProps extends ComponentProps<typeof Select> {
  label: string
  error?: string
  data?: DataObj[]
  width?: Spaces
  gridAreaName?: string
}

export const SearchSelectInput = forwardRef<
  ElementRef<typeof Select>,
  SearchSelectInputProps
>(
  (
    {
      label,
      error,
      gridAreaName,
      data = [],
      width = 'full',
      ...props
    }: SearchSelectInputProps,
    ref,
  ) => {
    const theme = useTheme()

    return (
      <SearchSelectContainer width={width} style={{ gridArea: gridAreaName }}>
        <Text $size="text-sm">{label}</Text>
        <Separator />
        <Select
          ref={ref}
          {...props}
          unstyled
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              cursor: 'pointer',
              borderColor: state.isFocused
                ? theme.colors.primary300
                : theme.colors.primary700,
              background: theme.colors.white,
              width: '100%',
              border: `0.7px solid ${theme.colors.primary700}`,
              borderRadius: '0.375rem',
              color: theme.colors.textHigh,

              padding: theme.space[3],
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              color: theme.colors.gray600,
              textAlign: 'center',
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              border: `0.7px solid ${theme.colors.primary700}`,
              borderRadius: '0.375rem',
              marginTop: theme.space[3],
              background: theme.colors.white,
            }),
            option: (baseStyles) => ({
              ...baseStyles,
              cursor: 'pointer',
              borderBottom: `0.7px solid ${theme.colors.primary700}`,
              borderRadius: '0.1rem',
              padding: theme.space[3],
              width: '98%',
              margin: theme.space[1],
              marginInline: '1%',
              color: theme.colors.textHigh,
              background: theme.colors.gray100,

              '&:hover': {
                background: theme.colors.white,
              },
            }),
          }}
          options={data}
        />
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </SearchSelectContainer>
    )
  },
)

SearchSelectInput.displayName = 'SearchSelectInput'
