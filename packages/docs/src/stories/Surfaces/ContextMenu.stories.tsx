import type { Meta, StoryObj } from '@storybook/react'

import { Text, ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger, Box } from '@inovanti/react'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'


const ContextMenuDemo = ({ trigger }: { trigger: ReactNode }) => {
    return(
    <ContextMenu>
            <ContextMenuTrigger>{trigger}</ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem className='p-3'>Item 1</ContextMenuItem>
                <ContextMenuItem className='p-3'>Item 2</ContextMenuItem>
                <ContextMenuItem className='p-3'>Item 3</ContextMenuItem>
                </ContextMenuContent>
           </ContextMenu>)
}
export default {
    title: 'Surfaces/ContextMenu',
    component: ContextMenuDemo,
    tags: ['autodocs'],
    args: {
        trigger: <Text>Click here to open the menu</Text>
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
            source: {
                code:
`<ContextMenu>
    <ContextMenuTrigger>{trigger}</ContextMenuTrigger>
        <ContextMenuContent>
            <ContextMenuItem className='p-3'>Item 1</ContextMenuItem>
            <ContextMenuItem className='p-3'>Item 2</ContextMenuItem>
            <ContextMenuItem className='p-3'>Item 3</ContextMenuItem>
        </ContextMenuContent>
</ContextMenu>`,
                languages: 'tsx'
            }
        }
    }
} as Meta<typeof ContextMenuDemo>

export const Default: StoryObj<typeof ContextMenuDemo> = {}