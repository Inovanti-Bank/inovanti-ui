import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import styled, { keyframes } from 'styled-components'

export const Container = styled(DropdownMenu.Root)``

export const Trigger = styled(DropdownMenu.Trigger)``

export const TriggerButton = styled.button`
  cursor: pointer;
`

export const Box = styled(DropdownMenu.Portal)``

const slideLeftAndFade = keyframes`
from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Content = styled(DropdownMenu.Content)`
  min-width: 220px;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 6px;
  padding: 5px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }
`

export const Arrow = styled(DropdownMenu.Arrow)``

export const Item = styled(DropdownMenu.Item)`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1;
  color: ${({ theme }) => theme.colors.textHigh};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 5px;
  position: relative;
  padding-left: 25px;
  user-select: none;
  outline: none;
  margin: 5px auto;

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.colors.gray50};
  }
`
