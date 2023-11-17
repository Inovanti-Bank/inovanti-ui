import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
        <Text>Testing Box again</Text>
      
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    },
  decorators: [
        (Story) => {
        return (<ThemeProvider theme={dark}>
              <GlobalStyle />
                {Story()}
            </ThemeProvider>)
      }
  ],
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}