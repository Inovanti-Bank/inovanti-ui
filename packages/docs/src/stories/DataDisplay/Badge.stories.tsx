import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, Badge, TooltipProps } from '@inovanti/react'

export default {
  title: 'Data display/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    children: 'Hover here'
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'secondary',
        'destructive',
        'outline'
      ],
      control: {
        type: 'inline-radio',
      },
    }
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
  parameters: {
    docs: {
      description: {
         component: 'Uma simples badge'
       }
     }
   }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}




