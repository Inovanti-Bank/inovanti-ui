import type { Meta, StoryObj } from '@storybook/react'

import { Box, PasswordInput, TextInputProps } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Form/Password Input',
  component: PasswordInput,
  args: {
      inputSize: 'md',
      label: 'Type your password'
  },
  argTypes: {
    inputSize: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
      },
  },
  decorators: [
    (Story) => {
          return (
          <ThemeProvider theme={dark}>
              <GlobalStyle />
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
        >
          {Story()}
        </Box></ThemeProvider>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type of name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
