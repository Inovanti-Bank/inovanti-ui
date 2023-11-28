import type { Meta, StoryObj } from '@storybook/react'

import { Box, Button, InputProps, SimpleTextInput } from '@inovanti/react'
import { MagnifyingGlass } from 'phosphor-react'
import { getSizes } from '../../components/GetTokens'

export default {
  title: 'Form/Inputs/Simple Text Input',
  component: SimpleTextInput,
  tags: ['autodocs'],
  args: {
    inputSize: 'md',
    
  },
  argTypes: {
    inputSize: {
      control:  'inline-radio',
      options: ['sm', 'md'],
    },
  },
  
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'Type of name',
  },
}

export const CustomWidth: StoryObj<InputProps> = {
  argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
  },
}

export const SearchBar: StoryObj<InputProps> = {
    argTypes: {
    width: {
      control: 'inline-radio',
      options: getSizes()
    },
    
    },
    args: {
    width: 96,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center' }}
        >
          {Story()}
          <Button width={10} color='primary450'><MagnifyingGlass /></Button>
        </Box>
      )
    },
  ],
}