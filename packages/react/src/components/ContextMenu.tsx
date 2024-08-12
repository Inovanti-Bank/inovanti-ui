import { cn } from '@/utils/cn'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { ReactNode } from 'react'

export function ContextMenu({ children }: { children: ReactNode }) {
  return <ContextMenuPrimitive.Root>{children}</ContextMenuPrimitive.Root>
}

export function ContextMenuTrigger({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <ContextMenuPrimitive.Trigger className={className}>
      {children}
    </ContextMenuPrimitive.Trigger>
  )
}

export function ContextMenuContent({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        className={cn('p-1 rounded-md bg-gray-50 dark:bg-gray-950', className)}
      >
        {children}
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Portal>
  )
}

export function ContextMenuItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <ContextMenuPrimitive.ContextMenuItem className={className}>
      {children}
    </ContextMenuPrimitive.ContextMenuItem>
  )
}
