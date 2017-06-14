import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style-type: square;
`

const StyledLink = styled.a`
  font: 18px Consolas, monaco, monospace;
  color: green;
`

export default class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/codecommission/repos')
    const data = await res.json()

    return {
      github: data.filter(x => x.name.indexOf('reunify') !== -1),
    }
  }

  render() {
    return (
      <StyledList>
        {
          this.props.github &&
          this.props.github.map((x, i) =>
            <li key={i}><StyledLink href={x.html_url} taget="_blank">{x.name}</StyledLink></li>
          )
        }
      </StyledList>
    )
  }
}