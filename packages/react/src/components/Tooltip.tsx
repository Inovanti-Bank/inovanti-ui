'use client'

import * as RadixTooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { cn } from '@/utils/cn'

export interface TooltipProps {
  children: ReactNode | string
  message: ReactNode | string
  className?: string
  side?: 'bottom' | 'left' | 'right' | 'top'
}

export const Tooltip = ({ children, message, className, side = 'right' }: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={cn(
              "data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-gray-quaternary select-none rounded-[4px] bg-foreground px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]",
              className
            )}
            sideOffset={5}
            side={side}
          >
            {message}
            <RadixTooltip.Arrow className="fill-inherit" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
