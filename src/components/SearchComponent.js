import React from 'react'

class SearchBox extends React.Component {

  render () {
    return (
      <section class="search-section">
        <div class="container">
          <div class="row d-flex">
            <div class="col-lg-5 heading-white mb-4 mb-sm-4 mb-lg-0 text-light">
              <h2>Search Your favourite Movie</h2>
            </div>
            <div class="col-lg-7 ftco-wrap">
              <form action="#" class="d-flex">
                <div class="form-group l-mr">
                  <input type="text" class="form-control " placeholder="Find your movie..." />
                </div>
                <div class="form-group d-flex">
                  <input type="submit" class="search-domain btn text-center greeny" value="Search" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SearchBox;
