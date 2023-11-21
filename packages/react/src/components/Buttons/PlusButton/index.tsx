import { Plus } from 'phosphor-react'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { ButtonContainer } from './styles'

export interface PlusButtonProps
  extends ComponentProps<typeof ButtonContainer> {}

export const PlusButton = forwardRef<
  ElementRef<typeof ButtonContainer>,
  PlusButtonProps
>(({ ...props }: PlusButtonProps, ref) => {
  return (
    <ButtonContainer type="button" ref={ref} {...props}>
      <Plus size={24} weight="bold" />
    </ButtonContainer>
  )
})

PlusButton.displayName = 'PlusButton'