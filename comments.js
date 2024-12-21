// Create web server
// Run server
// Create route to handle comments
// Create route to handle new comments
// Create route to handle edit comments
// Create route to handle delete comments
// Create route to handle show comments

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
    const { author, content } = req.body;
    comments.addComment(author, content);
    res.status(201).end();
});

app.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { author, content } = req.body;
    comments.editComment(id, author, content);
    res.status(200).end();
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments.deleteComment(id);
    res.status(200).end();
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    res.json(comments.getComment(id));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});