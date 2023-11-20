import styled, { css } from "styled-components";
import { Spaces } from "../../types/styles";

export interface ContainerProps {
  width?: Spaces
}

export type InputProps = {
  inputSize?: 'sm' | 'md'
}

export const InputContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1rem;
  width: ${({ theme, width }) => theme.space[width || 'full']};

  @media (max-width: 768px) {
    width: ${({ theme }) => theme.space.full};
  }
`

export const Input = styled.input<InputProps>`
${({ theme, inputSize = 'md' }) => css`
  cursor: text;
  font-family: ${theme.fonts.default};
  padding: ${theme.space[inputSize === 'sm' ? 2 : 3]};
  font-size: ${theme.fontSizes[inputSize]};
  border-radius: ${theme.radii.sm};
  background-color: ${theme.colors.white};
  color: ${theme.colors.textHigh};

  border: 0.7px ${theme.colors.primary900} solid;

  &:focus {
    outline: 0;
    border: 1px ${theme.colors.primary700} solid;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${theme.colors.gray300};
  }

  &::placeholder {
    color: ${theme.colors.gray700};
  }
  `};
`