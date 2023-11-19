import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const AButton = styled.button`
  all: unset;
  cursor: pointer;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    padding: ${theme.space[2]} ${theme.space[5]};
    margin: ${theme.space[4]};
    border: 1px solid ${theme.colors.green300};
    border-radius: ${theme.radii.md};
    color: ${theme.colors.green300};
    font-weight: 600;
    transition: 0.2s;
    &:hover {
      color: ${theme.colors.green500};
    }
  `};
`

export const ARedirect = styled(Link)`
  all: unset;
  cursor: pointer;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    padding: ${theme.space[2]} ${theme.space[5]};
    margin: ${theme.space[4]};
    border: 1px solid ${theme.colors.green300};
    border-radius: ${theme.radii.md};
    color: ${theme.colors.green300};
    font-weight: 600;
    transition: 0.2s;
    &:hover {
      color: ${theme.colors.green500};
    }
  `};
`