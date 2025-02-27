
import { Dropdown } from '@/components/Dropdown'
import he from 'he'
import React, { Dispatch, SetStateAction } from 'react'
import { ChangePage, getDirectionForField, handleSortItems, ListSortDefaultType, PageActualNumber, SkeletonTableBody, SortIcon, Table, TableBody, TableFooter, TableHead } from '..'

export interface Column<T> {
  key: keyof T & string
  label: string
  format?: (value: string) => React.ReactNode
  sort?: boolean
}

interface DataTableProps<T> {
  fieldColumns: Array<Column<T>>
  data?: PaginatedFullDTO<T>
  sort?: ListSortDefaultType[]
  setSort?: Dispatch<SetStateAction<ListSortDefaultType[]>>
  isLoading: boolean
  setPage: (page: number) => void
  setLimit: (limit: number) => void
  limit: number
  emptyMessage?: string
  actionsDiv?: (row: T) => React.ReactNode // Pass a custom div for actions (edit/delete icons)
}

const extractPageNumber = (url: string | null): number => {
  if (!url) return 1
  const match = RegExp(/page=(\d+)/).exec(url)
  return match ? parseInt(match[1], 10) : 1
}

export function DataTable<T>({
  fieldColumns,
  data,
  sort,
  setSort,
  isLoading,
  setPage,
  setLimit,
  limit,
  emptyMessage = 'No records found',
  actionsDiv,
}: Readonly<DataTableProps<T>>) {
  if (isLoading) {
    return (
      <Table>
        <TableHead>
          <tr>
            {fieldColumns.map((column) => (
              <th
                key={column.key}
                className="whitespace-nowrap px-4 py-2 text-center"
              >
                {column.label}
              </th>
            ))}
            {actionsDiv ? (
              <th key={'2'} className="whitespace-nowrap px-4 py-2 text-center">
                {'Ações'}
              </th>
            ) : (
              ''
            )}
          </tr>
        </TableHead>
        <SkeletonTableBody
          columnsQuantity={fieldColumns.length + (actionsDiv ? 1 : 0)} // Account for actions column
          rowsQuantity={limit}
        />
        <TableFooter>
          <tr>
            <td colSpan={fieldColumns.length + 1}>
              <div className="flex items-center justify-between p-2">
                <div className="flex gap-2">
                  <div className="h-6 w-24 animate-pulse rounded bg-gray-300" />
                  <div className="h-6 w-24 animate-pulse rounded bg-gray-300" />
                  <div className="h-6 w-24 animate-pulse rounded bg-gray-300" />
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-6 w-24 animate-pulse rounded bg-gray-300" />
                  <div className="h-6 w-32 animate-pulse rounded bg-gray-300" />
                </div>
              </div>
            </td>
          </tr>
        </TableFooter>
      </Table>
    )
  }

  if (data) {
    return (
      <Table>
        <TableHead>
          <tr>
            {fieldColumns.map((column) => (
              <th key={column.key}>
                {column.sort === true && sort && setSort ? (
                  <button
                    className="flex w-full items-center gap-5"
                    onClick={() => handleSortItems(column.key, sort, setSort)}
                  >
                    {column.label}
                    <SortIcon
                      direction={getDirectionForField(column.key, sort)}
                    />
                  </button>
                ) : (
                  column.label
                )}
              </th>
            ))}
            {actionsDiv ? <th>Ações</th> : ''}
          </tr>
        </TableHead>

        <TableBody>
          {data.data.length === 0 ? (
            <tr>
              <td colSpan={fieldColumns.length + 1} className="p-4 text-center">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {fieldColumns.map((column) => {
                  const value = row[column.key] as string
                  return (
                    <td data-label={column.label} key={String(column.key)}>
                      {column.format ? column.format(value) : String(value)}
                    </td>
                  )
                })}
                {actionsDiv ? (
                  <td>
                    <div className="flex flex-row">{actionsDiv(row)}</div>
                  </td>
                ) : (
                  ''
                )}
              </tr>
            ))
          )}
        </TableBody>

        <TableFooter>
          <tr>
            <td colSpan={fieldColumns.length + 1}>
              <div className="flex items-center justify-between p-2">
                <div>
                  {data.links?.map((link) => (
                    <ChangePage
                      key={link.label}
                      onClick={() => setPage(extractPageNumber(link.url))}
                      $isDisabled={!link.url}
                      $isActive={link.active}
                    >
                      {he.decode(link.label)}
                    </ChangePage>
                  ))}
                </div>

                <div style={{ textAlign: 'end' }}>
                  <span style={{ marginRight: '10px' }}>
                    Registro por página:
                  </span>
                  <Dropdown
                    items={[5, 10, 20, 30, 50, 70, 100].map((limitOption) => (
                      <button
                        key={limitOption}
                        onClick={() => setLimit(limitOption)}
                        style={{ width: '100%' }}
                      >
                        {limitOption}
                      </button>
                    ))}
                  >
                    <PageActualNumber>{data.per_page}</PageActualNumber>
                  </Dropdown>
                </div>
              </div>
            </td>
          </tr>
        </TableFooter>
      </Table>
    )
  }
}





export type OrionDTO<T> = {
  data: T[]
}

export type OrionObjDTO<T> = {
  data: T
}

export type OrionPaginateDTO<T> = OrionDTO<T> & {
  current_page: number
  from: number | null
  last_page: number
  links: {
    url: string | null
    label: string
    active: boolean
  }[]
  path: string
  per_page: number
  to: number
  total: number
  meta: {
    current_page: number
    from: number | null
    last_page: number
    links: {
      url: string | null
      label: string
      active: boolean
    }[]
    path: string
    per_page: number
    to: number
    total: number
  }
}

export type PaginatedDTO<T> = {
  data: T[]
}
export type PaginatedFullDTO<T> = PaginatedDTO<T> & {
  current_page: number
  first_page_url: string | null
  from: number | null
  last_page: number
  last_page_url: string | null
  links: {
    url: string | null
    label: string
    active: boolean
  }[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}
