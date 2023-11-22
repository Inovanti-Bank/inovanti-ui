import { X } from 'phosphor-react'
import ReactModal from 'react-modal'
import { css, styled } from 'styled-components'

export const ModalContainer = styled(ReactModal)`
  position: relative;
`

export const CloseModalButton = styled(X)`
  position: absolute;
  cursor: pointer;
  ${({ theme }) => css`
    width: ${theme.space[5]};
    height: ${theme.space[5]};

    top: ${theme.space[4]};
    right: ${theme.space[4]};
  `};
`
