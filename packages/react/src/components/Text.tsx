import { ElementType, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { FontSizes } from '../types/styles'

export interface TextProps {
    size?: FontSizes
    as?: ElementType
    children: ReactNode
}

export const Text = styled.p<TextProps>`
${({ theme, size = 'md' }) => css`
  font-family: ${theme.fonts.default};
  line-height: ${theme.lineHeights.base};
  margin: 0;
  margin-bottom: ${theme.space[1]};
  color: ${theme.colors.textHigh};
  font-size: ${theme.fontSizes[size]};
`};
`

Text.displayName = 'Text'
