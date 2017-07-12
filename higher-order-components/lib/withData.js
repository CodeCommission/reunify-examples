import React from 'react'

export const withData = options => {
  return BaseComponent => {
    return class extends React.Component {
      render () {
        const props = {...this.props, ...options}
        return <BaseComponent {...props} />
      }
    }
  }
}

export default withData