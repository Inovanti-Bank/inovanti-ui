import type { Meta, StoryObj } from '@storybook/react'

import { Box, TextArea } from '@inovanti/react'

export default {
  title: 'Form/Inputs/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Descrição',
    
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
  
} as Meta<typeof TextArea>

export const Primary: StoryObj<typeof TextArea> = {
  args: {
    placeholder: 'Escreva uma bela descrição',
  },
}

export const Error: StoryObj<typeof TextArea> = {
  args: {
    error: 'Descrição inválida'
    
  },
}