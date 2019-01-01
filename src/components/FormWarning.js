import React from 'react'

class FormWarning extends React.Component {
  render() {
    const { warningMessage } = this.props

    return (
      <div className="col-12 alert alert-danger px-3">{warningMessage}</div>
    )
  }
}

export default FormWarning
