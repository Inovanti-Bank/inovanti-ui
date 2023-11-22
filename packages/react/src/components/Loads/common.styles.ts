import { SpinnerGap } from 'phosphor-react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
 to { transform: rotate(360deg); }
`

export const SpinnerGapContainer = styled(SpinnerGap)`
  animation-name: ${rotate};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`
