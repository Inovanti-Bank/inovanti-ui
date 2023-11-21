import styled from "styled-components";
import { InputProps, inputStyles } from "../common.styles";

export const TextAreaInput = styled.textarea<InputProps>`
  ${inputStyles};
  min-height: ${({ theme }) => theme.space[20]};
  resize: vertical;
`