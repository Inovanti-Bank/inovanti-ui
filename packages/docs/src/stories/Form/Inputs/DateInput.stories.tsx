import type { Meta, StoryObj } from '@storybook/react'

import { Box, DateInput, InputProps } from '@inovanti/react'

export default {
  title: 'Form/Inputs/Date Input',
  component: DateInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Username',
    id: 'testing'
    
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
    onChange: {
      action: 'writing'
    }
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