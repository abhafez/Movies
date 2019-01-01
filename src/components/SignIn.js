import React from "react";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  render() {
    return (
      <div className='container'>
        <form className='px-4 py-3'>
          <div className='form-group'>
            <label htmlFor='exampleDropdownFormEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleDropdownFormEmail1'
              placeholder='email@example.com'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleDropdownFormPassword1'>Password</label>
            <input
              type='password'
              className='form-control'
              id='exampleDropdownFormPassword1'
              placeholder='Password'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Sign in
          </button>
        </form>
        <div className='dropdown-divider' />
        <p className=''>
          New around here?{" "}
          <Link to='/signup' className='link'>
            Sign up
          </Link>
        </p>
      </div>
    );
  }
}

export default SignIn;
