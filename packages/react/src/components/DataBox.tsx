import { cn } from '@/utils/cn'
import { ReactNode } from 'react'
import { Text } from './Text'
import { Skeleton } from './Skeleton'

type DataBoxType = {
  label: string | ReactNode
  value: string | number | ReactNode
  className?: string
}

export const DataBox = ({ label, value, className }: DataBoxType) => {
  return (
    <div className={cn('flex flex-col w-44', className)}>
      <Text>{label}</Text>
      <Text $fontWeight={'font-semibold'}>{value}</Text>
    </div>
  )
}

export function DataBoxSkeleton({
  quantity,
  className,
}: {
  quantity: number
  className?: string
}) {
  return (
    <>
      {[...Array(quantity).keys()].map((_, i) => (
        <div key={i} className={cn('flex flex-col gap-0.5 py-1')}>
          <Skeleton className="dark:bg-gray-700 w-20 h-3" />
          <Skeleton
            className={cn('dark:bg-gray-700 w-40 h-6 mr-4', className)}
          />
        </div>
      ))}
    </>
  )
}
