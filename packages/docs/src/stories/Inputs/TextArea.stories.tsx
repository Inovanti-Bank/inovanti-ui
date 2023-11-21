import type { Meta, StoryObj } from '@storybook/react'

import { TextAreaInputProps, TextArea } from '@inovanti/react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/TextArea',
  component: TextArea,
  args: {
    inputSize: 'md',
    label: 'Descrição',
    
  },
  argTypes: {
    inputSize: {
      control:  'inline-radio',
      options: ['sm', 'md'],
    },
  },
  
} as Meta<TextAreaInputProps>

export const Primary: StoryObj<TextAreaInputProps> = {
  args: {
    placeholder: 'Escreva uma bela descrição',
  },
}

export const CustomWidth: StoryObj<TextAreaInputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<TextAreaInputProps> = {
  args: {
    error: 'Descrição inválida'
    
  },
}