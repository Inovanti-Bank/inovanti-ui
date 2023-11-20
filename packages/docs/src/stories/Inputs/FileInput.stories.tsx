import type { Meta, StoryObj } from '@storybook/react'

import { FileInput, InputProps } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { getSizes } from '../../components/GetTokens'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Form/Inputs/File Input',
  component: FileInput,
  args: {
    inputSize: 'md',
    label: 'Selecione o arquivo',
    
  },
  argTypes: {
    inputSize: {
      control:  'inline-radio',
      options: ['sm', 'md'],
    },
  },
  decorators: [
    (Story) => {
          return (
          <ThemeProvider theme={dark}>
              <GlobalStyle />
              {Story()}
            </ThemeProvider>
      )
    },
  ],
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'Type of name',
  },
}

export const CustomWidth: StoryObj<InputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
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