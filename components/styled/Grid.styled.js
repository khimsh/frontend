import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  /* justify-content: space-between; */
  gap: 50px;
`

export { StyledGrid }
