import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style-type: square;
`

const StyledLink = styled.a`
  font: 18px Consolas, monaco, monospace;
  color: green;
`

export default class RepoList extends React.PureComponent {
  static async getInitialProps (req, res) {
    const response = await fetch('https://api.github.com/users/codecommission/repos')
    const data = await response.json()
    const repos = data && data.filter(x => x.name.indexOf('reunify') !== -1)
    return {repos}
  }

  render () {
    return (
      <div>
        <h1>Reunify GitHub Repositories</h1>
        <StyledList>
          {
            this.props.repos &&
            this.props.repos.map((x, i) => <li key={i}><StyledLink href={x.html_url} taget="_blank">{x.name}</StyledLink></li>)
          }
        </StyledList>
      </div>
    )
  }
}
