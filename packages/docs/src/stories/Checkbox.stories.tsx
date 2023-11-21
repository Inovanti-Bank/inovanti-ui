import type { Meta, StoryObj } from '@storybook/react'

import { AButton, Box, Checkbox, Text } from '@inovanti/react'

export default {
  title: 'Form/Buttons/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
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
      return (
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}
        >
          {Story()}
          <Text size="sm">Aceitar termos de uso</Text>
        </Box>
      )
    },
  ],
} as Meta<typeof AButton>

export const Primary: StoryObj<typeof AButton> = {}

export const Disabled: StoryObj<typeof AButton> = {
    args: {
    disabled: true,
    },
}



