import type { Meta, StoryObj } from '@storybook/react'

import { MaskInput, MaskInputProps } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { getSizes } from '../../components/GetTokens'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Form/Inputs/Mask Input',
  component: MaskInput,
  args: {
    inputSize: 'md',
    label: 'Data de nascimento',
    format: '##/##/####',
    
  },
  argTypes: {
    inputSize: {
      control:  'inline-radio',
      options: ['sm', 'md'],
    },
    onValueChange: {
      action: (v: object) => console.log(v) 
    }
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
} as Meta<MaskInputProps>

export const Primary: StoryObj<MaskInputProps> = {
  args: {
    placeholder: 'Digite sua data de nascimento',
  },
}

export const CustomWidth: StoryObj<MaskInputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<MaskInputProps> = {
  args: {
    error: 'Data inválida'
    
  },
}