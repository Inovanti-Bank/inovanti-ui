import styled, { css } from "styled-components"
import { Spaces } from "../../../types/styles"

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
    width: ${theme.space[width || 'full']};

    @media (max-width: 768px) {
      width: ${theme.space.full};
    }
  `};
`