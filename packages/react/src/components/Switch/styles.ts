import styled, { css } from 'styled-components'

import { Root, Thumb } from '@radix-ui/react-switch'

type SwitchPros = {
  small?: boolean
}

export const SwitchRoot = styled(Root) <SwitchPros>`
${({ theme, small = false }) => css`
  all: unset;
  width: ${small ? '26px' : '33px'};
  height: ${small ? '17px' : '22px'};
  margin: 1px 10px 1px 0;
  cursor: pointer;
  background-color: ${theme.title === 'light' ? theme.colors.gray300 : theme.colors.gray700};
  border-radius: 9999px;
  position: relative;
  &[data-state='checked'] {
    background-color: ${theme.colors.primary500};
  }
  `};
`

export const SwitchThumb = styled(Thumb) <SwitchPros>`
${({ small = false }) => css`
  display: block;
  width: ${small ? '13px' : '17px'};
  height: ${small ? '13px' : '17px'};
  background-color: white;
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
  &[data-state='checked'] {
    transform: translateX(${small ? '11px' : '13px'});
  }
  `};
`
