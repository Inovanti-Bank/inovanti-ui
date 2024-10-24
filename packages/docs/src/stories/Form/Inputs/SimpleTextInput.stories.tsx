import type { Meta, StoryObj } from '@storybook/react';

import { Box, Button, InputProps, SimpleTextInput } from '@inovanti/react';
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';

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
  decorators: [
    (Story) => {
      return (
        <Box>
          {Story()}
        </Box>
      )
    },
  ],
}

export const SearchBar: StoryObj<InputProps> = {
    argTypes: {
    },
    args: {
    placeholder: 'Pesquise por nome...'
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label">
          {Story()}
          <Button color='primary450'><MagnifyingGlass /></Button>
        </Box>
      )
    },
  ],
}