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
import './styles/App.css'
import MovieCard from './components/MovieCard'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null,
      randomMovies: [],
      displayName: null,
      userID: null
    }
    this.handleUserSignin = this.handleUserSignin.bind(this)
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
        // this.setState({
        //   user: user,
        //   displayName: user.displayName,
        //   userID: user.uid
        // })
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

  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        <Route path="/search" render={({ history }) => <Search />} />
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
