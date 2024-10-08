import type { Meta, StoryObj } from '@storybook/react'
import { Box, DataBox } from '@inovanti/react'

export default {
    title: 'Data display/DataBox',
    component: DataBox,
    tags: ['autodocs'],
    args: {
        label: 'Data Box',
        value: 'Some data',
        className: ''
    },
    decorators: [
    (Story) => {
      return (
        <Box>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<typeof DataBox>

export const Primary: StoryObj<typeof DataBox> = {}