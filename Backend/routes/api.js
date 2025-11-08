const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/submit', (req, res) => {
  const { name } = req.body;
  db.query('INSERT INTO users (name) VALUES (?)', [name], (err) => {
    if (err) return res.status(500).json({ message: 'DB error' });
    res.json({ message: `Hello, ${name}! Your name was saved.` });
  });
});

module.exports = router;
