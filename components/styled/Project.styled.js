import styled from 'styled-components'

const StyledWork = styled.article`
  background-color: #232323;
  width: 100%;
  /* box-shadow: 0 4px 4px hsl(0 0% 0% / 0.15); */
  box-shadow: 0px 10px 15px rgb(0 0 0 / 20%);
  transition: all 200ms linear;

  &:hover,
  &:focus {
    box-shadow: 0px 25px 30px rgb(0 0 0 / 40%);
    transform: translateY(-2px);
  }

  & > div {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.25rem;
      transition: color 200ms ease-in-out;

      &:hover,
      &:focus {
        color: var(--clr-brand);
      }
    }
  }

  h2 {
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: 500;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
  }
`

export { StyledWork }
