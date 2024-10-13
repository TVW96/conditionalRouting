// app.js
// Add your code here

import express from 'express';

const app = express();

// Route handler for the root path (/)
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Route handler for the /about path
app.get('/about', (req, res) => {
    res.send('About page');
});

// Conditional routing for /foo
app.get('/foo', (req, res, next) => {
    // Randomly decide between two responses
    const randomChoice = Math.random() < 0.5; // 50% chance

    if (randomChoice) {
        res.send('sometimes this');
    } else {
        next(); // Pass control to the next matching route
    }
});

// Second route handler for /foo
app.get('/foo', (req, res) => {
    res.send('and sometimes that');
});

// 404 Error handling for undefined routes
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});


export default app;
