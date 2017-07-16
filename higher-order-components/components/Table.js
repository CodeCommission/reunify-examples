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
    token: atob('ODNmNTZjNzcwYjRmMzFmODcyNDkzMTEzYWQxZTZmNThkNmI1NTZlNw=='),
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