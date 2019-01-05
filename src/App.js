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
import './styles/App.css'
import firebase from './Firebase'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null,
      todaysMovies: [],
      displayName: null,
      searchResults: [],
      movieToDisplayId: null
    }
    this.handleUserSignin = this.handleUserSignin.bind(this)
    this.onSearchResult = this.onSearchResult.bind(this)
  }

  componentDidMount() {
    const random = [508, 453, 238, 118]
    const todaysMovies = []
    random.map(id =>
      MoviesAPI.getMovie(id)
        .then(movie => {
          todaysMovies.push(movie)
        })
        .then(() => {
          this.setState({
            todaysMovies: todaysMovies
          })
        })
    )

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user,
          displayName: user.displayName,
          userId: user.uid,
          userFavList: [200, 300]
        })
      } else {
        this.setState({
          user: null
        })
      }
    })
  }

  handleSignOut() {
    firebase.auth().signOut()
  }

  handleUserSignin(user) {
    this.setState({
      user: user
    })
  }

  addMovie(id) {
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

    var FBuser = firebase.auth().currentUser

    if (FBuser != null) {
      FBuser.providerData.forEach(function(profile) {
        console.log('Sign-in provider: ' + profile.providerId)
        console.log('  Provider-specific UID: ' + profile.uid)
        console.log('  Name: ' + profile.displayName)
        console.log('  Email: ' + profile.email)
        console.log('  Photo URL: ' + profile.photoURL)
      })
    }
  }

  componentWillUnmount() {
    base.removeBinding(this.FavListRef)
  }

  render() {
    const { user, todaysMovies, movieToDisplayId } = this.state
    return (
      <div className="wrapper">
        <div className="content">
          <NavBar user={this.state.user} logOutUser={this.handleSignOut} />
          {/* {user ? <div>favList: {this.state.user.userFavList}</div> : <div />} */}

          <Route path="/search" render={() => <Redirect to="/" />} />
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Search onSearchResult={this.onSearchResult} />
              </div>
            )}
          />
          {movieToDisplayId ? <MovieDetails /> : <div />}
          <Route
            path="/login"
            render={() =>
              user === null ? (
                <SignIn handleUserSignin={this.handleUserSignin} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/signup" render={() => <SignUp />} />
          <Switch>
            <Route path="/movies/:id" component={MovieDetails} />
          </Switch>
        </div>
        <div>
          <h2 className="text-center display-3 tonight lighter-gray">
            Tonight on MyMovies Channel
          </h2>
          <div className="grid-container lighter-gray">
            {todaysMovies.map(movie => (
              <MovieCard movie={movie} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
