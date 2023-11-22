import { ElementRef, forwardRef } from 'react'
import { Input } from '../common.styles'
import { FileInputContainer, Label } from './styles'
import { InputProps } from '../common'
import { FormAlert, FormAlertBlank } from '../../FormAlert'

export const FileInput = forwardRef<ElementRef<typeof Input>, InputProps>(
  (
    {
      label,
      inputSize = 'md',
      error,
      width = 'full',
      gridAreaName,
      ...props
    }: InputProps,
    ref,
  ) => {
    return (
      <FileInputContainer
        width={width}
        type="button"
        style={{ gridArea: gridAreaName }}
      >
        <Label>
          {label}
          <Input
            type="file"
            style={{ display: 'none' }}
            inputSize={inputSize}
            ref={ref}
            {...props}
          />
        </Label>
        {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
      </FileInputContainer>
    )
  },
)

FileInput.displayName = 'FileInput'
