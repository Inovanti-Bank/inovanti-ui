import { Check } from '@phosphor-icons/react/dist/ssr/Check';
import { ComponentProps } from 'react'
import { cn } from '@/utils/cn'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

export interface CheckboxProps
  extends ComponentProps<typeof RadixCheckbox.Root> {
  className: string
  indicatorClassName: string
  }

export function Checkbox({className, indicatorClassName, ...props}: CheckboxProps) {
  return (
    <RadixCheckbox.Root
      className={cn(
        'w-6 h-6 bg-white rounded-sm leading-[0] cursor-pointer box-border',
        'flex items-center justify-center border border-gray-700',
        'disabled:bg-gray-300 disabled:cursor-not-allowed',
        'data-[state=checked]:bg-primary',
        'focus:data-[state=checked]:border-primary',
        className
      )}
      {...props}
    >
      <RadixCheckbox.Indicator
        className={cn(
          'text-black w-4 h-4',
          'data-[state=checked]:animate-slideIn',
          'data-[state=unchecked]:animate-slideOut',
          indicatorClassName
        )}
        asChild
      >
        <Check weight="bold" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}

Checkbox.displayName = 'Checkbox'
