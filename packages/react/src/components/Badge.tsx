import { cn } from '@/utils/cn'
import React from 'react'

type BadgeProps = {
  className?: string
  children: React.ReactNode
}

const Badge: React.FC<BadgeProps> = ({ className, children }) => {
  return (
    <span
      className={cn(
        'inline-block rounded-full border-2 px-3 py-1 text-xs font-medium',
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge

