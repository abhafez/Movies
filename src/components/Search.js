import React from 'react'

class SearchBox extends React.Component {
  render() {
    return (
      <section class="section-dark">
        <div class="container">
          <div class="row d-flex">
            <div class="col-lg-5 heading-white mb-4 mb-sm-4 mb-lg-0 text-light">
              <h1 className="display-2">Find Your Movie</h1>
            </div>
            <div class="col-lg-7 ftco-wrap search__form">
              <div class="input__form">
                <form id="sm-form" action="#" class="d-flex">
                  <input
                    type="text"
                    class="form-control "
                    placeholder="Find your movie..."
                  />
                  <input
                    type="submit"
                    class="search-domain btn text-center greeny"
                    value="Search"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SearchBox
