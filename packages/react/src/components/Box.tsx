import { ElementType } from 'react'
import styled, { css } from 'styled-components'

export interface BoxProps {
  as?: ElementType
}

export const Box = styled.div<BoxProps>`
  ${({ theme }) => css`
    padding: ${theme.space[6]};
    border-radius: ${theme.radii.md};
    background-color: ${theme.colors.gray100};
    border: 0.7px solid ${theme.colors.gray150};
    color: ${theme.colors.textHigh};
  `};
`
