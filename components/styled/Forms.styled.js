import styled from 'styled-components'

const StyledLoginForm = styled.div`
  max-width: 520px;
  width: 100%;
  margin-inline: auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-size: 1rem;
    text-transform: capitalize;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
  }
`

export { StyledLoginForm }
