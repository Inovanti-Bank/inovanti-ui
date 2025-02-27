import { SpaceType } from '@inovanti/tokens'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import CreatableSelect from 'react-select/creatable'
import { FormAlert, FormAlertBlank } from '../FormAlert'
import { Text } from '../Text'
import { DataObj } from './common'
export interface CreatableSelectInputProps
  extends ComponentProps<typeof CreatableSelect> {
  label: string
  error?: string
  data?: DataObj[]
  height?: SpaceType
  width?: SpaceType

  flexColumn?: boolean
  gridAreaName?: string
}

export const CreatableSelectInput = forwardRef<
  ElementRef<typeof CreatableSelect>,
  CreatableSelectInputProps
>(({ label, error, data = [], ...props }: CreatableSelectInputProps, ref) => {
  return (
    <div className="w-full">
      <Text className="text-sm">{label}</Text>
      <CreatableSelect
        isMulti
        ref={ref}
        unstyled
        {...props}
        classNames={{
          control: () =>
            'bg-white dark:bg-gray-850 cursor-pointer w-full border-[0.7px] border-[#c8be04] rounded overflow-x-auto max-h-full p-3 dark:text-white',
          indicatorsContainer: () =>
            'align-top flex items-top justify-item-start h-fit dark:text-white cursor-pointer ',
          valueContainer: () =>
            'flex-row flex-wrap flex items-start dark:text-white',
          placeholder: () => 'text-center dark:text-gray-400',
          menu: () =>
            'border-[0.7px] border-[#c8be04] p-2 rounded-lg bg-white mt-2 min-w-[256px] max-w-fit  relative dark:bg-gray-850 dark:text-white ',
          multiValue: () =>
            'cursor-pointer dark:text-white bg-gray-100 dark:bg-gray-700 py-[0.3rem] px-[0.3rem] flex items-center mr-1 mb-1 rounded ',
          option: () =>
            'cursor-pointer border border-solid border-primary rounded-sm p-2  bg-gray-100 dark:bg-gray-850 dark:text-white hover:bg-white mt-1',
        }}
        className="h-full cursor-pointer dark:text-black"
        formatCreateLabel={(inputValue) => `Criar "${inputValue}"`}
        closeMenuOnSelect={false}
        options={data}
      />
      {error ? <FormAlert>{error}</FormAlert> : <FormAlertBlank />}
    </div>
  )
})

CreatableSelectInput.displayName = 'CreatableSelectInput'
