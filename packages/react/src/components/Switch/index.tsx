import { SwitchRoot, SwitchThumb } from './styles'

export interface SwitchProps {
  checked: boolean
  onCheckedChange: () => void
  small?: boolean
}

export function Switch({ checked, onCheckedChange, small = false }: SwitchProps) {
  return (
    <SwitchRoot checked={checked} onCheckedChange={onCheckedChange} small={small}>
      <SwitchThumb  small={small} />
    </SwitchRoot>
  )
}
