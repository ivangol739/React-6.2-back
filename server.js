const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let notes = [
  { id: 1, content: 'Первая заметка' },
  { id: 2, content: 'Вторая заметка' },
];

app.get('/notes', (req, res) => {
  res.json(notes);
});

app.post('/notes', (req, res) => {
  const newNote = {
    id: notes.length + 1,
    content: req.body.content
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter(note => note.id !== id);
  res.status(200).json({ message: 'Note deleted' });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});