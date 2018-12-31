import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class SignIn extends React.Component {
  render () {
    return (
      <div class="container">
        <form class="px-4 py-3">
          <div class="form-group">
            <label for="exampleDropdownFormEmail1">Email address</label>
            <input
              type="email" class="form-control"
              id="exampleDropdownFormEmail1"
              placeholder="email@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleDropdownFormPassword1">Password</label>
            <input type="password"
              class="form-control"
              id="exampleDropdownFormPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
        <div class="dropdown-divider"></div>
        <p class="">New around here? <Link to="/signup" class="link">Sign up</Link></p>
      </div>
    );
  }
}

export default SignIn;

