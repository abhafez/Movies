import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import * as MoviesAPI from './MoviesAPI'
import { base } from './Firebase'

import Search from './components/Search'
import NavBar from './components/NavBar'
import SignIn from './components/Signin'
import SignUp from './components/Signup'
import Footer from './components/Footer'
import MovieCard from './components/MovieCard'
import MovieDetails from './components/MovieDetails'
import SearchKeyword from './components/SearchKeyword'
import './styles/App.css'
import firebase from './Firebase'

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

  addMeeting(id) {
    const ref = firebase.database().ref(`favMovie/${this.state.user.uid}`)
    ref.push({ id: id })
  }

  onSearchResult(matchMovies) {
    if (matchMovies) {
      this.setState({
        searchResults: matchMovies
      })
    }
  }

  componentWillMount() {
    this.FavListRef = base.syncState('favList', {
      context: this,
      state: 'favList'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.FavListRef)
  }

  render() {
    const { user } = this.state
    return (
      <div className="wrapper">
        <div class="content">
          <NavBar user={this.state.user} logOutUser={this.handleSignOut} />
          {/* {user ? <div>favList: {this.state.user.userFavList}</div> : <div />} */}

          <Route path="/search" render={({ history }) => <Redirect to="/" />} />
          <Route
            path="/SearchKeyword"
            render={({ history }) => (
              <div>
                <SearchKeyword onSearchResult={this.onSearchResult} />
              </div>
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div classNameName="container">
                <Search onSearchResult={this.onSearchResult} />
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
            path="/login"
            render={({ history }) =>
              this.state.user === null ? (
                <SignIn handleUserSignin={this.handleUserSignin} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/signup" render={({ history }) => <SignUp />} />
          <Switch>
            <Route path="/movies/:id" component={MovieDetails} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
