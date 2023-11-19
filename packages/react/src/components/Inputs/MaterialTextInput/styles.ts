import styled from 'styled-components'
import { ContainerProps } from '../../common.styles'

export const InputContainer = styled.div<ContainerProps>`
  position: relative;
  margin-bottom: 30px;
  width: ${({ theme, width }) => theme.space[width || 'full']};
`