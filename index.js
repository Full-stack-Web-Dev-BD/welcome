const express = require('express');

// Initialize the app
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Define the root GET route
app.get('/', (req, res) => {
  res.send('Welcome to our Express API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
