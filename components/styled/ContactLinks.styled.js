import styled from 'styled-components'

const StyledContactLinks = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style-type: none;

  a {
    font-size: 1.5rem;
    background: linear-gradient(to bottom, var(--clr-brand) 0%, var(--clr-brand) 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 4px;
    transition: all 250ms ease-in-out;

    &:hover,
    &:focus {
      background-size: 4px 50px;
      color: #000;
    }
  }
`

export { StyledContactLinks }
