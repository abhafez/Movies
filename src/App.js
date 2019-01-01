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
import logo from './assets/images/logo.svg'
import './styles/App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null,
      movie: []
    }
  }

  componentDidMount() {
    MoviesAPI.searchByKeyword('love').then(movie => {
      this.setState({
        movie: movie
      })
    })

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
        <Route
          exact
          path="/"
          render={() => (
            <div classNameName="container">
              <header classNameName="App-header">
                <img src={logo} classNameName="App-logo" alt="logo" />
                <h1 id="logo">MyMovies</h1>
              </header>
            </div>
          )}
        />
        <Route path="/search" render={({ history }) => <SearchComponent />} />
        <Jumbotron />
        <Route path="/signin" render={({ history }) => <SignIn />} />
        <Route path="/signup" render={({ history }) => <SignUp />} />
        <Footer />
      </div>
    )
  }
}

export default App
