import { ElementType } from 'react'
import styled, { css } from 'styled-components'
import { FontSizes } from '../types/styles'

export interface TextProps {
    size?: FontSizes
    as?: ElementType
}
function test(tes: any) {
  console.log(tes)
  return ''
}

export const Text = styled.p<TextProps>`
${({ theme, size = 'md' }) => css`
  ${true ? test(theme) : ''}
  font-family: ${theme.fonts.default};
  line-height: ${theme.lineHeights.base};
  margin: 0;
  color: ${theme.colors.textHigh};
  font-size: ${theme.fontSizes[size]};
`};
`

Text.displayName = 'Text'
