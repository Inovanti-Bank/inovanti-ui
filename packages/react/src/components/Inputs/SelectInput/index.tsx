import * as Select from '@radix-ui/react-select'
import { Check, TagChevron } from 'phosphor-react'
import { ComponentProps, ElementRef, ReactNode, forwardRef } from 'react'
import { InputContainer } from '../common.styles'
import {
  ItemText,
  SelectContent,
  SelectTrigger,
  SelectViewport,
  StyledItem,
  StyledItemIndicator,
} from './styles'
import { Spaces } from '../../../types/styles'
import { Text } from '../../Text'
import { FormAlert, FormAlertBlank } from '../../FormAlert'
import { DataObj } from '../common'

export interface SelectInputProps {
  placeholder: string
  label: string
  error?: string
  fieldName?: string
  defaultValue?: number | string | null | undefined
  onChange: (value: string) => void
  data?: DataObj[]
  width?: Spaces
  gridAreaName?: string
}

export function SelectInput({
  placeholder,
  fieldName,
  label,
  onChange,
  error,
  defaultValue,
  gridAreaName,
  data = [],
  width = 'full',
}: SelectInputProps) {
  return (
    <InputContainer width={width} style={{ gridArea: gridAreaName }}>
      <Text>{label}</Text>
      <Select.Root
        onValueChange={onChange}
        name={fieldName}
        value={defaultValue ? `${defaultValue}` : undefined}
      >
        <SelectTrigger aria-label="Seletor">
          <Select.Value placeholder={placeholder} />
        </SelectTrigger>
        <Select.Portal>
          <SelectContent>
            <SelectViewport>
              {data.map(({ value, label }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectViewport>
            <Select.ScrollUpButton>
              <TagChevron />
            </Select.ScrollUpButton>
          </SelectContent>
        </Select.Portal>
      </Select.Root>
      {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
    </InputContainer>
  )
}

interface SelectItemProps extends ComponentProps<typeof StyledItem> {
  children: ReactNode | string
}

const SelectItem = forwardRef<ElementRef<typeof StyledItem>, SelectItemProps>(
  ({ children, ...props }: SelectItemProps, forwardedRef) => {
    return (
      <StyledItem ref={forwardedRef} {...props}>
        <ItemText>{children}</ItemText>
        <StyledItemIndicator>
          <Check />
        </StyledItemIndicator>
      </StyledItem>
    )
  },
)

SelectItem.displayName = 'SelectItem'
