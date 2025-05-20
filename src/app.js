const express = require('express');
const log = require('./middlewares/log');
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();
app.use(log);

app.get('/', (req, res) => {
    res.send('Welcome to Fix Flow Service!');
    res.status(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});