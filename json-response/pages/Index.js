import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: purple;
`

const StyledButton = styled.button`
  padding: 15px;
`

export default class Index extends React.Component {
  state = {
    jsonData: {},
  }

  async fetchJsonData () {
    const jsonDataResponse = await fetch(`/json-data`)
    const jsonData = await jsonDataResponse.json()
    this.setState({jsonData})
  }

  render() {
    return (
      <div>
        <StyledTitle>JSON Reponses</StyledTitle>
        <a href="/json-data">Server-Side Link</a>
        <br/><br/>
        <StyledButton onClick={() => this.fetchJsonData()}>Fetching JSON data with 'fetch'</StyledButton>
        <br/>
        <pre>{JSON.stringify(this.state.jsonData, null, 4)}</pre>
      </div>
    )
  }
}