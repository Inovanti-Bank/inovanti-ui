import styled, { css } from 'styled-components'
import { ContainerProps } from '../common.styles'

export const PasswordInputContainer = styled.div<ContainerProps>`
  ${({ theme, width = 'full' }) => css`
    display: flex;
    position: relative;
    margin-bottom: ${theme.space[6]};
    flex-direction: column;
    justify-content: flex-start;
    width: ${theme.space[width]};
  `};
`

export const SeePasswordButton = styled.button`
  ${({ theme }) => css`
    all: unset;
    cursor: pointer;
    position: absolute;
    padding: 2px 3px 0px 2px;
    border-radius: ${theme.radii['rounded-sm']};
    right: ${theme.space[4]};
    top: ${theme.space[8]};
    color: ${theme.colors.gray700};
    border: 1px transparent solid;
    &:focus {
      border: 0.7px ${theme.colors.green700} solid;
    }
  `};
`
