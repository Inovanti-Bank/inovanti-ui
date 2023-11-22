import * as Avatar from '@radix-ui/react-avatar'
import styled from 'styled-components'

interface AvatarContainerProps {
  size: 'sm' | 'md'
}

export const AvatarContainer = styled(Avatar.Root)<AvatarContainerProps>`
  border-radius: 100%;
  display: inline-block;
  width: ${({ theme, size }) => size === 'md' ? theme.space[16] : theme.space[12]};
  height: ${({ theme, size }) => size === 'md' ? theme.space[16] : theme.space[12]};
  overflow: hidden;
`

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

export const AvatarFallback = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray300};
  color: ${({ theme }) => theme.colors.textHigh};

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
