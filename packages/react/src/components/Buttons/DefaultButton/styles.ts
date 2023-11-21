import { getContrast } from 'polished'
import styled, { css } from 'styled-components'
import { Colors } from '../../../types/styles'
import { ContainerProps } from '../../Inputs/common.styles'

interface ButtonContainerProps extends ContainerProps {
  color?: Colors
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, color, width }) => css`
  
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 0.75rem 0;
  gap: ${theme.space[2]};
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  color: ${getContrast(theme.colors[color || 'green300'], theme.colors.whiteFixed) < 3.5 ? theme.colors.blackFixed : theme.colors.whiteFixed};
  font-weight: ${theme.fontWeights.semibold};
  background-color: ${theme.colors[color || 'green300']};
  border: 1px solid transparent;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.green700};
  }

  width: ${theme.space[width || 'full']};
  
  &:disabled {
    cursor: not-allowed;
    background-color: ${theme.colors.gray300};
    color: ${theme.colors.gray700};
  }

  svg {
    width: ${theme.space[4]};
    height: ${theme.space[4]};
  }

  @media (max-width: 768px) {
    width: ${({ theme }) => theme.space.full};
  }
  `};
`