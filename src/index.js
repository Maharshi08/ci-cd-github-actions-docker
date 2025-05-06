const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

// Load countries from JSON file
const countriesPath = path.join(__dirname, 'countries.json');
let countries = [];

try {
  const data = fs.readFileSync(countriesPath, 'utf-8');
  countries = JSON.parse(data);
} catch (error) {
  console.error('❌ Error reading countries.json:', error.message);
}

// Route to get all countries
app.get('/countries', (req, res) => {
  res.json(countries);
});

// Route to get details for a specific country by code
app.get('/countries/:code', (req, res) => {
  const codeParam = req.params.code.toUpperCase();
  const country = countries.find(c => c.code === codeParam);

  if (country) {
    res.json(country);
  } else {
    res.status(404).json({ error: 'Country not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
