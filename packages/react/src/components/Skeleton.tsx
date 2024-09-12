import { cn } from "@/utils/cn"

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200 dark:bg-gray-850", className)}
      {...props}
    />
  )
}

export function SkeletonInput({ className }: { className?: string }) {
  return (
    <div className="flex flex-col gap-1 mt-5 mb-9">
      <Skeleton className="w-24 h-3" />
      <Skeleton className={cn('w-80 h-10', className)} />
    </div>
  )
}