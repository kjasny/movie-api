const express = require('express')
const app = express()
const { getAllMoviesController, getMoviesByDirectorOrTitleController, addNewMovieController, wrongRouteController } = require('./controllers')

app.get('/movies', getAllMoviesController)

app.get('/movies/:searchString', getMoviesByDirectorOrTitleController)

app.post('/movies', express.json(), addNewMovieController)

app.get('*', wrongRouteController)


app.listen(1337, () => {
  console.log('listening on http://localhost:1337')
})
