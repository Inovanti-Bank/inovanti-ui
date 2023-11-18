import styled, { css } from 'styled-components'
import { ContainerProps } from '../common.styles'

export const PasswordInputContainer = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  margin-bottom: ${({ theme }) => theme.space[6]};
  flex-direction: column;
  justify-content: flex-start;
  width: ${({ theme, width }) => theme.space[width || 'full']};
`

export const SeePasswordButton = styled.button`
${({ theme }) => css`
  all: unset;
  cursor: pointer;
  position: absolute;
  padding: 2px 3px 0px 2px;
  border-radius: ${theme.radii.sm};
  right: ${theme.space[4]};
  top: ${theme.space[8]};
  color: ${theme.colors.gray200};
  border: 1px transparent solid;
  &:focus {
    border: 1px ${theme.colors.green700} solid;
  }
  `};
`