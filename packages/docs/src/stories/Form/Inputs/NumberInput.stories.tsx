import type { Meta, StoryObj } from '@storybook/react'

import { Box, InputProps, NumberInput } from '@inovanti/react'

export default {
  title: 'Form/Inputs/Number Input',
  component: NumberInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Idade',
    
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
    placeholder: 'Digite sua idade',
  },
}

export const Error: StoryObj<InputProps> = {
  args: {
    label: 'Quantas TVs você tem em casa?',
    error: 'Atenção, limite acima do permitido'
    
  },
}