import { styled } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  padding-top: 33vh;

  min-height: 100vh;
  height: 100%;

  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.xl};

  opacity: 1;
  background-color: ${({ theme }) => theme.colors.gray900}31;
  color: ${({ theme }) => theme.colors.textHigh};

  @media (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
  }
`

export const LoadContainer = styled.div``
