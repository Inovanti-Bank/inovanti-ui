import type { Meta, StoryObj } from '@storybook/react'

import { InputProps, NumberInput } from '@inovanti/react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/Number Input',
  component: NumberInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Idade',
    
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
    placeholder: 'Digite sua idade',
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
    label: 'Quantas TVs você tem em casa?',
    error: 'Atenção, limite acima do permitido'
    
  },
}