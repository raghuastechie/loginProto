const express = require('express');
const app = express();
const knexOps = require('./dbOps/knexOps');
require('dotenv').config();
const port = process.env.PORT;
console.log(port);

app.get('/', (req, res) => {
    res.status(200).send({msg: 'LocalHost:3000 Is Active.'});
});

app.get('/getAll', async (req, res) => {
    let result = await knexOps.getAllUsers();
    res.status(200).send(result);
})

app.listen(port, () => console.log(`Listening On Port: ${port}`));
