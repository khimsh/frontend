import styled from 'styled-components'

const StyledHero = styled.section`
  padding-block: 6em;

  h1 {
    font-size: 3rem;
    text-transform: capitalize;
  }

  ul {
    margin-top: 2em;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1.75em;
  }
`

export { StyledHero }
