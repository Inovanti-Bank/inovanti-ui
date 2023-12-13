import { styled, keyframes, css } from 'styled-components'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(RadixCheckbox.Root)`
  ${({ theme }) => css`
    all: unset;
    width: ${theme.space[6]};
    height: ${theme.space[6]};
    background-color: ${theme.colors.whiteFixed};
    border-radius: ${theme.radii.xs};
    line-height: 0;
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.gray900};

    &[data-state='checked'] {
      background-color: ${theme.colors.primary450};
    }

    &:focus,
    &[data-state='checked'] {
      border: 2px solid ${theme.colors.primary450};
    }
  `};
`

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`

export const CheckboxIndicator = styled(RadixCheckbox.Indicator)`
  ${({ theme }) => css`
    color: ${theme.colors.blackFixed};
    width: ${theme.space[4]};
    height: ${theme.space[4]};
  `};

  &[data-state='checked'] {
    animation: ${slideIn} 200ms ease-out;
  }

  &[data-state='unchecked'] {
    animation: ${slideOut} 200ms ease-out;
  }
`
