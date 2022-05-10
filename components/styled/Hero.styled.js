import styled from 'styled-components'

const StyledHero = styled.section`
  padding-block: 6em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: clamp(2rem, 4vw + 1rem, 4rem);
    text-transform: capitalize;

    @media (max-width: 1200px) {
      text-align: center;
    }
  }

  ul {
    margin-top: 2em;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1.75em;

    @media (max-width: 1200px) {
      justify-content: center;
    }

    a {
      transition: color 200ms ease-in-out;

      &:hover,
      &:focus {
        color: var(--clr-brand);
      }
    }
  }

  .hero-texts {
    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  .hero-image {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`

export { StyledHero }
