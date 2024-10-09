import type { Meta, StoryObj } from '@storybook/react'

import { Box, Calendar, CalendarProps } from '@inovanti/react'

export default {
    title: 'Form/Inputs/Calendar',
    component: Calendar,
    tags: ['autodocs'],
    args: {
        showOutsideDays: false,
    },
    argTypes:{},
    decorators: [
    (Story) => {
      return (
        <Box className='w-fit mx-auto'>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<CalendarProps>

export const Primary: StoryObj<CalendarProps> = {}