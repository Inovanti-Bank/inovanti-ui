import type { Meta, StoryObj } from '@storybook/react'

import { FileInput, InputProps } from '@inovanti/react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/File Input',
  component: FileInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Selecione o arquivo',
    
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

export const SelectedFile: StoryObj<InputProps> = {
  args: {
    label: 'testando.html'
  },
}

export const Error: StoryObj<InputProps> = {
  args: {
    error: 'Formato inválido'
  },
}