import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size?: 'sm' | 'md'
}

export function Avatar({size= 'md', ...props}: AvatarProps) {
  return (
    <AvatarContainer size={size} >
      <AvatarImage {...props} />
      <AvatarFallback size={size} delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
