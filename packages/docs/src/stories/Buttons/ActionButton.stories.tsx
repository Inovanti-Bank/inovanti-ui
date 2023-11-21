import type { Meta, StoryObj } from '@storybook/react'

import { AButton } from '@inovanti/react'

export default {
  title: 'Form/Buttons/Action',
  component: AButton,
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
} as Meta<typeof AButton>

export const Primary: StoryObj<typeof AButton> = {}

export const Disabled: StoryObj<typeof AButton> = {
    args: {
    disabled: true,
    },
}



