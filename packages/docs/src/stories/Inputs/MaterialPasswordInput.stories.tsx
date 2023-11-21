import type { Meta, StoryObj } from '@storybook/react'

import { MaterialPasswordInput, MaterialPasswordInputProps } from '@inovanti/react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/Material Password Input',
  component: MaterialPasswordInput,
  args: {
    inputSize: 'md',
    label: 'Senha',
    
  },
  argTypes: {
    inputSize: {
      control:  'inline-radio',
      options: ['sm', 'md'],
    },
  },
} as Meta<MaterialPasswordInputProps>

export const Primary: StoryObj<MaterialPasswordInputProps> = {}

export const CustomWidth: StoryObj<MaterialPasswordInputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<MaterialPasswordInputProps> = {
  args: {
    label: 'Confirme sua senha',
    error: 'As senhas não coincidem'
    
  },
}