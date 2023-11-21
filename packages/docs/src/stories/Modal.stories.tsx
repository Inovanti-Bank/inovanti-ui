import type { Meta, StoryObj } from '@storybook/react'

import { Heading, Modal, ModalProps, Text } from '@inovanti/react'

export default {
  title: 'Surfaces/Modal',
  component: Modal,
  args: {
    isOpen: true,
    children: (
      <>
        <Heading>Modal is open</Heading>
        <Text>Implement the function onRequestClose and pass to the component to close</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    }
    },
} as Meta<ModalProps>

export const Default: StoryObj<ModalProps> = {}