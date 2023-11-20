import type { Meta, StoryObj } from '@storybook/react'

import { Heading, Modal, ModalProps, Text } from '@inovanti/react'
import { dark } from '@inovanti/tokens'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'

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
  decorators: [
    (Story) => {
      return (<ThemeProvider theme={dark}>
        <GlobalStyle />
          {Story()}
        </ThemeProvider>)
      }
  ],
} as Meta<ModalProps>

export const Default: StoryObj<ModalProps> = {}