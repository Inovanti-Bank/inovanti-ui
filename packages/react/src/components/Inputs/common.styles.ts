import styled, { css } from "styled-components";
import { Spaces } from "../../types/styles";

export interface ContainerProps {
  width?: Spaces
}

export type InputProps = {
  inputSize?: 'sm' | 'md'
}

export const Input = styled.input<InputProps>`
${({ theme, inputSize = 'md' }) => css`
  cursor: text;
  font-family: ${theme.fonts.default};
  padding: ${theme.space[inputSize === 'sm' ? 2 : 3]};
  font-size: ${theme.fontSizes[inputSize]};
  border-radius: ${theme.radii.sm};
  background-color: ${theme.colors.white};
  border: 0.7px ${theme.colors.green700} solid;

  &:focus {
    outline: 0;
    border-color: ${theme.colors.green300};
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

export const Label = styled.label`
${({ theme }) => css`
  margin-bottom: ${theme.space[1]};
  margin-left: ${theme.space[1]};
  text-align: left;
  `};
`