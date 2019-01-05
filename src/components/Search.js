import React from 'react'
import { searchMovie, searchByKeyword, getMovie } from '../MoviesAPI'
import MovieCard from './MovieCard'
import ZeroState from './ZeroState'

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      moviesFound: [],
      searchMessage: 'Find Your Movie',
      selectedOption: 'byName',
      userStartedSearch: false
    }
    this.findMoviesByName = this.findMoviesByName.bind(this)
    this.findMoviesByKeyword = this.findMoviesByKeyword.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      moviesFound: [],
      query: ''
    })
  }

  // Update Search query in the state
  updateQuery(query) {
    this.setState({ query: query })
  }

  findMoviesByName(e) {
    e.preventDefault()
    if (this.state.query.length === 0) return
    searchMovie(this.state.query).then(res => {
      this.setState({
        moviesFound: res.results,
        userStartedSearch: true
      })
    })
  }

  findMoviesByKeyword(e) {
    e.preventDefault()
    let movies = []
    if (this.state.query.length === 0) return
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
                moviesFound: movies,
                userStartedSearch: true
              })
            })
        )
      )
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    })
  }

  render() {
    const { moviesFound, selectedOption, userStartedSearch } = this.state
    return (
      <div>
        <section className="section-dark">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-6 heading-white mb-4 mb-sm-4 mb-lg-0 text-light">
                <h1 className="display-2">{this.state.searchMessage}</h1>
              </div>
              <div className="col-lg-6 ftco-wrap search__form">
                <div className="input__form">
                  <form id="sm-form" action="#" className="d-flex">
                    <input
                      type="search"
                      role="searchbox"
                      className="form-control "
                      placeholder="Find your movie..."
                      onChange={event => {
                        this.updateQuery(event.target.value)
                      }}
                    />
                    <button
                      type="submit"
                      className="search-domain btn text-center greeny"
                      value="Search"
                      onClick={event => {
                        selectedOption === 'byName'
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
              <div className="col-lg-6 col-md-12 offset-6">
                <form action="select-search-method">
                  <input
                    type="radio"
                    id="by-name"
                    name="search"
                    value="byName"
                    checked={this.state.selectedOption === 'byName'}
                    onChange={this.handleOptionChange}
                  />
                  <label for="by-name" className="label greeny-text">
                    By Movie
                  </label>
                  <input
                    type="radio"
                    id="by-keyword"
                    name="search"
                    value="byKeyword"
                    checked={this.state.selectedOption === 'byKeyword'}
                    onChange={this.handleOptionChange}
                  />
                  <label for="by-keyword" className="label greeny-text">
                    By Keyword
                  </label>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="grid-container">
          {moviesFound.length > 0 ? (
            moviesFound.map(movie => <MovieCard movie={movie} />)
          ) : moviesFound.length === 0 ? (
            <ZeroState message={userStartedSearch} />
          ) : (
            <div />
          )}
        </section>
      </div>
    )
  }
}

export default SearchBox
