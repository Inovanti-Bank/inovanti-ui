import { HTMLProps, forwardRef } from 'react'

type DivProps = HTMLProps<HTMLDivElement>

export const PageHead = forwardRef<HTMLDivElement, DivProps>(
  ({ children }: DivProps, ref) => (
    <div
      className="w-full flex flex-col md:flex-row justify-between items-center md:items-end mb-5 gap-2"
      ref={ref}
    >
      {children}
    </div>
  ),
)
PageHead.displayName = 'PageHead'

export const PageHeadLeft = forwardRef<HTMLDivElement, DivProps>(
  ({ children }: DivProps, ref) => (
    <div
      className="w-full md:w-auto flex flex-col md:flex-row justify-start items-center md:items-end gap-1"
      ref={ref}
    >
      {children}{' '}
    </div>
  ),
)
PageHeadLeft.displayName = 'PageHeadLeft'

export const PageHeadRight = forwardRef<HTMLDivElement, DivProps>(
  ({ children }: DivProps, ref) => (
    <div
      className="w-full md:w-auto flex flex-1 flex-col md:flex-row justify-end items-center md:items-end gap-5"
      ref={ref}
    >
      {children}{' '}
    </div>
  ),
)
PageHeadRight.displayName = 'PageHeadRight'

export type Info = {
  title: string
  description: string
}
