import type { Meta, StoryObj } from '@storybook/react'

import { PlusButton } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Form/Buttons/Plus',
  component: PlusButton,
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
} as Meta<typeof PlusButton>

export const Primary: StoryObj<typeof PlusButton> = {}