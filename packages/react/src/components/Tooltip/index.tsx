import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

interface TooltipProps {
  children: ReactNode
  message: string
  side?: 'bottom' | 'left' | 'right' | 'top' | undefined
}

export const Tooltip = ({ children, message, side = 'left' }: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5} side={side}>
            {message}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}