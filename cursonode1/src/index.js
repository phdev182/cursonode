const { response, request } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
  const { title } = request.query;
  console.log(title);
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'
  ]);
});

app.post('/projects', (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json([
  'Projeto 1',
  'Projeto 2',
  'Projeto 3',
  'Projeto 4'
  ]);
});

app.put('/projects/:id/owner/:owner_id', (request, response) => {
  const params = request.params;
  console.log(params);
  return response.json([
  'Projeto 1',
  'Projeto 2',
  'Projeto 3',
  'Projeto 4'
  ])
})

app.delete('/projects/:id', (req, response) => {
  return response.json([
    'Projeto 3'
  ])
})

app.listen(3333, () =>
    console.log('backend started! 🤪 ')
);
