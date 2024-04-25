import styled, { css } from 'styled-components'

export type InputProps = {
  inputSize?: 'sm' | 'md'
}

export const InputWithPrefixContainer = styled.div<InputProps>`
    ${({ theme, }) => css`

        &:has(input:focus) {
            border: 1px ${theme.colors.primary700} solid;
        }

        &:has(input:disabled) {
            cursor: not-allowed;
            color: ${theme.colors.gray300};
        }
    `};
`

export const inputStyles = css`
  ${({ theme }) => css`
    width: ${theme.space.full};
    cursor: text;
    background-color: transparent;
    &:focus {
      outline: 0;
    }

    &:disabled {
      cursor: not-allowed;
    }

    &::placeholder {
      color: ${theme.colors.gray700};
    }
  `};
`

export const Input = styled.input`
  ${inputStyles};
`
