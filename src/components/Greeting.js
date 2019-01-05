import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
  render() {
    const { userName, logOutUser } = this.props
    return (
      <div className="ml-auto welcome-msg">
        <span>Welcome {userName}</span>,{' '}
        <Link to="/login" onClick={e => logOutUser(e)}>
          Logout
        </Link>
      </div>
    )
  }
}

export default Greeting
