import { AlertBlank, FormAlert } from '@/components/FormAlert'

import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Widths } from '../common.styles'
import { FileInputContainer, Label } from './styles'

export interface FileInputProps extends ComponentProps<typeof Input> {
  label: string
  inputsize?: 'sm' | 'md'
  error?: string
  width?: Widths
}

export const FileInput = forwardRef<ElementRef<typeof Input>, FileInputProps>(
  (
    {
      label,
      inputsize = 'md',
      error,
      width = 'full',
      ...props
    }: FileInputProps,
    ref,
  ) => {
    return (
      <FileInputContainer width={width} type="button">
        <Label>
          {label}
          <Input
            type="file"
            style={{ display: 'none' }}
            inputsize={inputsize}
            ref={ref}
            {...props}
          />
        </Label>
        {error ? <FormAlert>{error}</FormAlert> : <AlertBlank />}
      </FileInputContainer>
    )
  },
)

FileInput.displayName = 'FileInput'