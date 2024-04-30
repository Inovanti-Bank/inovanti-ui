import type { Meta, StoryObj } from '@storybook/react'

import { Box, FileInput, InputProps } from '@inovanti/react'

export default {
  title: 'Form/Inputs/File Input',
  component: FileInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Selecione o arquivo',
    
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