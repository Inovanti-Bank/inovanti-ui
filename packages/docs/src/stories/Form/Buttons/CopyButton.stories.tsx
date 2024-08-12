import type { Meta, StoryObj } from '@storybook/react'

import { CopyButton, CopyButtonProps } from '@inovanti/react'
import { getSizes } from '../../../components/GetTokens'


export default {
  title: 'Form/Buttons/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
  args: {
    textToCopy: 'Boa. O texto foi copiado',
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
  
} as Meta<CopyButtonProps>

export const Primary: StoryObj<CopyButtonProps> = {}
