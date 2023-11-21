import type { Meta, StoryObj } from '@storybook/react'

import { InputProps, TextInput } from '@inovanti/react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Username',
    
  },
  argTypes: {
    inputSize: {
      control:  'inline-radio',
      options: ['sm', 'md'],
    },
  },
  
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'Type of name',
  },
}

export const CustomWidth: StoryObj<InputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<InputProps> = {
  args: {
    label: 'E-mail',
    error: 'E-mail inválido'
    
  },
}