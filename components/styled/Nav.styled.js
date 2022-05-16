import styled from 'styled-components'

const StyledNav = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    background-color: #17181a;
    z-index: 100;
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 3em;

    @media (max-width: 768px) {
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
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

  button {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
  }
`

export { StyledNav }
