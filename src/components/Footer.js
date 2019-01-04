import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <footer className="s-footer footer">
        <div className="row footer__top">
          <div className="col-six md-full">
            <h1 className="display-2">Let's Stay In Touch.</h1>
          </div>
        </div>

        <div className="row footer__bottom">
          <div className="col-six tab-full end">
            <p className="footer__contact">
              Did you like this Single Page App? Send me a word: <br />
              <a href="mailto:#0" className="footer__mail-link">
                abdurrahman.hafez@gmail.com
              </a>
            </p>

            <div className="cl-copyright">
              <span>
                Copyright &copy;
                {new Date().getFullYear()}
                All rights reserved | This Task is made with
                <i className="fa fa-heart" aria-hidden="true" /> by Abdurrahman
                Hafez
              </span>
            </div>
          </div>
        </div>
        <div className="go-top">
          <a className="smoothscroll" title="Back to Top" href="#top">
            Top
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
