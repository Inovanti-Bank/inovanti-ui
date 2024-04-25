import type { Meta, StoryObj } from '@storybook/react'

import { Box, Checkbox, Text, light } from '@inovanti/react'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Form/Buttons/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    children: (
        "Click me"
      
    ),
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
  },
   
} as Meta<typeof Checkbox>

export const Primary: StoryObj<typeof Checkbox> = {
    decorators: [
        (Story) => {
          return (
            <Box>
              {Story()}
              <Text>Aceitar termos de uso</Text>
            </Box>
          )
        },
      ],
}

export const Disabled: StoryObj<typeof Checkbox> = {
    args: {
    disabled: true,
    },
    decorators: [
      (Story) => {
        return (
          <Box>
            {Story()}
            <Text>Aceitar termos de uso</Text>
          </Box>
        )
      },
    ],
}

export const LightMode: StoryObj<typeof Checkbox> = {
    decorators: [
    (Story) => {
        return (
        <ThemeProvider theme={light}>
            
        <Box>
          {Story()}
          <Text>Aceitar termos de uso</Text>
        </Box>
          </ThemeProvider>
      )
    },
  ],
}


