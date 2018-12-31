import React from 'react';
import { Route } from 'react-router-dom'
import logo from './assets/images/logo.svg';
import * as MoviesAPI from './MoviesAPI';
import './styles/App.css';


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
        <Route exact path='/' render={ () => (
          <div className="container">
            <header className="App-header">
              <img src={ logo } className="App-logo" alt="logo" />
              <h1 id='logo'>MyMovies</h1>
            </header>
          </div>
        ) } />
      </div>
    )
  }
}

export default App;
