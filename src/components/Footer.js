import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="s-footer footer">
        <div className="row footer__top">
          <div className="col-six md-full">
            <h1 className="display-2">Let's Stay In Touch.</h1>
            <p className="lead">
              Subscribe for updates, special offers and more.
            </p>
          </div>
        </div>

        <div className="row footer__bottom">
          <div className="col-five tab-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="col-six tab-full end">
            <ul className="footer__site-links">
              <li>
                <a className="smoothscroll" href="#home" title="intro">
                  Intro
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#features" title="features">
                  Features
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#pricing" title="pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a href="blog.html" title="blog">
                  Blog
                </a>
              </li>
            </ul>

            <p className="footer__contact">
              Did you like this Single Page App? Send us a word: <br />
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
