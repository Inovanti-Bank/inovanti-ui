import type { Meta, StoryObj } from '@storybook/react'

import { Box, Heading, HeadingProps } from '@inovanti/react'
export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children:
      'This is the Title',
    $size: 'text-lg',
    $fontWeight: 'font-semibold',
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
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'This is the primary title',
    as: 'h1'
  },
}