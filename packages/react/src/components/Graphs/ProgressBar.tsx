import { cn } from '@/utils/cn'

export function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="w-full md:w-1/2 h-3 rounded-md bg-gray-100 dark:bg-gray-800 mb-3">
      <div
        className={cn(
          'bg-primary h-full',
          'rounded-tl-md rounded-bl-md',
          percentage > 98
            ? 'rounded-tr-md rounded-br-md'
            : 'rounded-tr-none-md rounded-br-none-md',
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
