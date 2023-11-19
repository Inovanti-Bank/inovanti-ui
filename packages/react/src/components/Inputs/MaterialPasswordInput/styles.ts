import styled from 'styled-components'
import { ContainerProps } from '../../common.styles'

export const PasswordInputContainer = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  margin-bottom: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
  width: ${({ theme, width }) => theme.space[width || 'full']};
`

export const SeePasswordButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  padding: 0px 3px 0px 2px;
  border-radius: 2px;
  right: 0.5rem;
  top: 0.5rem;
  color: ${({ theme }) => theme.colors.gray200};
  border: 1px transparent solid;
  &:focus {
    border: 1px ${({ theme }) => theme.colors.primary200} solid;
  }
`