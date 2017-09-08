import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: purple;
`

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <StyledTitle>BootStrap CSS Example Page</StyledTitle>
        <button className="btn btn-primary" onClick={() => alert('Hello from Reunfiy')}>Click me!</button>
      </div>
    )
  }
}