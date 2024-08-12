import type { Meta, StoryObj } from '@storybook/react'

import { Box, SearchSelectInput, SearchSelectInputProps } from '@inovanti/react'
import { mockData } from './mockData'

export default {
  title: 'Form/Inputs/Search Select Input',
  component: SearchSelectInput,
  tags: ['autodocs'],
  args: {
    label: 'Estado',
    placeholder: 'Selecione seu estado...',
    data: mockData
    
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
      action: (e: string) => console.log(e)
    }
  },
  
} as Meta<SearchSelectInputProps>

export const Primary: StoryObj<SearchSelectInputProps> = {
  args: {},
}

export const Error: StoryObj<SearchSelectInputProps> = {
  args: {
    error: 'Estado ausente'
  },
}

