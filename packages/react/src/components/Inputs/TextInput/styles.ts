import styled, { css } from 'styled-components'
import { InputSizeType } from '.'

export const TextInputContainer = styled.div<InputSizeType>`
${({ theme, inputSize = 'md' }) => css`
  background-color: ${theme.colors.gray100};
  padding: ${theme.space[3]} ${theme.space[4]};
  border-radius: ${theme.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${theme.colors.gray700};
  display: flex;
  align-items: center;

  ${() => {
    switch (inputSize) {
      case 'sm':
        return `padding: ${theme.space[2]} ${theme.space[3]};`
      case 'md':
      default:
        return `padding: ${theme.space[3]} ${theme.space[4]};`
    }
  }}

  &:has(input:focus) {
    border-color: ${theme.colors.primary300};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
  `};
`

export const Prefix = styled.span`
${({ theme }) => css`
  font-family: ${theme.fonts.default};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray300};
  font-weight: ${theme.fontWeights.regular};
  `};
`

export const Input = styled.input`
${({ theme }) => css`
  font-family: ${theme.fonts.default};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.regular};
  background: transparent;
  border: 0;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${theme.colors.gray400};
  }
  `};
`