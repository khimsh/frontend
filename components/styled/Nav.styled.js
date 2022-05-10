import styled from 'styled-components'

const StyledNav = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 3em;
  }

  li {
    &.active {
      a {
        color: var(--clr-brand);
      }
    }
  }

  a {
    font-size: 1.25rem;
    text-transform: capitalize;
    transition: color 200ms ease-in-out;

    &:hover,
    &:active {
      color: var(--clr-brand);
    }
  }
`

export { StyledNav }
