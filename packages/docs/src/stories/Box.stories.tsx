import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@inovanti/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
        <Text>Testing Box again</Text>
      
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}