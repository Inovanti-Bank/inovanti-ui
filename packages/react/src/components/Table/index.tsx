import { cn } from '@/utils/cn'
import { Skeleton } from '@inovanti/react'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { HTMLProps, ReactNode, forwardRef } from 'react'
import './styles.css'

type TableProps = HTMLProps<HTMLTableElement>

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children }: TableProps, ref) => (
    <table
      className="w-full border-collapse text-gray-950 dark:text-gray-50"
      ref={ref}
    >
      {children}
    </table>
  ),
)
Table.displayName = 'Table'

type TableHeadProps = HTMLProps<HTMLTableSectionElement>

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children }: TableHeadProps, ref) => (
    <thead className="t-head" ref={ref}>
      {children}
    </thead>
  ),
)
TableHead.displayName = 'TableHead'

type TableBodyProps = HTMLProps<HTMLTableSectionElement>

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children }: TableBodyProps, ref) => (
    <tbody className="t-styles" ref={ref}>
      {children}
    </tbody>
  ),
)
TableBody.displayName = 'TableBody'

type TableFooterProps = HTMLProps<HTMLTableSectionElement>

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ children }: TableFooterProps, ref) => (
  <tfoot className="t-styles t-foot" ref={ref}>
    {children}
  </tfoot>
))
TableFooter.displayName = 'TableFooter'

type ContainerSkeletonProps = HTMLProps<HTMLDivElement>

export const ContainerSkeleton = forwardRef<
  HTMLDivElement,
  ContainerSkeletonProps
>(({ children }: ContainerSkeletonProps, ref) => (
  <div className="w-full gap-3" ref={ref}>
    {children}
  </div>
))
ContainerSkeleton.displayName = 'ContainerSkeleton'

type SkeletonTableProps = {
  rows?: number
  className?: string
}

export const SkeletonTable = ({ rows = 5, className }: SkeletonTableProps) => {
  return (
    <tr>
      {[...Array(rows).keys()].map((i) => (
        <td key={i} colSpan={1}>
          <Skeleton className={cn('w-full h-8', className)} />
        </td>
      ))}
    </tr>
  )
}

SkeletonTable.displayName = 'SkeletonTable'

type NavigatorProps = {
  children?: ReactNode
}

export const Navigator = forwardRef<HTMLButtonElement, NavigatorProps>(
  ({ children, ...rest }, ref) => (
    <button
      className="cursor-pointer text-secondary text-lg duration-200 text-decoration-none"
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  ),
)

Navigator.displayName = 'Navigator'

type ChangePageProps = {
  children?: ReactNode
  $isDisabled?: boolean
  $isActive?: boolean
}

export const ChangePage = forwardRef<HTMLButtonElement, ChangePageProps>(
  ({ children, $isDisabled, $isActive, ...rest }, ref) => (
    <button
      className={cn(
        'rounded-md py-0.5 px-2 mx-1 text-center',
        $isDisabled
          ? 'cursor-not-allowed bg-gray-100 dark:bg-gray-700 text-gray-950 dark:text-gray-200'
          : 'cursor-pointer bg-primary/80 text-gray-950',
        $isActive && 'cursor-text bg-primary text-black',
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  ),
)

ChangePage.displayName = 'ChangePage'

export function SortIcon({ direction }: { direction: 'asc' | 'desc' | null }) {
  let styles: {
    up: { size: number; weight: 'bold' | 'regular'; class: string }
    down: { size: number; weight: 'bold' | 'regular'; class: string }
  }
  if (direction === 'asc') {
    styles = {
      up: {
        size: 13,
        weight: 'bold',
        class: 'text-black dark:text-tertiary',
      },
      down: {
        size: 12,
        weight: 'regular',
        class: 'text-gray-700',
      },
    }
  } else if (direction === 'desc') {
    styles = {
      down: {
        size: 13,
        weight: 'bold',
        class: 'text-black dark:text-tertiary',
      },
      up: {
        size: 12,
        weight: 'regular',
        class: 'text-gray-700',
      },
    }
  } else {
    styles = {
      up: {
        size: 12,
        weight: 'regular',
        class: 'text-gray-700',
      },
      down: {
        size: 12,
        weight: 'regular',
        class: 'text-gray-700',
      },
    }
  }
  return (
    <div className="flex flex-col">
      <CaretUp
        size={styles.up.size}
        weight={styles.up.weight}
        className={styles.up.class}
      />
      <CaretDown
        size={styles.down.size}
        weight={styles.down.weight}
        className={styles.down.class}
      />
    </div>
  )
}

export const extractPageNumber = (url: string | null) => {
  if (!url) return 1
  const pageNumberMatch = url.match(/page=(\d+)/)
  return pageNumberMatch ? Number(pageNumberMatch[1]) : 1
}

type PageActualNumberProps = HTMLProps<HTMLDivElement>

export const PageActualNumber = forwardRef<
  HTMLDivElement,
  PageActualNumberProps
>(({ children }: PageActualNumberProps, ref) => (
  <div
    className="rounded-full bg-tertiary text-black w-8 h-8 flex flex-row items-center justify-center"
    ref={ref}
  >
    {children}
  </div>
))
PageActualNumber.displayName = 'PageActualNumber'
