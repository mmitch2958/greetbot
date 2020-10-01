const express = require('express')
const server = express();


server.get('/', (req, res) => {
    res.status(200).json({ hello: 'hello' });
});

module.exports = server;