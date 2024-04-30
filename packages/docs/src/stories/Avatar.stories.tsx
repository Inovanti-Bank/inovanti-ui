import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps, Box } from '@inovanti/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/natanrei.png',
    alt: 'Natan Rei',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: [
        'sm',
        'md'
      ],
      control: {
        type: 'inline-radio',
      },
    },
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
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'sm'
  },
}
