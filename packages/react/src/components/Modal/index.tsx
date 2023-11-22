import { ComponentProps, ElementRef, ReactNode, forwardRef } from 'react'
import ReactModal from 'react-modal'
import { useTheme } from 'styled-components'
import { ModalContainer } from './styles'

export interface ModalProps extends ComponentProps<typeof ReactModal> {
  children: ReactNode
}

export const Modal = forwardRef<ElementRef<typeof ReactModal>, ModalProps>(
  ({ children, ...props }: ModalProps, ref) => {
    const theme = useTheme()
    try {
      ReactModal.setAppElement('#root')
    } catch {
      ReactModal.setAppElement('#storybook-root')
    }
    return (
      <ModalContainer
        style={{
          overlay: {
            backgroundColor: `${theme.colors.gray100}55`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          content: {
            backgroundColor: theme.colors.gray100,
            color: theme.colors.textHigh,
            borderRadius: theme.radii.md,
            padding: theme.space['8'],
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          },
        }}
        ref={ref}
        {...props}
      >
        {children}
      </ModalContainer>
    )
  },
)

Modal.displayName = 'Modal'
