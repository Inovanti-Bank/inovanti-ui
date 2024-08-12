import type { Meta, StoryObj } from '@storybook/react'

import { Box, MaskInput, MaskInputProps } from '@inovanti/react'

export default {
  title: 'Form/Inputs/Mask Input',
  component: MaskInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Data de nascimento',
    format: '##/##/####',
    
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          {Story()}
        </Box>
      )
    },
  ],
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

export const Error: StoryObj<MaskInputProps> = {
  args: {
    error: 'Data inválida'
    
  },
}