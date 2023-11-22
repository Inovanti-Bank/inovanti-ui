import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, Box, Text, Tooltip, TooltipProps } from '@inovanti/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    message: "Parabéns",
    children:
    <Box>
      <Avatar src='https://github.com/natanrei.png'
        alt='Natan Rei' />
    </Box>
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
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}
        >
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




