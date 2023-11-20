import type { Meta, StoryObj } from '@storybook/react'

import { PasswordInput, TextInputProps } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { getSizes } from '../../components/GetTokens'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Form/Inputs/Password Input',
  component: PasswordInput,
  args: {
    inputSize: 'md',
    label: 'Senha',
    placeholder: 'Digite sua senha...'
    
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
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const CustomWidth: StoryObj<TextInputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<TextInputProps> = {
  args: {
    label: 'Confirme sua senha',
    error: 'As senhas não coincidem'
    
  },
}