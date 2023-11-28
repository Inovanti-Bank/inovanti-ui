import type { Meta, StoryObj } from '@storybook/react'

import { DateInput, InputProps } from '@inovanti/react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/Date Input',
  component: DateInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Username',
    id: 'testing'
    
  },
  argTypes: {
    inputSize: {
      control:  'inline-radio',
      options: ['sm', 'md'],
    },
    onChange: {
      action: 'writing'
    }
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