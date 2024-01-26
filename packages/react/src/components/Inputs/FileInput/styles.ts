import { css, styled } from 'styled-components'
import { ContainerProps } from '../common.styles'

export const FileInputContainer = styled.button<ContainerProps>`
  all: unset;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: row;

  ${({ theme, width }) => css`
    font-size: ${theme.fontSizes.sm};
    border: 0.7px solid ${theme.colors.primary400};
    border-radius: ${theme.radii.md};
    background-color: ${theme.title === 'light' ? theme.colors.gray50 : theme.colors.gray150};

    color: ${theme.title === 'light' ? theme.colors.primary700 : theme.colors.primary400};
    font-weight: bold;
    transition: 0.2s;
    
    &:hover {
      color: ${theme.title === 'light' ? theme.colors.primary600 : theme.colors.primary200};
      border: 1px solid ${theme.colors.primary200};
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
