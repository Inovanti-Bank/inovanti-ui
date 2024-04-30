import type { Meta, StoryObj } from '@storybook/react';

import { Box, TextPrefixInput, TextPrefixInputProps } from '@inovanti/react';
import { User } from '@phosphor-icons/react/dist/ssr/User';

export default {
  title: 'Form/Inputs/Text Prefix Input',
  component: TextPrefixInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Username',
    prefix: 'inovanti.com.br/'
    
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
    inputSize: {
      control:  'inline-radio',
      options: ['sm', 'md'],
    },
  },
  
} as Meta<TextPrefixInputProps>

export const Primary: StoryObj<TextPrefixInputProps> = {
  args: {
  },
}

export const WithIcon: StoryObj<TextPrefixInputProps> = {
  args: {
    prefix: <div style={{ paddingRight: '0.5rem',paddingLeft: '0.3rem' }}><User size={16} /></div>
  },
}

export const Error: StoryObj<TextPrefixInputProps> = {
  args: {
    label: 'E-mail',
    error: 'E-mail inválido'
    
  },
}