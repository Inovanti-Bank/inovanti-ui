import type { Meta, StoryObj } from '@storybook/react'

import { Box, MultiSelectInput, SearchSelectInputProps } from '@inovanti/react'
import { mockDataProcess } from './mockData'

export default {
  title: 'Form/Inputs/Multi Select Input',
  component: MultiSelectInput,
  tags: ['autodocs'],
  args: {
    label: 'Palavras chave',
      placeholder: 'Selecione as palavras...',
    flexColumn: false,
    data: mockDataProcess
    
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