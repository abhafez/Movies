import React from 'react'
import { Route, Switch } from 'react-router-dom'

import firebase from './Firebase'
import * as MoviesAPI from './MoviesAPI'

import Search from './components/Search'
import NavBar from './components/NavBar'
import SignIn from './components/Signin'
import SignUp from './components/Signup'
import Footer from './components/Footer'
import Poster from './components/Poster'
import MovieCard from './components/MovieCard'
import FoundMovies from './components/FoundMovies'
import MovieDetails from './components/MovieDetails'
import SearchKeyword from './components/SearchKeyword'

import './styles/App.css'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null,
      randomMovies: [],
      displayName: null,
      // userID: null,
      searchResults: [],
      movieToDisplayId: null,
      userFavList: [],
      movie: 205
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
        this.setState({
          user: user,
          displayName: user.displayName,
          userId: user.uid
        })
      } else {
        this.setState({
          userID: null,
          user: null
        })
      }
    })
  }

  handleSignOut(e) {
    firebase.auth().signOut()
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
        <NavBar user={this.state.user} logOutUser={this.handleSignOut} />
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
          path="/SearchKeyword"
          render={({ history }) => (
            <div>
              <SearchKeyword onSearchResult={this.onSearchResult} />
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
        <Switch>
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
        <Poster />
        <Footer />
      </div>
    )
  }
}

export default App
