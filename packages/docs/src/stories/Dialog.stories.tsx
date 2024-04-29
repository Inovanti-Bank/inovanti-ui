import type { Meta, StoryObj } from '@storybook/react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Text } from '@inovanti/react'
import { ReactNode } from 'react'

const DialogDemo = ({trigger}: {trigger: ReactNode}) => {
  return <Dialog>
  <DialogTrigger>{trigger}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
}

export default {
  title: 'Surfaces/Dialog',
  component: DialogDemo,
  tags: ['autodocs'],
  args: {
    trigger: <Text className='cursor-pointer'>Click here to open it</Text>,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Dialog>
  <DialogTrigger><Text className='cursor-pointer'>Click here to open it</Text></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
        `,
        language: 'tsx'
      }
    }
  }
} as Meta<typeof DialogDemo>

export const Default: StoryObj<typeof DialogDemo> = {}