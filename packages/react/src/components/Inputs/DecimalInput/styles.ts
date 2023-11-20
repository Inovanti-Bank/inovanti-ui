import { NumericFormat } from 'react-number-format'
import { styled } from 'styled-components'
import { InputProps, inputStyles } from '../common.styles'

export const Input = styled(NumericFormat)<InputProps>`
  ${inputStyles};
`