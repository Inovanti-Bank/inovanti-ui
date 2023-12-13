import type { Meta, StoryObj } from '@storybook/react'

import { Box, MultiSelectInput, SearchSelectInputProps, light } from '@inovanti/react'
import { ThemeProvider } from 'styled-components'
import { getSizes } from '../../components/GetTokens'
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

export const CustomWidth: StoryObj<SearchSelectInputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<SearchSelectInputProps> = {
  args: {
    error: 'Estado ausente'
  },
}

export const LightTheme: StoryObj<SearchSelectInputProps> = {
  decorators: [
    (Story) => {
        return (
            <ThemeProvider theme={light}>
                <Box>

          {Story()}
                </Box>
          </ThemeProvider>
      )
    },
  ],
}