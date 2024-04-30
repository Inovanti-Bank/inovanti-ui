import type { Meta, StoryObj } from '@storybook/react';

import { Box, PasswordPrefixInput, PasswordPrefixInputProps } from '@inovanti/react';
import { Key } from '@phosphor-icons/react/dist/ssr/Key';

export default {
  title: 'Form/Inputs/Password Prefix Input',
  component: PasswordPrefixInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Password',
    prefix: <div style={{ paddingRight: '0.5rem', paddingLeft: '0.3rem' }}><Key size={16} /></div>
    
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
  
} as Meta<PasswordPrefixInputProps>

export const Primary: StoryObj<PasswordPrefixInputProps> = {
  args: {
  },
}

export const Error: StoryObj<PasswordPrefixInputProps> = {
  args: {
    label: 'Confirme sua senha',
    error: 'As senhas não coincidem'
    
  },
}