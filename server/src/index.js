const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('../knexfile.js')["development"]);

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log('Your server is up at http://localhost:8080')
})

app.get('/movies', (req, res) => {
  knex('movies')
  .select('*')
  .then(movie_list => {
    let movieList = movie_list.map(movie => {
     return {...movie}
    })
    res.status(200).send(movieList)
  })
})