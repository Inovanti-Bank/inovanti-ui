import { ComponentProps } from 'react'
import { Spaces } from '../../types/styles'
import { Input } from './common.styles'

export interface InputProps extends ComponentProps<typeof Input> {
  label: string
  inputSize?: 'sm' | 'md'
  error?: string
  width?: Spaces
  gridAreaName?: string
}

export type DataObj = {
  value: string
  label: string
}