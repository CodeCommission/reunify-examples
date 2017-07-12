import React from 'react'

export const withGraphQL = ({query = 'query {}', token}) => {
  return BaseComponent => {
    return class extends React.Component {
      state = {
        results: []
      }

      componentDidMount () {
        fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {'Authorization': `Bearer ${token}`},
          body: JSON.stringify({query}),
        })
        .then(res => res.json())
        .then(data => this.setState({results: data.data.viewer.gists.nodes.map(x => x.description)}))
      }

      render () {
        const props = {...this.props, data: this.state.results}
        return <BaseComponent {...props} />
      }
    }
  }
}

export default withGraphQL