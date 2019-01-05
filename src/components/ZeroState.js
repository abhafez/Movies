import React from 'react'

class ZeroState extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { message } = this.props
    return (
      <div className="zs-container">
        <i className="fa fa-film" aria-hidden="true" />
        <p className="display-2">
          {message
            ? 'No search results found'
            : 'Your Search Result Will Appear Here'}
        </p>
      </div>
    )
  }
}
export default ZeroState
