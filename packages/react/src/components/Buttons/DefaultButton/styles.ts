import styled from 'styled-components'
import { Colors } from '../../../types/styles'
import { ContainerProps } from '../../Inputs/common.styles'

interface ButtonContainerProps extends ContainerProps {
  color?: Colors
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  cursor: pointer;
  display: flex;
  padding: 0.75rem 0;
  justify-content: center;
  align-items: center;
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  background-color: ${({ theme, color }) => theme.colors[color || 'green300']};
  border: 1px solid transparent;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.green700};
  }

  width: ${({ theme, width }) => theme.space[width || 'full']};

  @media (max-width: 768px) {
    width: ${({ theme }) => theme.space.full};
  }
`