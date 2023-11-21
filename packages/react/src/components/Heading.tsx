import { ElementType, ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { FontSizes } from '../types/styles'

export interface HeadingProps {
    size?: FontSizes
  as?: ElementType
  children: ReactNode
}

export const Heading = styled.h2<HeadingProps>`
${({ theme, size = 'md' }) => css`
  font-family: ${theme.fonts.default};
  line-height: ${theme.lineHeights.shorter};
  margin: 0;
  color: ${theme.colors.textHigh};
  font-size: ${theme.fontSizes[size]};
`};
`

Heading.displayName = 'Heading'
