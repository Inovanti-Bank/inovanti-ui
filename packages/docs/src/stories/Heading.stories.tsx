import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@inovanti/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Custom Title',
    size: 'lg',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
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
    children: 'Strong Heading',
    as: 'h1',
    size: '2xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          "The heading will be h2 by default, to change it, simply pass the 'as' property as the tag of your choice (h1, h3, h4 ...).",
      },
    },
  },
}
