import type { Meta, StoryObj } from '@storybook/react'

import { Box, Switch, SwitchProps, Text, light } from '@inovanti/react'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Form/Buttons/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    onCheckedChange: {
      action: 'click',
    },
  },
   decorators: [
    (Story) => {
      return (
        <Box>
          {Story()}
          <Text>Ativar acesso a dados</Text>
        </Box>
      )
    },
  ],
} as Meta<SwitchProps>

export const Primary: StoryObj<SwitchProps> = {}

export const Small: StoryObj<SwitchProps> = {
  args: {
    small: true
  }
}
