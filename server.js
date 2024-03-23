const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});