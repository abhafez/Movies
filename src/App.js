import React from 'react'
import { Route } from 'react-router-dom'

import firebase from './Firebase'
import * as MoviesAPI from './MoviesAPI'

import Search from './components/Search'
import NavBar from './components/NavBar'
import SignIn from './components/Signin'
import SignUp from './components/Signup'
import Footer from './components/Footer'
import Poster from './components/Poster'
import MovieCard from './components/MovieCardByMovieName'
import MovieDetails from './components/MovieDetails'
import FoundMovies from './components/FoundMovies'

import './styles/App.css'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null,
      randomMovies: [],
      displayName: null,
      userID: null,
      searchResults: [],
      movieToDisplayId: null,
      userFavList: []
    }
    this.handleUserSignin = this.handleUserSignin.bind(this)
    this.onSearchResult = this.onSearchResult.bind(this)
  }

  componentDidMount() {
    const random = [206, 307, 101]
    // todo: randomize
    const randomMovie = []
    random.map(id =>
      MoviesAPI.getMovie(id)
        .then(movie => {
          randomMovie.push(movie)
        })
        .then(() => {
          this.setState({
            randomMovies: randomMovie
          })
        })
    )

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user)
      } else {
        this.setState({ user: null })
      }
    })
  }

  handleUserSignin(user) {
    this.setState({
      user: user
    })
  }

  onSearchResult(matchMovies) {
    if (matchMovies) {
      this.setState({
        searchResults: matchMovies
      })
    }
  }

  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        <Route
          path="/search"
          render={({ history }) => (
            <div>
              <Search onSearchResult={this.onSearchResult} />
              <FoundMovies searchResults={this.state.searchResults} />
            </div>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div classNameName="container">
              <div className="row">
                {this.state.randomMovies.map(movie => (
                  <MovieCard movie={movie} />
                ))}
              </div>
            </div>
          )}
        />
        {this.state.movieToDisplayId ? <MovieDetails /> : <div />}
        <Route
          path="/signin"
          render={({ history }) => (
            <SignIn handleUserSignin={this.handleUserSignin} />
          )}
        />
        <Route path="/signup" render={({ history }) => <SignUp />} />
        <Poster />
        <Footer />
      </div>
    )
  }
}

export default App
