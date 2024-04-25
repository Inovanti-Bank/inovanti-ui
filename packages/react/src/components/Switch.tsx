import { cn } from '@/utils/cn'
import { Root, Thumb } from '@radix-ui/react-switch'

export interface SwitchProps {
  checked: boolean
  onCheckedChange: () => void
  small?: boolean
}

export function Switch({ checked, onCheckedChange, small = false }: SwitchProps) {
  return (
    <Root
      className={cn(
        small ? 'w-[26px] h-[17px]' : 'w-[33px] h-[21px]',
        'mt-[1px] mr-[10px] mb-[1px] ml-0',
        'cursor-pointer',
        'rounded-full relative',
        'data-[state=checked]:bg-primary',
        'bg-gray-300'
      )}
      checked={checked}
      onCheckedChange={onCheckedChange}
      >
        <Thumb
        className={cn(
          'block',
          small ? 'w-[13px] h-[13px]' : 'w-[17px] h-[17px]',
          'bg-white rounded-full',
          'transition-transform duration-100',
          'translate-x-0.5 will-change-transform',
          small ? 'data-[state=checked]:translate-x-[11px]' : 
             'data-[state=checked]:translate-x-[13px]'
          )}
        />
    </Root>
  )
}
