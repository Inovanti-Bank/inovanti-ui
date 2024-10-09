import type { Meta, StoryObj } from '@storybook/react'

import { JsonToList, JsonToListProps } from '@inovanti/react'

export default {
  title: 'Surfaces/Json to List',
  component: JsonToList,
  tags: ['autodocs'],
  args: {
    json: { teste: 'teste' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Esse componente tem por objetivo converter um json para uma visualização mais amigável.'
      }
    }
  }
} as Meta<JsonToListProps>

export const Default: StoryObj<JsonToListProps> = {}


export const RudeJson: StoryObj<JsonToListProps> = {
  args: {
    json: {
      "name": "Teste novo formato",
      "email": "natan.inovanti@gmail.com",
      "taxid_number": "123456789",
      "type": "user",
      "mobile_phone": "41912345678",
      "mobile_phone_country": "55",
      "user_name": "natan.inovanti",
      "birth_date": "2000-01-01",
      "organizations": ["teste1", "teste2"]
    }
  }
}