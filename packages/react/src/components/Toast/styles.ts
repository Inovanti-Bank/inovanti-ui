import * as RadixToast from '@radix-ui/react-toast'
import styled, { keyframes } from 'styled-components'

const viewportPadding = '25px'

export const hide = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const slideIn = keyframes`
  from {
    transform: translateX(calc(100% + ${viewportPadding}));
  }
  to {
    transform: translateX(0);
  }
`

export const swipeOut = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(calc(100% + ${viewportPadding}));
  }
`

export const RadixProvider = styled(RadixToast.Provider)``

export const ToastViewport = styled(RadixToast.Viewport)`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: ${viewportPadding};
  gap: 10px;
  width: 390px;
  max-width: 100vw;
  margin: 0;
  list-style: none;
  z-index: 2147483647;
  outline: none;
`

export const ToastRoot = styled(RadixToast.Root)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  border: 4px solid ${({ theme }) => theme.colors.background};
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  padding: 15px;
  display: grid;
  grid-template-areas: 'title action' 'description action';
  grid-template-columns: auto max-content;
  column-gap: 15px;
  align-items: center;

  &[data-state='open'] {
    animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state='closed'] {
    animation: ${hide} 100ms ease-in;
  }

  &[data-swipe='move'] {
    transform: translateX(100%);
  }

  &[data-swipe='cancel'] {
    transform: translateX(0);
    transition: transform 200ms ease-out;
  }

  &[data-swipe='end'] {
    animation: ${swipeOut} 100ms ease-out;
  }
`

export const ToastTitle = styled(RadixToast.Title)`
  grid-area: title;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 15px;
`

export const ToastDescription = styled(RadixToast.Description)`
  grid-area: description;
  margin: 0;
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 13px;
  line-height: 1.3;
`

export const ToastClose = styled(RadixToast.Close)`
  color: ${({ theme }) => theme.colors.gray800};
  cursor: pointer;
`
