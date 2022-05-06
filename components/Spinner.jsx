import React from 'react'
import { StyledSpinner } from './styled/Spinner.styled'

function Spinner() {
  return (
    <StyledSpinner>
      <div class='lds-default'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledSpinner>
  )
}

export default Spinner
