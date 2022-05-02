import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    gap: 3em;
  }

  a {
    font-size: 1.25rem;
    text-transform: capitalize;
  }
`;

export { StyledNav };
