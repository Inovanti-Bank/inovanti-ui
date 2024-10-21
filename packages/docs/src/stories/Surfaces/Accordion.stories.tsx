import type { Meta, StoryObj } from '@storybook/react'

import { AccordionArrow, AccordionContainer, AccordionContent, AccordionItem, AccordionTrigger, Box, Text } from '@inovanti/react'


const AccordionDemo = () => {
  return (
    <AccordionContainer type='multiple' defaultValue={['item1']}>
      <AccordionItem value="item1">
        <AccordionTrigger isFirst>
          <Text $size={'text-xl'} $fontWeight={'font-semibold'}>Dados básicos</Text>
          <AccordionArrow />
        </AccordionTrigger>
        <AccordionContent>
          Ops, não há nada para mostrar ainda...
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger isLast>
          <Text $size={'text-xl'} $fontWeight={'font-semibold'}>Dados avançados</Text>
          <AccordionArrow />
        </AccordionTrigger>
        <AccordionContent isLast>
          Adivinha? Não tem nada pra mostar aqui também...
        </AccordionContent>
      </AccordionItem>
    </AccordionContainer>)
}
export default {
  title: 'Surfaces/Accordion',
  component: AccordionDemo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code:
          `<AccordionContainer type='multiple' defaultValue={['item1']}>
      <AccordionItem value="item1">
        <AccordionTrigger isFirst>
          <Text $size={'text-xl'} $fontWeight={'font-semibold'}>Dados básicos</Text>
          <AccordionArrow />
        </AccordionTrigger>
        <AccordionContent>
          Ops, não há nada para mostrar ainda...
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger isLast>
          <Text $size={'text-xl'} $fontWeight={'font-semibold'}>Dados avançados</Text>
          <AccordionArrow />
        </AccordionTrigger>
        <AccordionContent isLast>
          Adivinha? Não tem nada pra mostar aqui também...
        </AccordionContent>
      </AccordionItem>
    </AccordionContainer>`,
        languages: 'tsx'
      },
      description: {
        component: 'Atenção! Para alcançar o potencial máximo do componente, não se esqueça de passar as props isFirst, quando for o primeiro Trigger, e isLast quando forem os últimos Trigger e Content Você pode conferir os detalhes clicando em "Show code".'
      }
    }
  }
} as Meta<typeof AccordionDemo>

export const Default: StoryObj<typeof AccordionDemo> = {}