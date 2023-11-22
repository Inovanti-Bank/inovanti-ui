import { SwitchRoot, SwitchThumb } from './styles'

export interface SwitchProps {
  checked: boolean
  onCheckedChange: () => void
}

export function Switch({ checked, onCheckedChange }: SwitchProps) {
  return (
    <SwitchRoot checked={checked} onCheckedChange={onCheckedChange}>
      <SwitchThumb />
    </SwitchRoot>
  )
}
