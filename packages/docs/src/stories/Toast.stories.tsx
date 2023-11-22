import type { Meta, StoryObj } from '@storybook/react'

import { Toast, ToastProps, ToastProvider } from '@inovanti/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: "Parabéns, Você conseguiu!"
  },
  argTypes: {
    onClick: {
      action: 'click',
    },
    withClose: {
      control: 'boolean'
    },
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    open: {
      control: 'boolean'
    },

  },
   decorators: [
    (Story) => {
       return (
        <ToastProvider>
          {Story()}
        </ToastProvider>
      )
    },
  ],
   parameters: {
    docs: {
      description: {
         component: 'Você precisa colocar o ToastProvider em seu projeto para que este componente funcione conforme o esperado'
       }
     }
   }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const WithDescription: StoryObj<ToastProps> = {
  args: {
    description: "Acabou de ganhar um vale-carro no valor de R$ 5.000,00!"
  }
}


export const WithCloseButton: StoryObj<ToastProps> = {
    args: {
    withClose: true,
    description: "Acabou de ganhar um vale-carro no valor de R$ 5.000,00!"
    },
}



