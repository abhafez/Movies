import React from 'react'
import FormWarning from './FormWarning'
import firebase from '../Firebase'
import { Redirect } from 'react-router-dom'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      passOne: '',
      passTwo: '',
      errorMessage: null,
      redirectToReferrer: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value }, () => {
      if (this.state.passOne !== this.state.passTwo) {
        this.setState({ errorMessage: 'Passwords no not match' })
      } else {
        this.setState({ errorMessage: null })
      }
    })
  }

  handleSubmit(e) {
    var registrationInfo = {
      displayName: this.state.displayName,
      email: this.state.email,
      password: this.state.passOne
    }
    e.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(
        registrationInfo.email,
        registrationInfo.password
      )
      .then(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
      })
      .catch(error => {
        if (error.message !== null) {
          this.setState({ errorMessage: error.message })
        } else {
          this.setState({ errorMessage: null })
        }
      })
  }

  render() {
    if (this.state.redirectToReferrer === true) {
      return <Redirect to="/login" />
    }
    return (
      <form className="mt-3" onSubmit={this.handleSubmit}>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="font-weight-bold mb-3 mt-5">Sign Up</h3>
            <div className="form-row">
              {this.state.errorMessage !== null ? (
                <FormWarning theMessage={this.state.errorMessage} />
              ) : null}
              <section className="col-sm-12 form-group">
                {/* <label
                  className="form-control-label sr-only"
                  htmlFor="displayName">
                  Display Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="displayName"
                  placeholder="Display Name"
                  name="displayName"
                  required
                  value={this.state.displayName}
                  onChange={this.handleChange}
                /> */}
              </section>
            </div>
            <section className="form-group">
              <label className="form-control-label sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Email Address"
                required
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </section>
            <div className="form-row">
              <section className="col-sm-6 form-group">
                <input
                  className="form-control"
                  type="password"
                  name="passOne"
                  placeholder="Password"
                  value={this.state.passOne}
                  onChange={this.handleChange}
                />
              </section>
              <section className="col-sm-6 form-group">
                <input
                  className="form-control"
                  type="password"
                  required
                  name="passTwo"
                  placeholder="Repeat Password"
                  value={this.state.passTwo}
                  onChange={this.handleChange}
                />
              </section>
            </div>
            <div className="form-group text-right mb-0">
              <button className="btn greeny mb-5" type="submit">
                sign up
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default SignUp
