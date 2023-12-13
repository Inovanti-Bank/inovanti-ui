import type { Meta, StoryObj } from '@storybook/react'

import { AButton, Box, Checkbox, Text, light } from '@inovanti/react'
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
   
} as Meta<typeof AButton>

export const Primary: StoryObj<typeof AButton> = {
    decorators: [
        (Story) => {
          return (
            <Box
              as="label"
              style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}
            >
              {Story()}
              <Text size="sm">Aceitar termos de uso</Text>
            </Box>
          )
        },
      ],
}

export const Disabled: StoryObj<typeof AButton> = {
    args: {
    disabled: true,
    },
    decorators: [
      (Story) => {
        return (
          <Box
            as="label"
            style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}
          >
            {Story()}
            <Text size="sm">Aceitar termos de uso</Text>
          </Box>
        )
      },
    ],
}

export const LightMode: StoryObj<typeof AButton> = {
    decorators: [
    (Story) => {
        return (
        <ThemeProvider theme={light}>
            
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}
          >
          {Story()}
          <Text size="sm">Aceitar termos de uso</Text>
        </Box>
          </ThemeProvider>
      )
    },
  ],
}


