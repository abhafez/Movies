import React from 'react'
import { searchByKeyword, getMovie } from '../MoviesAPI'
import MovieCard from './MovieCard'

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      moviesFound: null,
      idsMatchQuery: [],
      searchMessage: 'Find By Keyword'
    }
    this.findMovies = this.findMovies.bind(this)
  }

  componentDidMount() {
    this.setState({
      moviesFound: null
    })
  }

  // Update Search query in the state
  updateQuery(query) {
    this.setState({ query: query })
  }

  // On search cancel
  clearQuery() {
    this.setState({ query: '' })
  }

  findMovies(e) {
    e.preventDefault()
    let movies = []
    searchByKeyword(this.state.query)
      .then(res => res.results)
      .then(items =>
        items.map(item =>
          getMovie(item.id)
            .then(movie => {
              if (movie.status_code !== 34) movies.push(movie)
            })
            .then(() => {
              this.setState({
                moviesFound: movies
              })
            })
        )
      )

    if (
      this.state.moviesFound !== null &&
      this.state.moviesFound.length === 0
    ) {
      this.setState({
        searchMessage: 'No movies match this name'
        // moviesFound: null
      })
    } else {
      this.setState({
        searchMessage: 'Find Your Movie'
      })
    }
  }

  render() {
    const { moviesFound, searchMessage } = this.state
    return (
      <div>
        <section class="section-dark">
          <div class="container">
            <div class="row d-flex">
              <div class="col-lg-7 offset-2 heading-white mb-4 mb-sm-4 mb-lg-0 text-light">
                <p>
                  Here you can find movies with a specific category : Drama,
                  Comedy, Crime etc...
                </p>
                <h1 className="display-2">{searchMessage}</h1>
                {/* todo: CSS make movie message don't exceed specific size */}
              </div>
              <div class="col-lg-7 offset-2 ftco-wrap search__form">
                <div class="input__form">
                  <form id="sm-form" action="#" class="d-flex">
                    <input
                      type="search"
                      role="searchbox"
                      class="form-control "
                      placeholder="Find your movie..."
                      onChange={event => {
                        this.updateQuery(event.target.value)
                      }}
                    />
                    <button
                      type="submit"
                      class="search-domain btn text-center greeny"
                      value="Search"
                      onClick={event => this.findMovies(event)}>
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          {moviesFound ? (
            moviesFound.map(movie => <MovieCard movie={movie} />)
          ) : (
            <div />
          )}
        </section>
      </div>
    )
  }
}

export default SearchBox
