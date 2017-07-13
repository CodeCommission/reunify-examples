import React from 'react'
import { compose } from 'ramda'
import { withData } from '../lib/withData'
import { withGraphQL } from '../lib/withGraphQL'

export const Table = props => (
  <table>
    <tbody>
        {
          props.data &&
          props.data.map((x, i) =>
            <tr key={i}>
              <td>{x}</td>
            </tr>
          )
        }
    </tbody>
  </table>
)

export const TableWithData = compose(
  withData({data: ['X', 'Y']}),
)(Table)

export const TableWithGraphQL = compose(
  withGraphQL({
    token: 'bd426e54e7a95de6f6b1738f178285e90bc4230b',
    query: `query {
              viewer {
                gists(first: 10) {
                  nodes {
                    name
                    description
                  }
                }
              }
            }`
  }),
)(Table)

export default TableWithGraphQL