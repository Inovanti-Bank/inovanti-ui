import type { Meta, StoryObj } from '@storybook/react'

import { Box, Text, TextProps } from '@inovanti/react'
export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ab! Nesciunt modi inventore amet! Aperiam, minima veniam. Nemo dolorem',
    $size: 'text-base',
    $fontWeight: 'font-normal',
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
  argTypes: {
    
    $size: {
      options: [
        "text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl"
      ],
      control: {
        type: 'inline-radio',
      },
    },
    $fontWeight: {
      options: [
        "font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black"
      ],
      control: {
        type: 'inline-radio',
      },
    },
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  },
}