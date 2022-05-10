import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-block: 1.125em;

  button {
    display: block;
    color: #f8f8f8;
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }
`

export { StyledHeader }
