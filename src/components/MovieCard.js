import React from 'react'
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  render() {
    const {
      vote_average,
      original_title,
      overview,
      poster_path,
      id
    } = this.props.movie

    return (
      <div className="col-lg-4 col-md-3 col-sm-2 grid-item">
        <div className="card">
          <div className="card-header">
            <img
              className="card-img"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : './static/media/noposter_available.jpg'
              }
              alt={original_title}
            />
          </div>
          <div className="card-body">
            <Link to={`/movies/${id}`}>
              <h1 className="card-title">{original_title}</h1>
            </Link>

            <div className="container">
              <div className="row">
                <div className="col-4 metadata">
                  <span className="badge badge-secondary">
                    Rating: {vote_average}/10
                  </span>
                </div>
              </div>
            </div>
            <p className="card-text">{overview}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCard
