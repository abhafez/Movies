import React, { Component } from "react";

class poster extends Component {
  render() {
    const desktop = {
      background: 'url("/static/media/this-month.367309b0.jpg")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "600px",
      maxHeight: "600px"
    };

    const smallScreen = {
      background: 'url("/static/media/this-month.367309b0.jpg")',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "600px",
      maxHeight: "600px"
    };

    return <div id='adv' style={desktop} />;
  }
}

export default poster;
