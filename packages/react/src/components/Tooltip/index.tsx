import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface TooltipProps {
  children: ReactNode | string
  message: ReactNode | string
  className?: string
  side?: 'bottom' | 'left' | 'right' | 'top'
}

export const Tooltip = ({ children, message, className, side = 'left' }: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={cn(
              "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              className
            )}
            sideOffset={5}
            side={side}
          >
            {message}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
