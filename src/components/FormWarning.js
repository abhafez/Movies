import React from 'react'

class FormWarning extends React.Component {
  render() {
    const { theMessage } = this.props

    return <div className="col-12 alert alert-danger px-4">{theMessage}</div>
  }
}

export default FormWarning
