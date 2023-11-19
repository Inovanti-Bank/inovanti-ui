import styled from 'styled-components'

export const ButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  width: auto;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green300}ee;
  border: 1px solid transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green300};
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.green300}cc;
  }
`