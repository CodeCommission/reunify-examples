import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

import Navigation from '../components/Navigation'
import {TableWithData, TableWithGraphQL} from '../components/Table'

const StyledTitle = styled.h1`
  color: black;
`

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <StyledTitle>HOC Styles</StyledTitle>
        <TableWithData />
        <TableWithGraphQL />
      </div>
    )
  }
}

Index.getInitialProps = async (req, res) => {
  return Promise.resolve({
    foo: 'bar'
  })
}