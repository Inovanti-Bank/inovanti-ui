import type { Meta, StoryObj } from '@storybook/react'

import { DecimalInput, InputProps } from '@inovanti/react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/Decimal Input',
  component: DecimalInput,
  args: {
    inputSize: 'md',
    label: 'Qual o seu peso?',
    
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
    placeholder: 'Digite seu peso',
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
    error: 'Peso inválido'
    
  },
}