import React from 'react'

class FoundMovies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div classNameName="container">
        <div className="row">
          {this.props.searchResults.map(movie =>
            // <MovieCard key={movie.id} movie={movie} />
            console.log(movie)
          )}
        </div>
      </div>
    )
  }
}

export default FoundMovies
