import React from 'react'
import MovieCard from './MovieCard'

class FoundMovies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return this.props.searchResults.map(movie => (
      <div classNameName="container">
        <div className="row">
          <MovieCard movie={movie} />
        </div>
      </div>
    ))
  }
}

export default FoundMovies
