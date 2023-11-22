import type { Meta, StoryObj } from '@storybook/react'

import { Box, Switch, SwitchProps, Text } from '@inovanti/react'

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



