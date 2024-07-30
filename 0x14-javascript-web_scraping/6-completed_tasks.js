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

    Object.keys(completedTasks).forEach(userId => {
      console.log(`User ID: ${userId} has completed ${completedTasks[userId]} tasks`);
    });
  } else {
    console.log(`Failed to retrieve todos`);
  }
});
