const movies = require('./movies')

const getAllMovies = () => {
  return movies
}

const getMoviesByDirectorOrTitle = (searchString) => {
  const foundMovies = movies.filter(movie => {
    let stringDirectors = movie.directors.toString()

    stringDirectors = stringDirectors.toLowerCase()
    let lowerCaseTitle = movie.title.toLowerCase()

    if (stringDirectors.includes(searchString) || lowerCaseTitle.includes(searchString)) {
      return movie
    } })


  return foundMovies
}

const addNewTeamModel = (newMovie) => {
  movies.push(newMovie)
}



module.exports = { getAllMovies, getMoviesByDirectorOrTitle, addNewTeamModel }
