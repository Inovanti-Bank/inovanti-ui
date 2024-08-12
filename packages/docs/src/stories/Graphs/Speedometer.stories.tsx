import type { Meta, StoryObj } from '@storybook/react'

import { Box, Speedometer } from '@inovanti/react'
export default {
  title: 'Graphs/Speedometer',
  component: Speedometer,
  tags: ['autodocs'],
  args: {
    value: 200,
    min: 0,
    max:500,
    label: 'Pontos'
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
    
   
} as Meta<typeof Speedometer>

export const Primary: StoryObj<typeof Speedometer> = {}
