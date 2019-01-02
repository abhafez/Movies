import React from 'react'

class Greeting extends React.Component {
  render() {
    const { userName } = this.props
    return (
      <div>
        <span>Welcome {userName}</span>, <a>Sign Out</a>
      </div>
    )
  }
}

export default Greeting
