//
const urlStart = "https://api.themoviedb.org/3/"
const apiKey = "api_key=d8e71bd90c9ada73b8f08175d1a77ac1";

export const getMovie = (movieId) =>
  fetch(`${urlStart}movie/${movieId}?${apiKey}`)
    .then(res => res.json())
    .then(movie => movie)

export const searchMovie = (query) =>
  fetch(`${urlStart}search/movie?${apiKey}&query=${query}`)
    .then(res => res.json())
    .then(match => match)

export const searchByKeyword = (keyword) =>
  fetch(`${urlStart}search/keyword?${apiKey}&query=${keyword}`)
    .then(res => res.json())
    .then(match => match)

