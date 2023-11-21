import type { Meta, StoryObj } from '@storybook/react'

import { MaskInput, MaskInputProps } from '@inovanti/react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/Mask Input',
  component: MaskInput,
  args: {
    inputSize: 'md',
    label: 'Data de nascimento',
    format: '##/##/####',
    
  },
  argTypes: {
    inputSize: {
      control:  'inline-radio',
      options: ['sm', 'md'],
    },
    onValueChange: {
      action: (v: object) => console.log(v) 
    }
  },
  
} as Meta<MaskInputProps>

export const Primary: StoryObj<MaskInputProps> = {
  args: {
    placeholder: 'Digite sua data de nascimento',
  },
}

export const CustomWidth: StoryObj<MaskInputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<MaskInputProps> = {
  args: {
    error: 'Data inválida'
    
  },
}