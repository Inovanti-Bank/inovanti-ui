import type { Meta, StoryObj } from '@storybook/react'

import { Box, PageHead, PageHeadLeft, PageHeadRight } from '@inovanti/react'
import { forwardRef, HTMLProps, useRef } from 'react'

type DivProps = HTMLProps<HTMLDivElement>


export default {
    title: 'Typography/PageHead',
    component: PageHead,
    tags: ['autodocs'],
    args: {
        children: <><PageHeadLeft>This is the Left PageHead</PageHeadLeft><PageHeadRight>This is the Right PageHead</PageHeadRight></>

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
`<PageHead>
    <PageHeadLeft>
      PageHeadLeft
    </PageHeadLeft>
    <PageHeadRight>
      PageHeadRight
    </PageHeadRight>
</PageHead>`,
                languages: 'tsx'
            }
        }
    }
    
} as Meta<DivProps>

export const Primary: StoryObj<typeof PageHead> = {}