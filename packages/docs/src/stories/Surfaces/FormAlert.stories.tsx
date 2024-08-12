import type { Meta, StoryObj } from '@storybook/react'

import { FormAlert, FormAlertProps } from '@inovanti/react'

export default {
  title: 'Surfaces/Form Alert',
  component: FormAlert,
  tags: ['autodocs'],
  args: {
    children: (
        "Usuário ou senha inválidos"
    ),
  },
  argTypes: {
    children: {
      control: 'text',
    },
    type: {
      options: [
        'error',
        'success',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    },
} as Meta<FormAlertProps>

export const Primary: StoryObj<FormAlertProps> = {}

export const Success: StoryObj<FormAlertProps> = {
  args: {
    children: "Parabéns, usuário criado com sucesso",
    type: 'success'
  }
}
