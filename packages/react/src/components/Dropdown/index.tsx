import { ReactNode } from 'react'
import { Box, Container, Content, Item, Trigger, TriggerButton } from './styles'

export interface DropdownProps {
  children: ReactNode
  items: ReactNode[]
}

export const Dropdown = ({ items, children }: DropdownProps) => {
  return (
    <Container>
      <Trigger asChild>
        <TriggerButton
          name="abrir menu"
          aria-label="open_profile"
          title="open_profile"
        >
          {children}
        </TriggerButton>
      </Trigger>

      <Box>
        <Content align="end" data-side="right" sideOffset={17}>
          {items.map((item, i) => (
            <Item key={i} onSelect={(e) => e.preventDefault()}>
              {item}
            </Item>
          ))}
        </Content>
      </Box>
    </Container>
  )
}
