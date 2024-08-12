import { cn } from '@/utils/cn'
import './styles.css'

interface SpeedometerProps {
  value: number
  min: number
  max: number
  label?: string
}

const getDegBasedInValue = (value: number, min: number, max: number) => {
  const diff = max - min
  const valueInPercent = ((value - min) / diff) * 180
  if (valueInPercent > max) {
    return 180
  }
  if (valueInPercent < min) {
    return 0
  }

  return valueInPercent
}

export function Speedometer({ value, min, max, label }: SpeedometerProps) {
  const valuePercent = getDegBasedInValue(value, min, max)

  const classBase =
    'absolute bottom-0 w-[60px] h-0 border-b-[80px] border-x-[12px] border-x-transparent'

  return (
    <div
      className={cn(
        'gauge w-[200px] h-[100px] rounded-[100px_100px_0_0] relative overflow-hidden bg-gray-50',
        'shadow-[0_0_0_6px_rgba(255,255,255,0.09)]',
      )}
    >
      <div className="box-content">
        <div className={cn(classBase, 'border-b-red-400 -left-[2px]')}></div>
        <div
          className={cn(
            classBase,
            'border-b-orange-400 rotate-[135deg] top-[12px] z-20 -left-[50px] origin-right',
          )}
        ></div>
        <div
          className={cn(
            classBase,
            'border-b-[250px] border-x-[55px] w-[18px] border-b-yellow-400 rotate-[179deg] top-0 -left-[65px] origin-right',
          )}
        ></div>
        <div
          className={cn(
            classBase,
            'border-b-lime-400 rotate-[220deg] -top-[18px] left-[71px] origin-right',
          )}
        ></div>
        <div
          className={cn(
            classBase,
            'border-b-green-500 rotate-[240deg] right-[42px] origin-right',
          )}
        ></div>
      </div>
      <div
        style={{ transform: `rotate(${valuePercent}deg)` }}
        className={cn(
          'z-20 w-[78px] h-[7px] rounded-bl-[100%] bottom-br-[5px] bottom-tl-[100%] bottom-tr-[5px]',
          'absolute bottom-1 left-5 bg-gray-950 shadow-[0_2px_2px_1px_rgba(0,0,0,0.38)]',
          'origin-[100%_4px]',
        )}
      ></div>
      <div
        data-number={value}
        data-label={label}
        className={cn(
          "gauge-center z-30 content-[''] w-[60%] h-[60%] rounded-[100px_100px_0_0] absolute bottom-0 right-[21%] leading-[0.8]",
          'before:text-xl before:w-full before:p-[10px_0_0_0] before:text-center before:float-left',
          'after:w-full after:float-left after:opacity-60 after:text-center after:-p-3',
          'text-white bg-gray-950',
          'shadow-[0_-13px_15px_-10px_rgba(0,0,0,0.28)]',
        )}
      ></div>
    </div>
  )
}
