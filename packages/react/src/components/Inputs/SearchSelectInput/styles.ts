import { styled } from 'styled-components'
import { ContainerProps } from '../common.styles'

export const SearchSelectContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1rem;

  width: ${({ theme, width = 'full' }) => theme.space[width]};

  @media (max-width: 768px) {
    width: ${({ theme }) => theme.space.full};
  }
`
