import type { Meta, StoryObj } from '@storybook/react'

import { Box, MaterialTextInput, MaterialTextInputProps } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { getSizes } from '../../components/GetTokens'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Form/Inputs/Material Text Input',
  component: MaterialTextInput,
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
              <Box>
              {Story()}

              </Box>
            </ThemeProvider>
      )
    },
  ],
} as Meta<MaterialTextInputProps>

export const Primary: StoryObj<MaterialTextInputProps> = {
}

export const CustomWidth: StoryObj<MaterialTextInputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<MaterialTextInputProps> = {
  args: {
    label: 'E-mail',
    error: 'E-mail inválido'
    
  },
}