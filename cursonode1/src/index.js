const { response, request } = require('express');
const express = require('express');
const {uuid} = require('uuidv4');

const app = express();

app.use(express.json());
const projects = [];

app.get('/projects', (request, response) => {
  return response.json(projects);
});

app.post('/projects', (request, response) => {
  const { title, owner }= request.body;
  const id = uuid();
  const project = {
    id,
    title,
    owner
  };
  projects.push(project);
  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;

  const { title, owner } = request.body;

  const projecIndex = projects.findIndex(project => project.id === id);
  if (projecIndex < 0){
    return response.status(400).json({ error: 'Project not found.'});
  };
  const project = {
    id,
    title,
    owner
  };
  projects[projecIndex] = project;
  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  const projecIndex = projects.findIndex(project => project.id === id);
  if (projecIndex < 0){
    return response.status(400).json({ error: 'Project not found.'});
  };
  projects.splice(projecIndex,1);
  return response.status(204).json([]);
});

app.listen(3333, () =>
    console.log('backend started! 🤪 ')
);
