import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

import Navigation from '../components/Navigation'
import {TableWithData, TableWithGraphQL} from '../components/Table'

const Title = ({className, text}) => <h1 className={className}>{text}</h1>
const StyledTitle = styled(Title)`
  color: black;
`

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <StyledTitle text="HOC Styles" />
        <TableWithData />
        <TableWithGraphQL />
      </div>
    )
  }
}