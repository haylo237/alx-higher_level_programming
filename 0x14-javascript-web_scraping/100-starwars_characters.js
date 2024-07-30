#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request.get(apiUrl, { json: true }, (err, res, body) => {
  if (err) {
    console.error(err);
  } else if (res.statusCode === 200) {
    const characters = body.characters;

    characters.forEach(characterUrl => {
      request.get(characterUrl, { json: true }, (err, res, body) => {
        if (err) {
          console.error(err);
        } else if (res.statusCode === 200) {
          console.log(body.name);
        } else {
          console.log(`Failed to retrieve character`);
        }
      });
    });
  } else {
    console.log(`Failed to retrieve movie`);
  }
});
