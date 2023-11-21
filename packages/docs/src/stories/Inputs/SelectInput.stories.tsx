import type { Meta, StoryObj } from '@storybook/react'

import { SelectInput, SelectInputProps } from '@inovanti/react'
import { getSizes } from '../../components/GetTokens'
import { mockData } from './mockData'

export default {
  title: 'Form/Inputs/Select Input',
  component: SelectInput,
  args: {
    label: 'Estado',
    placeholder: 'Selecione seu estado...',
    data: mockData
    
  },
  argTypes: {
    inputSize: {
      control:  'inline-radio',
      options: ['sm', 'md'],
    },
    onChange: {
      action: (e: string) => console.log(e)
    }
  },
  
} as Meta<SelectInputProps>

export const Primary: StoryObj<SelectInputProps> = {
  args: {},
}

export const CustomWidth: StoryObj<SelectInputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<SelectInputProps> = {
  args: {
    error: 'Estado ausente'
    
  },
}

