import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider, useTheme } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import { ArrowRight } from 'phosphor-react'
function getColors() {
  return Object.keys(dark.colors)
}

function getSizes() {
  return Object.keys(dark.space)
}

export default {
  title: 'Buttons/Default',
  component: Button,
  args: {
    children: (
        "Click me"
      
    ),
    color: undefined,
    width: undefined
  },
  argTypes: {
    color: {
      control: 'inline-radio',
      options: getColors()
    },
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    disabled: {
      control: 'boolean'
    },
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
} as Meta<typeof Button>

export const Primary: StoryObj<typeof Button> = {}

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true
  }
}

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight />
      </>
    ),
  },
}