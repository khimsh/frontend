import styled from 'styled-components'

const StyledWork = styled.article`
  /* background-color: #232323; */
  width: 100%;
  /* box-shadow: 0 4px 4px hsl(0 0% 0% / 0.15); */
  box-shadow: 0px 10px 15px rgb(0 0 0 / 20%);
  transition: all 200ms linear;

  &:hover,
  &:focus {
    box-shadow: 0px 25px 30px rgb(0 0 0 / 40%);
    transform: translateY(-2px);
  }

  figure {
    position: relative;
    padding: 0;
  }

  img {
    object-fit: contain;
  }
`

export { StyledWork }
