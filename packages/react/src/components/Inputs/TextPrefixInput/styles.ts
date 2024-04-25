import styled, { css } from 'styled-components'
import { Spaces } from '../../../types/styles'

export interface ContainerProps {
  width?: Spaces
}

export type InputProps = {
  inputSize?: 'sm' | 'md'
}

export const InputContainer = styled.div<ContainerProps>`
  ${({ theme, width = 'full' }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 1rem;
    width: ${theme.space[width || 'full']};

    @media (max-width: 768px) {
      width: ${theme.space.full};
    }
  `};
`

export const InputWithPrefixContainer = styled.div<InputProps>`
    ${({ theme, inputSize = 'md' }) => css`
        display: flex;
        align-items: center;
        width: ${theme.space.full};
        font-size: ${
        // @ts-expect-error TODO: arrumar isso daqui ein
        theme.fontSizes[inputSize]
        };
        background-color: ${theme.colors.white};
        color: ${theme.colors.textHigh};
        border-radius: ${theme.radii['rounded-sm']};
        font-family: ${theme.fonts.default};
        padding: ${theme.space[inputSize === 'sm' ? 2 : 3]};

        &:has(input:focus) {
            border: 1px ${theme.colors.primary700} solid;
        }

        &:has(input:disabled) {
            cursor: not-allowed;
            color: ${theme.colors.gray300};
        }
    `};
`

export const Prefix = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.gray800};
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
