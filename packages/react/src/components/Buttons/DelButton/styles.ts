import styled from 'styled-components'

export const ButtonContainer = styled.button`
  cursor: pointer;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.full};
  margin-bottom: ${({ theme }) => theme.space[3]};

  width: auto;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red300}ee;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red300};
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.red300}cc;
  }
`
