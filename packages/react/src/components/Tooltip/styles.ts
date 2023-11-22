import * as Tooltip from '@radix-ui/react-tooltip'
import styled, { keyframes } from 'styled-components'

export const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const TooltipContent = styled(Tooltip.Content)`
  border-radius: 4px;
  padding: 10px 15px;
  font-size: 15px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.textHigh};
  background-color: ${({ theme }) => theme.colors.gray100};
  user-select: none;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='delayed-open'][data-side='top'] {
    animation-name: ${slideDownAndFade};
  }

  &[data-state='delayed-open'][data-side='right'] {
    animation-name: ${slideLeftAndFade};
  }

  &[data-state='delayed-open'][data-side='bottom'] {
    animation-name: ${slideUpAndFade};
  }

  &[data-state='delayed-open'][data-side='left'] {
    animation-name: ${slideRightAndFade};
  }
`

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: ${({ theme }) => theme.colors.gray100};
`

export const IconButton = styled.button`
  font-family: inherit;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textHigh};
  background-color: ${({ theme }) => theme.colors.gray100};
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.background};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray200};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.gray900};
  }
`
