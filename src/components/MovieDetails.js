import React from 'react'
import { getMovie } from '../MoviesAPI'

class MovieDetails extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: null,
      currentMovie: null,
      warningMessage: null
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    })

    getMovie(this.props.match.params.id)
      .then(movie => {
        this.setState({
          currentMovie: movie
        })
      })
      .catch(e => {
        console.log(e)
        this.setState({
          warningMessage: 'Something Went Wrong'
        })
      })
  }

  render() {
    return (
      <main id="movie-details">
        <section class="home_banner_area">
          <div class="container box_1620">
            <div class="banner_inner d-flex align-items-center">
              <div class="banner_content">
                <div class="media">
                  <div class="d-flex">
                    <img src="img/personal.jpg" alt="Hello" />
                  </div>
                  <div class="media-body">
                    <div class="personal_text">
                      <h6>Hello Everybody, i am</h6>
                      <h3>Donald McKinney</h3>
                      <h4>Junior UI/UX Developer</h4>
                      <p>
                        You will begin to realise why this exercise is called
                        the Dickens Pattern (with reference to the ghost showing
                        Scrooge some different futures)
                      </p>
                      <ul class="list basic_info">
                        <li>
                          <a href="#">
                            <i class="lnr lnr-calendar-full" /> 31st December,
                            1992
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="lnr lnr-phone-handset" /> 44 (012) 6954
                            783
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="lnr lnr-envelope" /> businessplan@donald
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="lnr lnr-home" /> Santa monica bullevard
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default MovieDetails
