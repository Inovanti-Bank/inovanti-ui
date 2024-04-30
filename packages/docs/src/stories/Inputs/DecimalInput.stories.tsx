import type { Meta, StoryObj } from '@storybook/react'

import { Box, DecimalInput, InputProps } from '@inovanti/react'

export default {
  title: 'Form/Inputs/Decimal Input',
  component: DecimalInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Qual o seu peso?',
    
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
  },
  
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'Digite seu peso',
  },
}

export const Error: StoryObj<InputProps> = {
  args: {
    error: 'Peso inválido'
    
  },
}