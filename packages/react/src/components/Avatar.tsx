import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '@/utils/cn'
export interface AvatarProps extends ComponentProps<typeof AvatarPrimitive.AvatarImage> {
  size?: 'sm' | 'md'
}

export function Avatar({size= 'md', ...props}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        'rounded-full inline-block overflow-hidden',
        size === 'md' ? 'w-16 h-16' : 'w-10 h-10',
      )}
    >
      <AvatarPrimitive.AvatarImage
        className='w-full h-full object-cover rounded-[inherit]'
        {...props}
      />
      <AvatarPrimitive.Fallback
        className={cn(
          'flex items-center justify-center text-accent bg-primary-foreground',
          size === 'md' ? 'w-16 h-16' : 'w-10 h-10',
        )}
        delayMs={600}
      >
        <User className='w-1/2 h-1/2' />
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}

Avatar.displayName = 'Avatar'