import { SpaceType } from '@inovanti/tokens'
import { ComponentProps } from 'react'
import { BaseInput } from './BaseInput'

export interface InputProps extends ComponentProps<typeof BaseInput> {
  label?: string
  className?: string
  error?: string
  $width?: SpaceType
  $gridArea?: string
}

export type DataObj = {
  value: string
  label: string
  color?: string
}
