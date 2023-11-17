import { ElementType } from 'react'
import styled, { css } from 'styled-components'

export interface BoxProps {
  as?: ElementType
}

export const Box = styled.div<BoxProps>`
${({ theme }) => css`
padding: ${theme.space[6]};
  border-radius: ${theme.radii.md};
  background-color: ${theme.colors.gray200};
  border: 1px solid ${theme.colors.gray400};
  `}; 
`