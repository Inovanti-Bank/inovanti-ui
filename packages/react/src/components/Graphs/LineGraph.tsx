interface LineGraphProps {
  value: number
  min: number
  max: number
  spaces?: {
    color: string
    width: number
  }[]
}

export function LineGraph({
  value,
  min,
  max,
  spaces,
}: Readonly<LineGraphProps>) {
  let columns = spaces
  if (!spaces) {
    columns = [
      { color: 'pastelRed', width: 50 },
      { color: 'primary400', width: 20 },
      { color: 'pastelGreen', width: 30 },
    ]
  }
  columns = columns as {
    color: string
    width: number
  }[]
  const diff = max - min
  const avg = diff / 2 + min

  const valuePercent = ((value - min) / diff) * 100

  const getColorClass = (color: string) => {
    if (color === 'pastelRed') return 'h-3 bg-red-300'
    if (color === 'primary400') return 'h-3 bg-yellow-300'
    return 'h-3 bg-green-300' // default
  }

  return (
    <>
      <div className="mb-3 mt-1 text-3xl font-bold">
        {Number(value).toFixed(2)}
      </div>
      <div className="relative my-1 flex w-[1/2] flex-row flex-nowrap justify-between">
        <div className="flex size-full [&>span:first-child]:rounded-l-md [&>span:last-child]:rounded-r-md">
          {columns.map((column) => {
            return (
              <span
                key={column.color + column.width}
                className={getColorClass(column.color)}
                style={{ width: `${column.width}%` }}
              />
            )
          })}
        </div>
        <div
          className="absolute -top-3 z-50 h-10 w-4 bg-black dark:bg-gray-100"
          style={{ left: `${valuePercent}%` }}
        />
      </div>
      <div className="flex w-full flex-row flex-nowrap justify-between">
        <span>{min}</span>
        <span>{avg}</span>
        <span>{max}</span>
      </div>
    </>
  )
}
