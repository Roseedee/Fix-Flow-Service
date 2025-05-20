const express = require('express');
const log = require('./middleware/log');

const app = express();
app.use(log);

app.get('/', (req, res) => {
    res.send('Welcome to Fix Flow Service!');
    res.status(200);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});