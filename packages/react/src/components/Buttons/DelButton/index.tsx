import { X } from 'phosphor-react'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { ButtonContainer } from './styles'

export interface DelButtonProps
  extends ComponentProps<typeof ButtonContainer> {}

export const DelButton = forwardRef<
  ElementRef<typeof ButtonContainer>,
  DelButtonProps
>(({ ...props }: DelButtonProps, ref) => {
  return (
    <ButtonContainer type="button" ref={ref} {...props}>
      <X size={20} weight="bold" />
    </ButtonContainer>
  )
})

DelButton.displayName = 'DelButton'