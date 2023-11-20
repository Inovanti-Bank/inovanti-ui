import type { Meta, StoryObj } from '@storybook/react'

import { Box, MaterialPasswordInput, MaterialPasswordInputProps } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { getSizes } from '../../components/GetTokens'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Form/Inputs/Material Password Input',
  component: MaterialPasswordInput,
  args: {
    inputSize: 'md',
    label: 'Senha',
    
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
              <Box>
              {Story()}

              </Box>
            </ThemeProvider>
      )
    },
  ],
} as Meta<MaterialPasswordInputProps>

export const Primary: StoryObj<MaterialPasswordInputProps> = {}

export const CustomWidth: StoryObj<MaterialPasswordInputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<MaterialPasswordInputProps> = {
  args: {
    label: 'Confirme sua senha',
    error: 'As senhas não coincidem'
    
  },
}