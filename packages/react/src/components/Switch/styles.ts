import styled from 'styled-components'

import { Root, Thumb } from '@radix-ui/react-switch'

export const SwitchRoot = styled(Root)`
  all: unset;
  width: 33px;
  height: 22px;
  margin: 1px 10px 1px 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.green300};
  border-radius: 9999px;
  position: relative;
`

export const SwitchThumb = styled(Thumb)`
  display: block;
  width: 17px;
  height: 17px;
  background-color: white;
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
  &[data-state='checked'] {
    transform: translateX(13px);
  }
`