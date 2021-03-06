const { response } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ]);
});

app.post('/projects', (req, response) => {
  return response.json([
  'Projeto 1',
  'Projeto 2',
  'Projeto 3',
  'Projeto 4'
  ]);
});

app.put('/projects', (req, response) => {
  return response.json([
  'Projeto 1',
  'Projeto 2',
  'Projeto 3',
  'Projeto 4'
  ])
})

app.delete('/projects', (req, response) => {
  return response.json([
    'Projeto 3'
  ])
})

app.listen(3333, () =>
    console.log('backend started! 🤪 ')
);
