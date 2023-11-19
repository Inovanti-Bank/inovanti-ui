import { PatternFormat } from 'react-number-format'
import { styled } from 'styled-components'
import { InputProps } from '../common.styles'

export const Input = styled(PatternFormat)<InputProps>`
  cursor: text;
  padding: ${({ theme, inputsize }) => theme.space[inputsize === 'sm' ? 2 : 3]};
  font-size: ${({ theme, inputsize }) => theme.fontSizes[inputsize || 'md']};
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.7px ${({ theme }) => theme.colors.green700} solid;

  &:focus {
    border-color: ${({ theme }) => theme.colors.green300};
  }
`