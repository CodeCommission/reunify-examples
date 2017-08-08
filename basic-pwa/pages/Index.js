import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: purple;
`

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <StyledTitle>Index Page</StyledTitle>
        <ul>
          <li><Link to={'/about'}>Client-Side Link</Link></li>
          <li><a href="/about">Server-Side Link (2s delay)</a></li>
        </ul>
      </div>
    )
  }
}