import React from 'react'
import styled from 'styled-components'

export default class Movie extends React.Component {
  static async getInitialProps ({query, params}) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=289ba303&&i=${query.id || 'tt0084726'}`)
    const item = await res.json()

    return {
      item,
    }
  }

  render () {
    return (
      <Main>
        <Header>OMDB API - STAR TREK MOVIES</Header>
        <Poster src={ this.props.item.Poster} alt={this.props.item.Title} width={100} height={100} />
        <DetailPanel>
          <br/>
          { this.props.item.Title }
          <br/>
          <br/>
          Year: { this.props.item.Year }
          <br/>
          <br/>
          Plot:
          <span> { this.props.item.Plot } </span>
        </DetailPanel>
      </Main>
    )
  }
}

const Main = styled.div`
  padding: 50px;
`

const Header = styled.h1`
  font: 15px Consolas, monaco, monospace;
  text-align: center;
`

const Poster = styled.img`
  border: 1px solid #999;
  width: 100px;
  height: 100px;
`

const DetailPanel = styled.div`
  margin-right: 140px;
  width: 300px;
  font: 15px Consolas, monaco, monospace;
`