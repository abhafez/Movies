import React from 'react'

class MovieCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}
  render() {
    const {
      vote_average,
      original_title,
      overview,
      poster_path,
      genres
    } = this.props.movie
    return (
      <div className="col-md-4 col-sm-2">
        <div className="card">
          <div className="card-header">
            <img
              className="card-img"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="Card image"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">{original_title}</h1>
            <div className="container">
              <div className="row">
                <div className="col-4 metadata">
                  <i className="fa fa-star" aria-hidden="true" />
                  <p>{vote_average}/10</p>
                </div>
                <div className="col-8 metadata">{'Adventure. Sci-Fi'}</div>
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
