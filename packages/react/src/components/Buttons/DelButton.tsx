'use client'

import { X } from '@phosphor-icons/react/dist/ssr/X';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

export interface DelButtonProps extends ComponentPropsWithoutRef<'button'> { }

export const DelButton = forwardRef<HTMLButtonElement, DelButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button
        type= "button"
        className = "cursor-pointer flex items-center justify-center p-2 rounded-full mb-3 focus:outline-none bg-red-300 bg-opacity-90 hover:bg-red-400 focus:bg-red-400 text-white"
        ref = { ref }
        {...props}
          >
            <X size={ 20 } weight = "bold" />
      </button>
    )
  }
);

DelButton.displayName = 'DelButton';
