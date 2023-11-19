import { AlertBlank, FormAlert } from '@/components/FormAlert'
import { DataObj } from '@/dtos/FormDataUserDTO'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import Select from 'react-select'
import { useTheme } from 'styled-components'
import { Label, Widths } from '../common.styles'
import { SearchSelectContainer } from './styles'

interface SearchSelectInputProps extends ComponentProps<typeof Select> {
  label: string
  error?: string
  data?: DataObj[]
  width?: Widths
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
        <Label>{label}</Label>
        <Select
          ref={ref}
          {...props}
          unstyled
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              cursor: 'pointer',
              borderColor: state.isFocused
                ? theme.colors.green300
                : theme.colors.green700,
              background: theme.colors.white,
              width: '100%',
              border: `0.7px solid ${theme.colors.green700}`,
              borderRadius: '0.375rem',
              padding: theme.space[3],
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              color: theme.colors.fixed.gray200,
              textAlign: 'center',
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              border: `0.7px solid ${theme.colors.green700}`,
              borderRadius: '0.375rem',
              marginTop: theme.space[3],
              background: theme.colors.background,
            }),
            option: (baseStyles) => ({
              ...baseStyles,
              cursor: 'pointer',
              borderBottom: `0.7px solid ${theme.colors.green700}`,
              borderRadius: '0.1rem',
              padding: theme.space[3],
              width: '98%',
              margin: theme.space[1],
              marginInline: '1%',
              '&:hover': {
                background: theme.colors.white,
              },
            }),
          }}
          options={data}
        />
        {error ? <FormAlert>{error}</FormAlert> : <AlertBlank />}
      </SearchSelectContainer>
    )
  },
)

SearchSelectInput.displayName = 'SearchSelectInput'