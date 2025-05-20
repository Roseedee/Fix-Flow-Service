const express = require('express');
const log = require('./middlewares/log');
const env = require('./config/env');

const app = express();
app.use(log);

app.get('/', (req, res) => {
    res.send('Welcome to Fix Flow Service!');
    res.status(200);
});

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`);
});