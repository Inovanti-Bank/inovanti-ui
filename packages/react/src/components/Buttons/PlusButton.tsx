import { Plus } from 'phosphor-react';
import { forwardRef, ComponentPropsWithoutRef } from 'react';

export interface PlusButtonProps extends ComponentPropsWithoutRef<'button'> {}

export const PlusButton = forwardRef<HTMLButtonElement, PlusButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button
        type="button"
        className="cursor-pointer flex items-center justify-center px-3 py-2 rounded-tl-lg rounded-tr-lg border-none bg-green-300 hover:bg-green-400 focus:bg-green-400 text-white"
        ref={ref}
        {...props}
      >
        <Plus size={24} weight="bold" />
      </button>
    )
  }
);

PlusButton.displayName = 'PlusButton'