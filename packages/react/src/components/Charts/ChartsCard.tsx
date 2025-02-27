import { cn } from '@/utils/cn'
import { Box, Heading } from '@inovanti/react'
import React from 'react'

interface ChartsCardProps {
  title: string
  link?: React.ReactNode
  details?: string | React.ReactNode
  children?: React.ReactNode
  classname?: string
}

const ChartCard: React.FC<ChartsCardProps> = ({
  title,
  link,
  details,
  children,
  classname,
}) => {
  return (
    <Box
      className={cn(
        `flex h-fit w-full flex-row bg-transparent px-0 py-3 shadow-md dark:shadow-none`,
        classname,
      )}
    >
      <Heading className="flex size-min w-full text-nowrap text-lg font-bold">
        <div className="flex w-full flex-row items-center justify-between px-4">
          {title}{' '}
          <span className="font-bold">
            {details && details}
            {link && link}
          </span>
        </div>
      </Heading>
      {children}
    </Box>
  )
}

export default ChartCard
