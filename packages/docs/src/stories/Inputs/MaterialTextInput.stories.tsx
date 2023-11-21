import type { Meta, StoryObj } from '@storybook/react'

import { MaterialTextInput, MaterialTextInputProps } from '@inovanti/react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/Material Text Input',
  component: MaterialTextInput,
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
} as Meta<MaterialTextInputProps>

export const Primary: StoryObj<MaterialTextInputProps> = {
}

export const CustomWidth: StoryObj<MaterialTextInputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<MaterialTextInputProps> = {
  args: {
    label: 'E-mail',
    error: 'E-mail inválido'
    
  },
}