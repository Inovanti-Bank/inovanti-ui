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
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}
        >
          {Story()}
          <Text size="sm">Ativar acesso a dados</Text>
        </Box>
      )
    },
  ],
} as Meta<SwitchProps>

export const Primary: StoryObj<SwitchProps> = {}

export const LightMode: StoryObj<SwitchProps> = {
    decorators: [
    (Story) => {
        return (
        <ThemeProvider theme={light}>
            
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}
          >
          {Story()}
        </Box>
          </ThemeProvider>
      )
    },
  ],
}


export const Small: StoryObj<SwitchProps> = {
  args: {
    small: true
  }
}
