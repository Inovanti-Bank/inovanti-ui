import type { Meta, StoryObj } from '@storybook/react'

import { PasswordPrefixInput, PasswordPrefixInputProps } from '@inovanti/react'
import { Key } from 'phosphor-react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/Password Prefix Input',
  component: PasswordPrefixInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    label: 'Password',
    prefix: <div style={{ paddingRight: '0.5rem', paddingLeft: '0.3rem' }}><Key size={16} /></div>
    
  },
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

export const CustomWidth: StoryObj<PasswordPrefixInputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const Error: StoryObj<PasswordPrefixInputProps> = {
  args: {
    label: 'E-mail',
    error: 'E-mail inválido'
    
  },
}