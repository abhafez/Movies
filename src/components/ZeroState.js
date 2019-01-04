import React from 'react'

class ZeroState extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="zs-container">
        <i className="fa fa-heart" aria-hidden="true" />
        <p class="display-2">No search results found</p>
      </div>
    )
  }
}
export default ZeroState
