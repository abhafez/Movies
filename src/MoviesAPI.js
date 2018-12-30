//
const apiKey = "api_key=d8e71bd90c9ada73b8f08175d1a77ac1";

export const getMovie = (movieId) =>
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?${apiKey}`)
    .then(res => res.json())
    .then(movie => movie)

