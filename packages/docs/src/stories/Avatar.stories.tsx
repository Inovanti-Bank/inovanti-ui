import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps, Box, Text, light } from '@inovanti/react'
import { ThemeProvider } from 'styled-components'

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
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

export const LightTheme: StoryObj<AvatarProps> = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={light}>

        <Box>
          {Story()}
          <Text>Ativar acesso a dados</Text>
        </Box>
          </ThemeProvider>
      )
    },
  ],
}
