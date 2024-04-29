'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'

export interface DropdownProps {
  children: ReactNode
  items: ReactNode[]
}

export const Dropdown = ({ items, children }: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className='cursor-pointer'
          name="abrir menu"
          aria-label="open_profile"
          title="open_profile"
        >
          {children}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-background rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          align="end"
          data-side="right"
          sideOffset={17}>
            {items.map((item, i) => (
              <DropdownMenu.Item
              className="cursor-pointer text-base text-black dark:text-white rounded-sm flex items-center h-8 py-0 px-[5px] relative pl-6 select-none outline-none my-[5px] mx-auto data-[highlighted]:bg-gray-50 data-[highlighted]:dark:bg-gray-800"
              key={i}
              onSelect={(e) => e.preventDefault()}>
                {item}
              </DropdownMenu.Item>
            ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
