import type { Meta, StoryObj } from '@storybook/react'

import { Box, Button } from '@inovanti/react'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr/ArrowRight';
import { getSizes } from '../../../components/GetTokens'


export default {
  title: 'Form/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: (
        "Click me"
      
    ),
    $width: undefined
  },
  argTypes: {
    $width: {
      control: 'inline-radio',
      options: getSizes()
    },
    disabled: {
      control: 'boolean'
    },
    onClick: {
      action: 'click',
    },
  },
  decorators: [
    (Story) => {
      return <Box className="flex justify-center">{Story()}</Box>;
    },
  ],
  
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
