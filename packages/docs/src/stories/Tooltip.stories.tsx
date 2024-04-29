import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, Tooltip, TooltipProps } from '@inovanti/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    message: "Parabéns",
    side: 'right',
    className: 'max-w-40',
    children:
      <Text>Hover here</Text>
  },
  argTypes: {
    side: {
      options: [
        'bottom',
        'left',
        'right',
        'top',
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
         component: 'Passe o mouse sob o avatar para visualizar o tooltip'
       }
     }
   }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}




