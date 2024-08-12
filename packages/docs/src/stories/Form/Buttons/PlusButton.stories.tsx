import type { Meta, StoryObj } from '@storybook/react'

import { PlusButton } from '@inovanti/react'

export default {
  title: 'Form/Buttons/Plus',
  component: PlusButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof PlusButton>

export const Primary: StoryObj<typeof PlusButton> = {}