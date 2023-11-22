import { SpinnerGapContainer } from '../common.styles'
import { Container, LoadContainer } from './styles'

export interface FullScreenLoadingProps {
  message: string
}

export function FullScreenLoading({ message }: FullScreenLoadingProps) {
  return (
    <Container>
      <LoadContainer>
        {message}
        <SpinnerGapContainer size={32} />
      </LoadContainer>
    </Container>
  )
}
