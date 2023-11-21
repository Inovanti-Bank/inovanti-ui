import type { Meta, StoryObj } from '@storybook/react'

import { InputProps, PasswordInput } from '@inovanti/react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/Password Input',
  component: PasswordInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Senha',
    placeholder: 'Digite sua senha...'
    
  },
  argTypes: {
    inputSize: {
      control:  'inline-radio',
      options: ['sm', 'md'],
    },
  },
  
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {}

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
    label: 'Confirme sua senha',
    error: 'As senhas não coincidem'
    
  },
}