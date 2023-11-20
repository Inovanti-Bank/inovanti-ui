import styled, { css } from 'styled-components'

export const AButton = styled.button`
  all: unset;
  cursor: pointer;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    gap: ${theme.space[1]};
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
      border-color: ${theme.colors.green500};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${theme.colors.gray700};
      border-color: ${theme.colors.gray700};
      background-color: ${theme.colors.gray200};
    }
  `};
`