import type { Meta, StoryObj } from '@storybook/react'

import { Box, InputProps, PasswordInput } from '@inovanti/react'

export default {
  title: 'Form/Inputs/Password Input',
  component: PasswordInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Senha',
    placeholder: 'Digite sua senha...'
    
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

export const Primary: StoryObj<InputProps> = {}

export const Error: StoryObj<InputProps> = {
  args: {
    label: 'Confirme sua senha',
    error: 'As senhas não coincidem'
    
  },
}