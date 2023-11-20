import type { Meta, StoryObj } from '@storybook/react'

import { AButton } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Form/Buttons/Action',
  component: AButton,
  args: {
    children: (
        "Click me"
      
    ),
  },
  argTypes: {
    onClick: {
      action: 'click',
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
} as Meta<typeof AButton>

export const Primary: StoryObj<typeof AButton> = {}

export const Disabled: StoryObj<typeof AButton> = {
    args: {
    disabled: true,
    },
}



