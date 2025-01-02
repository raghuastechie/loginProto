const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
console.log(port);

app.get('/', (req, res) => {
    res.status(200).send({msg: 'success'});
});

app.get('/active', (req, res) => {
    res.status(200).send({msg: 'LocalHost:3000 Is Active.'});
});

app.listen(port, () => console.log(`Listening On Port: ${port}`));
