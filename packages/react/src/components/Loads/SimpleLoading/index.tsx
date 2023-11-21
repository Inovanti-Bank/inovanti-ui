import { SpinnerGapContainer } from '../common.styles'

export interface LoadingProps {
  size?: number
}

export function Loading({ size = 24 }: LoadingProps) {
  return <SpinnerGapContainer size={size} />
}