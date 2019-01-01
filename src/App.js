import React from 'react'
import { Route } from 'react-router-dom'

import firebase from './Firebase'
import * as MoviesAPI from './MoviesAPI'

import SearchComponent from './components/SearchComponent'
import NavBar from './components/NavBar'
import SignIn from './components/Signin'
import SignUp from './components/Signup'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import './styles/App.css'
import MovieCard from './components/MovieCard'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null,
      randomMovies: []
    }
  }

  componentDidMount() {
    const random = [500, 600, 700]
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
    // const ref = firebase.database().ref('user')
    // ref.on('value', snapshot => {
    //   let FBUser = snapshot.val()
    //   this.setState({ user: FBUser })
    // })
  }

  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        <Route path="/search" render={({ history }) => <SearchComponent />} />
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
        <Jumbotron />
        <Route path="/signin" render={({ history }) => <SignIn />} />
        <Route path="/signup" render={({ history }) => <SignUp />} />
        <Footer />
      </div>
    )
  }
}

export default App
