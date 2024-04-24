import * as Select from '@radix-ui/react-select'
import styled from 'styled-components'

export const StyledItem = styled(Select.Item)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textHigh};
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 0.7px ${({ theme }) => theme.colors.primary900} solid;
  margin-bottom: ${({ theme }) => theme.space[2]};
  display: flex;
  align-items: center;
  height: 25px;
  padding: ${(props) => props.theme.space[5]} 25px;
  position: relative;
  user-select: none;
  width: 100%;
  &:data-highlighted {
    outline: none;
    background-color: ${({ theme }) => theme.colors.black}fe;
    color: ${({ theme }) => theme.colors.green300};
  }
`

export const ItemText = styled(Select.ItemText)``

export const StyledItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 3px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary200};
`

export const SelectTrigger = styled(Select.SelectTrigger)`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};

  border: 0.7px ${({ theme }) => theme.colors.primary900} solid;
  border-radius: ${({ theme }) => theme.radii['rounded-md']};
  padding: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes['text-base']};
  color: ${({ theme }) => theme.colors.textHigh};
  &[data-placeholder] {
    color: ${({ theme }) => theme.colors.gray600};
  }
`

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`

export const SelectViewport = styled(Select.Viewport)`
  background-color: ${({ theme }) => theme.colors.background};
  border: 0.7px ${({ theme }) => theme.colors.primary900} solid;
  border-radius: 6px;
  padding: 5px;
  width: 100%;
`
