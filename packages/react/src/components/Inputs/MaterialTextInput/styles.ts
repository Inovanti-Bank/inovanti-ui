import styled from 'styled-components'
import { ContainerProps } from '../common.styles'

export const InputContainer = styled.div<ContainerProps>`
  position: relative;
  margin-block: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.textHigh};
  width: ${({ theme, width }) => theme.space[width || 'full']};
`

export const Input = styled.input<ContainerProps>`
  font-size: 1rem;
  padding-block: 10px;
  display: block;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};

  &:focus {
    outline: none;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary600};
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }

  width: ${({ theme, width }) => theme.space[width || 'full']};

  @media (max-width: 768px) {
    width: ${({ theme }) => theme.space.full};
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
`

export const Bar = styled.span<ContainerProps>`
  position: relative;
  display: block;
  width: ${({ theme, width }) => theme.space[width || 'full']};

  @media (max-width: 768px) {
    width: ${({ theme }) => theme.space.full};
  }

  &::before,
  &::after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0.5px;
    position: absolute;
    background: ${({ theme }) => theme.colors.primary500};
    transition: 0.2s ease all;
  }

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }
`