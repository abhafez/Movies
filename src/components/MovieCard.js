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
      <div id="MovieCard" className="col-lg-4 col-sm-2">
        <div className="card">
          <div className="card-header">
            <img
              className="card-img"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={original_title}
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">{original_title}</h1>
            <div className="container">
              <div className="row">
                <div className="col-4 metadata">
                  <p>{vote_average}/10</p>
                </div>
                {/* <div className="col-8 metadata"> */}
                {genres.map(genre => {
                  return (
                    <div className="metadata" key={genre.id} data={genre.name}>
                      <i>
                        {genre.name}
                        {genre === genres[genres.length - 1] ? '' : ' - '}
                        {/* To Separate genres by dashes and prevent dash for last item */}
                        {/* todo: enhance UI font sizes */}
                      </i>
                    </div>
                  )
                })}
                {/* </div> */}
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
