import type { Meta, StoryObj } from '@storybook/react'

import { Box, Loading, LoadingProps, Text } from '@inovanti/react'

export default {
  title: 'Surfaces/Loads/Simple Loading',
  component: Loading,
  tags: ['autodocs'],
  args: {
    size: 32,
  },
  argTypes: {
    size: {
      control: "number",
    }
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
} as Meta<LoadingProps>

export const Default: StoryObj<LoadingProps> = {}