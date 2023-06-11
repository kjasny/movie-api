const { getAllMovies, getMoviesByDirectorOrTitle, addNewTeamModel } = require('./models')


const getAllMoviesController = (request, response) => {
  const allMovies = getAllMovies()

return response.send(allMovies)
}

const getMoviesByDirectorOrTitleController = (request, response) => {
  let { searchString } = request.params

  searchString = searchString.toString()
  searchString = searchString.toLowerCase()
  const foundMovies = getMoviesByDirectorOrTitle(searchString)

  return response.send(foundMovies)
}


const addNewMovieController = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) return response.status(400).send('All fields are required to add a movie')

  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  addNewTeamModel(newMovie)

  return response.send(newMovie)
}

const wrongRouteController = (req, res) => {
  return res.sendStatus(400)
}

module.exports = { getAllMoviesController, getMoviesByDirectorOrTitleController, addNewMovieController, wrongRouteController }
