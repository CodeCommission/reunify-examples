import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
  list-style-type: square;
`

const StyledLink = styled.a`
  font: 18px Consolas, monaco, monospace;
  color: green;
`

export const RepoList = props => (
  <div>
    <h1>Reunify GitHub Repositories</h1>
    <StyledList>
      {
        props.repos &&
        props.repos.map((x, i) => <li key={i}><StyledLink href={x.html_url} taget="_blank">{x.name}</StyledLink></li>)
      }
    </StyledList>
  </div>
)

RepoList.getInitialProps = async props => {
  const res = await fetch('https://api.github.com/users/codecommission/repos')
  const data = await res.json()
  const repos = data.filter(x => x.name.indexOf('reunify') !== -1)
  return {repos}
}

export default RepoList