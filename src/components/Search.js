import React from 'react'
import { searchMovie, searchByKeyword, getMovie } from '../MoviesAPI'
import MovieCard from './MovieCard'
import ZeroState from './ZeroState'

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      moviesFound: null,
      searchMessage: 'Find Your Movie'
    }
    this.findMoviesByName = this.findMoviesByName.bind(this)
    this.findMoviesByKeyword = this.findMoviesByKeyword.bind(this)
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

  findMoviesByName(e) {
    e.preventDefault()
    searchMovie(this.state.query).then(res => {
      this.setState({
        moviesFound: res.results
      })
    })
  }

  findMoviesByKeyword(e) {
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
  }

  render() {
    const { moviesFound } = this.state
    return (
      <div>
        <section class="section-dark">
          <div class="container">
            <div class="row d-flex">
              <div class="col-lg-6 heading-white mb-4 mb-sm-4 mb-lg-0 text-light">
                <h1 className="display-2">{this.state.searchMessage}</h1>
              </div>
              <div class="col-lg-6 ftco-wrap search__form">
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
                      onClick={event => {
                        document.getElementById('by-name').checked
                          ? this.findMoviesByName(event)
                          : this.findMoviesByKeyword(event)
                      }}>
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-8">
                <form action="select-search-method">
                  <input
                    type="radio"
                    id="by-name"
                    name="search"
                    value="by-name"
                    checked="checked"
                  />
                  <label for="by-name" className="label greeny-text">
                    By Movie
                  </label>
                  <input
                    type="radio"
                    id="by-keyword"
                    name="search"
                    value="by-keyword"
                  />
                  <label for="by-keyword" className="label greeny-text">
                    By Keyword
                  </label>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section class="grid-container">
          {moviesFound ? (
            this.state.moviesFound.map(movie => <MovieCard movie={movie} />)
          ) : this.state.moviesFound !== null &&
            this.state.moviesFound.length === 0 ? (
              <ZeroState />
            ) : (
              <div />
            )}
        </section>
      </div>
    )
  }
}

export default SearchBox
