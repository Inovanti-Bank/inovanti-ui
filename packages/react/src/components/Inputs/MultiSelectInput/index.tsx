
import { ComponentProps, ElementRef, forwardRef } from 'react'
import Select from 'react-select'
import { useTheme } from 'styled-components'
import { Spaces } from '../../../types/styles'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { Text } from '../../Text'
import { DataObj } from '../common'
import { SearchSelectContainer } from './styles'

export interface MultiSelectInputProps extends ComponentProps<typeof Select> {
  label: string
  error?: string
  data?: DataObj[]
  height?: Spaces
  width?: Spaces

  flexColumn?: boolean
  gridAreaName?: string
}

export const MultiSelectInput = forwardRef<
  ElementRef<typeof Select>,
  MultiSelectInputProps
>(
  (
    {
      label,
      error,
      gridAreaName,
      data = [],
      width = 'full',
      height = 16,
      flexColumn = false,
      ...props
    }: MultiSelectInputProps,
    ref,
  ) => {
    const theme = useTheme()

    return (
      <SearchSelectContainer width={width} style={{ gridArea: gridAreaName }}>
        <Text $size="sm">{label}</Text>
        <Select
          isMulti
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
                borderRadius: theme.radii.sm,
                color: theme.colors.textHigh,
                overflowX: 'auto',
                maxHeight: theme.space[height],
                padding: theme.space[3],
                
              }),
              indicatorsContainer: (baseStyles) => ({
              ...baseStyles,
                  alignItems: 'start',
              }),
              valueContainer: (baseStyles) => ({
              ...baseStyles,
                  flexDirection: flexColumn ? 'column' : 'row',
                  flexWrap: 'wrap',
              alignItems: 'flex-start',
              }),
              
            placeholder: (baseStyles) => ({
              ...baseStyles,
              color: theme.colors.gray600,
              textAlign: 'center',
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              border: `0.7px solid ${theme.colors.primary700}`,
              borderRadius: theme.radii.sm,
              marginTop: theme.space[3],
              background: theme.colors.white,
              }),
            multiValue: (baseStyles) => ({
                ...baseStyles,
                background: theme.colors.gray100,
                paddingBlock: flexColumn ? theme.space[3] : theme.space[2],
                paddingInline: theme.space[2],
                
                marginRight: theme.space[1],
                marginBottom: theme.space[1],
                borderRadius: theme.radii.sm,
              width: flexColumn ? theme.space.full : 'auto',
                
                
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
              zIndex: 100000,

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

MultiSelectInput.displayName = 'MultiSelectInput'