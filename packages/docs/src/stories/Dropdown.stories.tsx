import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, Box, Dropdown, DropdownProps, Switch, Text, light } from '@inovanti/react'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Data display/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    items: [
      <>
      <Switch
        key={1}
        checked={true}
        onCheckedChange={() => {}}
      />
      Tema escuro
    </>,
    <button key={2} onClick={() => {}}>
      Alterar senha
    </button>,
    <button key={2} onClick={() => {}}>
      Alterar avatar
    </button>,
    <button key={2} onClick={() => {}}>
      Sair
    </button>
    ],
    children:
      <Avatar src='https://github.com/natanrei.pnge'
        size='sm'
        alt='Natan Rei' />
  },
  argTypes: {
    side: {
      options: [
        'bottom',
        'left',
        'right',
        'top',
      ],
      control: {
        type: 'inline-radio',
      },
    }
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
  parameters: {
    docs: {
      description: {
         component: 'Pode ser usado no header como um menu com funcionalidades ligadas ao usuário (Clique no avatar para visualizar)'
       }
     }
   }
} as Meta<DropdownProps>

export const Primary: StoryObj<DropdownProps> = {}

export const LightTheme: StoryObj<DropdownProps> = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={light}>
          {Story()}
        </ThemeProvider>
      )
    },
  ],
}



