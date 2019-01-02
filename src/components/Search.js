import React from 'react'
import { searchMovie } from '../MoviesAPI'
import MovieCardByMovieName from './MovieCardByMovieName'

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      moviesFound: null
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
    searchMovie(this.state.query).then(res => {
      // console.log(res.results)
      this.setState({ moviesFound: res.results })
      this.props.onSearchResult(this.state.moviesFound)
    })
  }

  render() {
    return (
      <div>
        <section class="section-dark">
          <div class="container">
            <div class="row d-flex">
              <div class="col-lg-5 heading-white mb-4 mb-sm-4 mb-lg-0 text-light">
                <h1 className="display-2">Find Your Movie</h1>
              </div>
              <div class="col-lg-7 ftco-wrap search__form">
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
          {this.state.moviesFound ? (
            this.state.moviesFound.map(movie => (
              <MovieCardByMovieName movie={movie} />
            ))
          ) : (
            <div />
          )}
        </section>
      </div>
    )
  }
}

export default SearchBox
