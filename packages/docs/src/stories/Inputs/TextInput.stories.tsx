import type { Meta, StoryObj } from '@storybook/react'

import { InputProps, TextInput } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { getSizes } from '../../components/GetTokens'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Form/Inputs/Text Input',
  component: TextInput,
  args: {
    inputSize: 'md',
    label: 'Username',
    
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

export const Error: StoryObj<InputProps> = {
  args: {
    label: 'E-mail',
    error: 'E-mail inválido'
    
  },
}