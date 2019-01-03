import React from 'react'
import { getMovie } from '../MoviesAPI'

class MovieDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      currentMovie: null,
      warningMessage: null
    }
  }

  componentWillMount() {
    getMovie(this.props.match.params.id)
      .then(movie => {
        this.setState({
          currentMovie: movie
        })
      })
      .catch(e => {
        console.log(e)
        this.setState({
          warningMessage: 'Something Went Wrong'
        })
      })

    this.setState({
      id: this.props.match.params.id
    })
  }

  componentDidMount() {}

  render() {
    return this.state.currentMovie === null ? (
      // todo: make some fancy loading circle.
      <div className="loading" />
    ) : (
      <main id="movie-details">
        <section className="home_banner_area">
          <div className="container box_1620">
            <div className="banner_inner d-flex align-items-center">
              <div className="banner_content">
                <div className="media">
                  <div className="d-flex">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${
                        this.state.currentMovie.poster_path
                      }`}
                      alt={this.state.currentMovie.original_title}
                    />
                  </div>
                  <div className="media-body">
                    <div className="">
                      <h1 className="display-3">
                        {this.state.currentMovie.original_title}
                      </h1>
                      <p>
                        <span>Release Date: </span>
                        {this.state.currentMovie.release_date}
                      </p>
                      <p>
                        <span>Rate: </span>
                        {this.state.currentMovie.vote_average}/10
                      </p>
                      <br />
                      <p>{this.state.currentMovie.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default MovieDetails
