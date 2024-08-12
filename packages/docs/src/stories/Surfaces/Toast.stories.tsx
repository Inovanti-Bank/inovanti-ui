import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Toaster, useToast } from '@inovanti/react'

const ToastDemo = () => {
  const { toast } = useToast()

  return <button onClick={() => toast({title: 'Congrats!', description: 'You openned the Toast'})}>Click to open toast</button>
}

export default {
  title: 'Surfaces/Toast',
  component: ToastDemo,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box>
          <Toaster />
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}