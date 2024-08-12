import type { Meta, StoryObj } from '@storybook/react'

import { Box, InputProps, TextInput } from '@inovanti/react'

export default {
  title: 'Form/Inputs/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Username',
    
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
    placeholder: 'Type of name',
  },
}

export const Error: StoryObj<InputProps> = {
  args: {
    label: 'E-mail',
    error: 'E-mail inválido'
    
  },
}