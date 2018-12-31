import React from 'react';
import { Route } from 'react-router-dom'
import logo from './assets/images/logo.svg';
import * as MoviesAPI from './MoviesAPI';
import SearchComponent from './components/SearchComponent';
import NavBar from './components/NavBar';
import './styles/App.css';
import SignIn from './components/SignIn';


class App extends React.Component {
  state = {
    movie: [],
  }

  componentDidMount () {
    MoviesAPI.searchByKeyword('love').then((movie) => {
      this.setState({
        movie: movie
      })
    });
  }


  render () {
    return (
      <div>
        <NavBar />
        <Route exact path='/' render={ () => (
          <div className="container">
            <header className="App-header">
              <img src={ logo } className="App-logo" alt="logo" />
              <h1 id='logo'>MyMovies</h1>
            </header>
          </div>
        ) } />
        <Route path='/search' render={ ({ history }) => (
          <SearchComponent />
        ) } />
        <Route path='/signin' render={ ({ history }) => (
          <SignIn />
        ) } />
      </div>
    )
  }
}

export default App;
