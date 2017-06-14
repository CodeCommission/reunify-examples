import React from 'react'
import styled from 'styled-components'

export default class extends React.Component {
  static async getInitialProps () {
    const res = await fetch('http://www.omdbapi.com/?apikey=289ba303&s=Star%20Trek&type=movie')
    const data = await res.json()

    return {
      title: 'OMDB Star Trek Movies - Reunify',
      name: 'OMDB Star Trek Movies - Reunify',
      movies: data.Search,
    }
  }

  render () {
    return (
      <div>
        <Header>OMDB API - STAR TREK MOVIES</Header>
        <MoviesTable>
          <thead>
            <tr>
              <MoviesTableHeaderColumn>Year</MoviesTableHeaderColumn>
              <MoviesTableHeaderColumn>Title</MoviesTableHeaderColumn>
            </tr>
          </thead>
          <tbody>
            {
              this.props.movies.map((movie, i) => (
                <tr key={i}>
                  <MoviesTableColumn>{movie.Year}</MoviesTableColumn>
                  <MoviesTableColumn><a href={`/movie?id=${movie.imdbID}`}>{ movie.Title }</a></MoviesTableColumn>
                </tr>
              ))
            }
          </tbody>
        </MoviesTable>
      </div>
    )
  }
}

const Header = styled.h1`
  font: 15px Consolas, monaco, monospace;
  text-align: center;
`

const MoviesTable = styled.table`
  font: 15px Consolas, monaco, monospace;
  margin: 25px auto;
  border-collapse: collapse;
  border: 1px solid #eee;
  border-bottom: 2px solid #4caf50;
`

const MoviesTableHeaderColumn = styled.th`
  background: #4caf50;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  padding: 12px 35px;
`

const MoviesTableColumn = styled.td`
  color: #999;
  border: 1px solid #eee;
  padding: 12px 35px;
  border-collapse: collapse;
`