// server.js
// Add your code here

import app from './app.js';

// Set the port to either the environment's provided port or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
