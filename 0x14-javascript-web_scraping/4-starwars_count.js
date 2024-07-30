#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = 18;

request.get(apiUrl, { json: true }, (err, res, body) => {
  if (err) {
    console.error(err);
  } else if (res.statusCode === 200) {
    const movies = body.results;
    let count = 0;
    movies.forEach(movie => {
      if (movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
        count++;
      }
    });
    console.log(count);
  } else {
    console.log(`Failed to retrieve movies`);
  }
});
