import { ElementType, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { FontSizes, FontWeights } from '../types/styles'

export interface TextProps {
  size?: FontSizes
  as?: ElementType
  fontWeight?: FontWeights
  children: ReactNode
}

export const Text = styled.p<TextProps>`
  ${({ theme, size = 'md', fontWeight = 'regular' }) => css`
    font-family: ${theme.fonts.default};
    line-height: ${theme.lineHeights.base};
    margin: 0;
    color: ${theme.colors.textHigh};
    font-size: ${theme.fontSizes[size]};
    font-weight: ${theme.fontWeights[fontWeight]};
  `};
`

Text.displayName = 'Text'
