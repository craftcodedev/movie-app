const express = require('express');
const app = express();
const movies = require('./movies');

app.get('/', function (req, res) {
  res.send('Movie APP!');
});

app.get('/movies', function (req, res) {
  let title = req.query.title;
  if (title === undefined) {
    return res.json(movies);
  }

  title = title.replace(/-/g, " ");
  let response = [];
  movies.forEach((movie) => {
    if (title === movie.Title) {
      response.push(movie);
    }
  });

  res.json(response);
});

app.listen(9333, function () {
  console.log('Movie app listening on port 9333!');
});
