import type { Meta, StoryObj } from '@storybook/react'

import { DelButton } from '@inovanti/react'

export default {
  title: 'Form/Buttons/Delete',
  component: DelButton,
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
} as Meta<typeof DelButton>

export const Primary: StoryObj<typeof DelButton> = {}