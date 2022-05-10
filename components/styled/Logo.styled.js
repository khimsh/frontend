import styled from 'styled-components'

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  transition: color 200ms ease-in-out;

  &:hover,
  &:active {
    color: var(--clr-brand);

    span {
      color: rgb(246, 246, 246);
    }
  }

  span {
    color: var(--clr-brand);
    transition: color 200ms ease-in-out;
  }
`

export { StyledLogo }
