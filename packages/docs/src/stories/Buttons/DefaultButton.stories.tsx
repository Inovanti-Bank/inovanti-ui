import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@inovanti/react'
import { ArrowRight } from 'phosphor-react'
import { getColors, getSizes } from '../../components/GetTokens'


export default {
  title: 'Form/Buttons/Default',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: (
        "Click me"
      
    ),
    $size: undefined,
    color: undefined,
    width: undefined
  },
  argTypes: {
    color: {
      control: 'inline-radio',
      options: getColors()
    },
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    disabled: {
      control: 'boolean'
    },
    $size: {
      options: [
        'sm',
        'md',
        'normal'
      ],
      control: {
        type: 'inline-radio',
      },
    },
    onClick: {
      action: 'click',
    },
  },
  
} as Meta<typeof Button>

export const Primary: StoryObj<typeof Button> = {}

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true
  }
}

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight />
      </>
    ),
  },
}