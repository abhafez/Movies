import React from 'react'
import { getMovie } from '../MoviesAPI'

class MovieDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      currentMovie: null,
      warningMessage: null,
      favList: false
    }
    this.handleFavList = this.handleFavList.bind(this)
  }

  componentWillMount() {
    getMovie(this.props.match.params.id)
      .then(movie => {
        this.setState({
          currentMovie: movie
        })
      })
      .catch(e => {
        this.setState({
          warningMessage: 'Something Went Wrong'
        })
      })

    this.setState({
      id: this.props.match.params.id
    })
  }

  handleFavList() {
    // e.preventDefault
    this.setState({
      favList: !this.state.favList
    })
  }

  componentDidMount() {}

  render() {
    const { favList, currentMovie } = this.state

    return this.state.currentMovie === null ? (
      // todo: make some fancy loading circle.
      <div className="loading" />
    ) : (
      <main id="movie-details" className="grid-container">
        <section className="home_banner_area">
          <div>
            <div className="d-flex">
              <img
                src={`https://image.tmdb.org/t/p/w200/${
                  currentMovie.poster_path
                }`}
                alt={currentMovie.original_title}
              />
            </div>
            <div className="media-body">
              <div className="">
                <h1 className="display-3">{currentMovie.title}</h1>
                <p>
                  <span>Release Date: </span>
                  {currentMovie.release_date}
                </p>
                <p>
                  <span>Rate: </span>
                  {currentMovie.vote_average}/10
                </p>
                <br />
                <p>{currentMovie.overview}</p>
                <br />
                <p>
                  <span>Run Time: </span>
                  {currentMovie.runtime}
                </p>
                <p>
                  <span>Original Language:</span>
                  {currentMovie.original_language}
                </p>
                <button
                  className="search-domain btn text-center greeny"
                  onClick={this.handleFavList}>
                  {favList ? (
                    <i className="fa fa-minus" aria-hidden="true">
                      {' '}
                      Remove From <strong>MyMovies</strong>
                    </i>
                  ) : (
                    <i className="fa fa-plus" aria-hidden="true">
                      {' '}
                      Add to <strong>MyMovies</strong>
                    </i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default MovieDetails
