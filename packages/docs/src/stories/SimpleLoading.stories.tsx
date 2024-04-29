import type { Meta, StoryObj } from '@storybook/react'

import { Box, Loading, LoadingProps, Text } from '@inovanti/react'

export default {
  title: 'Surfaces/Simple Loading',
  component: Loading,
  tags: ['autodocs'],
  args: {
    size: 6,
  },
  argTypes: {
    size: {
      options: [
        4, 6, 8, 12, 16, 24, 32, 40, 64
      ],
      control: {
        type: 'inline-radio',
      },
    },
    },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
        >
          {Story()}
          <Text>Aceitar termos de uso</Text>
        </Box>
      )
    },
  ],
} as Meta<LoadingProps>

export const Default: StoryObj<LoadingProps> = {}