const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello from Node.js!</h1>');
});
app.listen(3000, () => {
    console.log('Node.js app running on port 3000');
});
