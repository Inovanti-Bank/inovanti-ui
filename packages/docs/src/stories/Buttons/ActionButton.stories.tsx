import type { Meta, StoryObj } from '@storybook/react'

import { BoxProps, Button } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Buttons/Action',
  component: Button,
  args: {
    children: (
        <>Click me</>
      
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
} as Meta<typeof Button>

export const Primary: StoryObj<typeof Button> = {}