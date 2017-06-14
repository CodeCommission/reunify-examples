import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

const Title = ({className, text}) => <h1 className={className}>{text}</h1>
const StyledTitle = styled(Title)`
  color: purple;
`

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <StyledTitle text="Index Page" />
        <ul>
          <li><Link to={'/about'}>Client-Side Link</Link></li>
          <li><a href="/about">Server-Side Link (2s delay)</a></li>
        </ul>
      </div>
    )
  }
}