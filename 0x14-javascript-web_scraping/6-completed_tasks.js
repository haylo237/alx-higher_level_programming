#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, { json: true }, (err, res, body) => {
  if (err) {
    console.error(err);
  } else if (res.statusCode === 200) {
    const todos = body;
    const completedTasks = {};

    todos.forEach(todo => {
      if (todo.completed) {
        if (completedTasks[todo.userId]) {
          completedTasks[todo.userId]++;
        } else {
          completedTasks[todo.userId] = 1;
        }
      }
    });

    // Convert the result to a JSON string and replace double quotes with single quotes
    const jsonString = JSON.stringify(completedTasks, null, 2);
    const singleQuoteJsonString = jsonString.replace(/\"/g, "'");

    console.log(singleQuoteJsonString);
  } else {
    console.log('Failed to retrieve todos');
  }
});

