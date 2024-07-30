#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request.get(apiUrl, { json: true }, (err, res, body) => {
  if (err) {
    console.error(err);
  } else if (res.statusCode === 200) {
    const characters = body.characters;

    let completed = 0;
    const characterNames = new Array(characters.length);

    characters.forEach((characterUrl, index) => {
      request.get(characterUrl, { json: true }, (err, res, body) => {
        if (err) {
          console.error(err);
        } else if (res.statusCode === 200) {
          characterNames[index] = body.name;
        } else {
          characterNames[index] = `Failed to retrieve character`;
        }

        completed++;
        if (completed === characters.length) {
          characterNames.forEach(name => console.log(name));
        }
      });
    });
  } else {
    console.log(`Failed to retrieve movie`);
  }
});
