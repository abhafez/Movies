import React, { Component } from 'react';
import logo from './logo.svg';
import * as MoviesAPI from './MoviesAPI';
import './App.css';


class App extends Component {
  state = {
    movie: [],
  }

  componentDidMount () {
    MoviesAPI.searchMovie('jack reacher').then((movie) => {
      this.setState({
        movie: movie
      })
    });


  }


  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
