import type { Meta, StoryObj } from '@storybook/react'

import { Box, HeadingProps, Skeleton } from '@inovanti/react'
export default {
  title: 'Data Display/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: {
    className: 'w-80 h-40'
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
    
   
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
