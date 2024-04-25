import { getContrast } from 'polished'
import styled, { css } from 'styled-components'
import { Colors } from '../../../types/styles'
import { ContainerProps } from '../../Inputs/common.styles'

interface ButtonContainerProps extends ContainerProps {
  color?: Colors
  $size?: 'sm' | 'md' | 'normal'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${({ theme, color, width, $size = 'normal' }) => css`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    padding: ${$size === 'sm' ? '0.25rem 0' : ($size === 'md' ? '0.5rem 0' : '0.75rem 0')};
    gap: ${theme.space[2]};
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
    color: ${getContrast(
      theme.colors[color || 'primary450'],
      theme.colors.whiteFixed,
    ) < 3.5
      ? theme.colors.blackFixed
      : theme.colors.whiteFixed};
    font-weight: ${theme.fontWeights['font-semibold']};
    background-color: ${theme.colors[color || 'primary450']};
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
