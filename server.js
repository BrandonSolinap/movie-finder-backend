const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const TMDB_API_KEY = process.env.TMDB_API_KEY;
console.log('TMDB API Key loaded:', TMDB_API_KEY ? 'Yes' : 'No');

// Middleware
app.use(cors()); // Allows requests from your React app
app.use(express.json()); // Allows parsing JSON requests

// Test route - make sure server is working
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is working!' });
});

// Proxy endpoint for popular movies
app.get('/api/movies/popular', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`
    );
    res.json(response.data.results);
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

// Proxy endpoint for search
app.get('/api/movies/search', async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
    );
    res.json(response.data.results);
  } catch (error) {
    console.error('Error searching movies:', error);
    res.status(500).json({ error: 'Failed to search movies' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
