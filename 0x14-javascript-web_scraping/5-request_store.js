#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, { encoding: 'utf8' }, (err, res, body) => {
  if (err) {
    console.error(err);
  } else if (res.statusCode === 200) {
    fs.writeFile(filePath, body, 'utf8', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Contents of ${url} saved to ${filePath}`);
      }
    });
  } else {
    console.log(`Failed to retrieve ${url}`);
  }
});
