import type { Meta, StoryObj } from '@storybook/react'

import { FullScreenLoading, FullScreenLoadingProps } from '@inovanti/react'

export default {
  title: 'Surfaces/Loads/FullScreen Loading',
  component: FullScreenLoading,
  tags: ['autodocs'],
  args: {
    message: "Buscando dados na API... ",
  },
  argTypes: {
    message: {
      control: "text",
    }
    },
} as Meta<FullScreenLoadingProps>

export const Default: StoryObj<FullScreenLoadingProps> = {}