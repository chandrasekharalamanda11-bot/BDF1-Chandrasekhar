
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my Node.js and Express Server!');
});

app.get('/about', (req, res) => {
    res.json({
        name: 'A. Chandra Sekhar',
        section: 'S-15'
    });
});

app.get('/time', (req, res) => {
    res.send(new Date().toString());
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});