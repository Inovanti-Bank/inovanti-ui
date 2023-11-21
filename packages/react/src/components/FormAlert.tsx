import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

export interface FormAlertProps {
  type?: 'error' | 'success'
  children: ReactNode | string
}

export const FormAlert = styled.p<FormAlertProps>`
  ${({ theme, type = 'error' }) => css`
    color: ${theme.colors[type === 'error' ? 'red300' : 'green500']};
    padding-top: ${theme.space[1]};
    font-size: ${theme.fontSizes.sm};
  `};
`
export const FormAlertBlank = styled.p`
  height: ${({ theme }) => theme.space[5]};
`

FormAlert.displayName = 'FormAlert'
FormAlertBlank.displayName = 'FormAlertBlank'
