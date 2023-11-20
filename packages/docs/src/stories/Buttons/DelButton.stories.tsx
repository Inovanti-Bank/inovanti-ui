import type { Meta, StoryObj } from '@storybook/react'

import { DelButton } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'

export default {
  title: 'Form/Buttons/Delete',
  component: DelButton,
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
} as Meta<typeof DelButton>

export const Primary: StoryObj<typeof DelButton> = {}