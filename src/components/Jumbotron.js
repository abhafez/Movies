import React from 'react'

class poster extends React.Component {
  constructor(props) {
    super(props)
    this.setState({ width: null, height: null })
    this.isMobileDevice = this.isMobileDevice.bind(this)
  }

  // note: commented cdm cwum are related to todo: below
  // componentDidMount() {
  //   window.addEventListener('resize', this.updateDimensions)
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateDimensions)
  // }

  isMobileDevice() {
    return (
      typeof window.orientation !== 'undefined' ||
      navigator.userAgent.indexOf('IEMobile') !== -1
    )
  }
  render() {
    const desktop = {
      background: 'url("/static/media/this-month.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '600px',
      maxHeight: '600px'
    }

    const smallScreen = {
      background: 'url("/static/media/this-month-mob.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '600px',
      maxHeight: '600px'
    }

    // warning: it works well with different devices. but while switching mode in developer tools
    // we need to refresh to view the target image.
    // todo: make it change on switch

    // todo: add some fade effect to the image
    return (
      <div id="adv" style={this.isMobileDevice() ? smallScreen : desktop} />
    )
  }
}

export default poster
