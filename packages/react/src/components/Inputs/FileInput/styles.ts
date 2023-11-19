import { css, styled } from 'styled-components'
import { ContainerProps } from '../common.styles'

export const FileInputContainer = styled.button<ContainerProps>`
  all: unset;
  cursor: pointer;
  text-align: center;
  display: flex;

  ${({ theme, width }) => css`
    font-size: ${theme.fontSizes.sm};
    border: 1px solid ${theme.colors.green300};
    border-radius: ${theme.radii.md};
    color: ${theme.colors.green300};
    font-weight: bold;
    transition: 0.2s;
    &:hover {
      color: ${theme.colors.green100};
    }

    width: ${theme.space[width || 'full']};

    @media (max-width: 768px) {
      width: ${theme.space.full};
    }
  `};
`

export const Label = styled.label`
  cursor: pointer;
  width: 100%;
  min-height: 150%;
  padding: ${({ theme }) => theme.space[3]} 0;
`